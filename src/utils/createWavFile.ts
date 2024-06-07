/* export function createWavFile(audioBlob: Blob) {
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
    header.setUint32(0, 0x46464952, true); // "RIFF"
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
} */

export function createWavFile(audioBlob: Blob): Promise<Blob> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsArrayBuffer(audioBlob);

    reader.onloadend = function () {
      const audioBuffer = reader.result;
      const audioLength = (audioBuffer as ArrayBuffer).byteLength;
      const headerLength = 44;
      const totalLength = headerLength + audioLength;

      const wavBuffer = new ArrayBuffer(totalLength);
      const view = new DataView(wavBuffer);

      try {
        // RIFF chunk descriptor
        writeString(view, 0, "RIFF");
        view.setUint32(4, 36 + audioLength, true);
        writeString(view, 8, "WAVE");

        // FMT sub-chunk
        writeString(view, 12, "fmt ");
        view.setUint32(16, 16, true); // Subchunk1Size (16 for PCM)
        view.setUint16(20, 1, true); // AudioFormat (1 for PCM)
        view.setUint16(22, 1, true); // NumChannels (1 for mono)
        view.setUint32(24, 16000, true); // SampleRate
        view.setUint32(28, 16000 * 2, true); // ByteRate (SampleRate * NumChannels * BitsPerSample/8)
        view.setUint16(32, 2, true); // BlockAlign (NumChannels * BitsPerSample/8)
        view.setUint16(34, 16, true); // BitsPerSample

        // Data sub-chunk
        writeString(view, 36, "data");
        view.setUint32(40, audioLength, true);

        // Audio data
        const audioData = new Uint8Array(audioBuffer as ArrayBuffer);

        console.log(audioData);
        console.log(view);

        const header = {
          chunkId: getString(view, 0, 4),
          chunkSize: view.getUint32(4, true),
          format: getString(view, 8, 4),
          subchunk1Id: getString(view, 12, 4),
          subchunk1Size: view.getUint32(16, true),
          audioFormat: view.getUint16(20, true),
          numChannels: view.getUint16(22, true),
          sampleRate: view.getUint32(24, true),
          byteRate: view.getUint32(28, true),
          blockAlign: view.getUint16(32, true),
          bitsPerSample: view.getUint16(34, true),
          subchunk2Id: getString(view, 36, 4),
          subchunk2Size: view.getUint32(40, true),
        };
        console.log("WAV Header:", header);

        for (let i = 0; i < audioData.length; i++) {
          view.setUint8(44 + i, audioData[i]);
        }

        // Create a new Blob with the WAV file data
        const wavBlob = new Blob([view], { type: "audio/wav" });

        resolve(wavBlob);
      } catch (error) {
        reject(error);
      }
    };

    reader.onerror = function () {
      reject(reader.error);
    };

    function writeString(view: DataView, offset: number, string: string) {
      for (let i = 0; i < string.length; i++) {
        view.setUint8(offset + i, string.charCodeAt(i));
      }
    }
  });
}

function getString(view: DataView, offset: number, length: number) {
  let string = "";
  for (let i = 0; i < length; i++) {
    string += String.fromCharCode(view.getUint8(offset + i));
  }
  return string;
}

export function convertBlobToFile(
  blob: Blob,
  filename: string,
  mimeType: string = "audio/wav"
): File {
  const file = new File([blob], filename, { type: mimeType });
  return file;
}
