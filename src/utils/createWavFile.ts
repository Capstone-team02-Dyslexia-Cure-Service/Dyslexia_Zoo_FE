export function createWavFile(audioBlob: Blob) {
  // 기본 WAV 헤더 정보를 설정합니다.
  const sampleRate = 44100; // 샘플 레이트 (예: 44.1 kHz)
  const numChannels = 1; // 채널 수 (모노: 1, 스테레오: 2)
  const bitsPerSample = 16; // 샘플 당 비트 수

  // Blob 데이터를 ArrayBuffer로 변환합니다.
  return audioBlob.arrayBuffer().then((buffer) => {
    const data = new DataView(buffer);

    //const numSamples = data.byteLength / 2; // 16비트 오디오이므로 2로 나눔
    const byteRate = (sampleRate * numChannels * bitsPerSample) / 8;
    const blockAlign = (numChannels * bitsPerSample) / 8;
    const wavHeader = new ArrayBuffer(44);
    const header = new DataView(wavHeader);

    // RIFF 헤더
    header.setUint32(0, 0x46464952, false); // "RIFF"
    header.setUint32(4, 36 + data.byteLength, true); // 파일 크기 (전체 크기 - 8)
    header.setUint32(8, 0x45564157, false); // "WAVE"

    // fmt 서브 청크
    header.setUint32(12, 0x20746d66, false); // "fmt "
    header.setUint32(16, 16, true); // 서브 청크 크기 (16 for PCM)
    header.setUint16(20, 1, true); // 오디오 포맷 (1 for PCM)
    header.setUint16(22, numChannels, true); // 채널 수
    header.setUint32(24, sampleRate, true); // 샘플 레이트
    header.setUint32(28, byteRate, true); // 바이트 레이트
    header.setUint16(32, blockAlign, true); // 블록 정렬
    header.setUint16(34, bitsPerSample, true); // 샘플 당 비트 수

    // data 서브 청크
    header.setUint32(36, 0x61746164, false); // "data"
    header.setUint32(40, data.byteLength, true); // 데이터 크기

    // WAV 파일로 결합합니다.
    const wavBlob = new Blob([header, data], { type: "audio/wav" });
    return wavBlob;
  });
}

export function convertBlobToFile(
  blob: Blob,
  filename: string,
  mimeType: string = "audio/wav"
): File {
  const file = new File([blob], filename, { type: mimeType });
  return file;
}
