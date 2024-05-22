import RecordRTC, { RecordRTCPromisesHandler } from "recordrtc";

const rtcSession: RecordRTC.Options = {
  type: "audio",
  mimeType: "audio/webm;codecs=pcm",
  //audio: true,
  // recorderType: StereoAudioRecorder,
  disableLogs: false,
  numberOfAudioChannels: 1,
  desiredSampRate: 16000,
  bufferSize: 16384,
  // sampleRate: 48000,
  // desiredSampleRate: 16000,
  timeSlice: 1000,
};

function createWavFile(audioBlob: Blob) {
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

export const recorder = () => {
  //const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
  //const recorder = new RecordRTCPromisesHandler(stream, rtcSession);

  //await record?.stopRecording()
  //recorder.startRecording()
  //

  //navigator.mediaDevices.getUserMedia({ audio: true });

  //let audioRecorder: RecordRTC;

  const startRecorder = (audioRecorder: RecordRTC) => {
    // getUserMedia로 오디오 스트림(나의 음성) 가져오기
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then(function (stream) {
        // 오디오 스트림을 녹음하기 위한 RecordRTC 객체 생성
        audioRecorder = new RecordRTC(stream, rtcSession);

        // 녹음 시작
        audioRecorder.startRecording();
      })
      .catch(function (error) {
        console.error("getUserMedia error:", error);
      });
  };

  const stopRecorder = (audioRecorder: RecordRTC) => {
    console.log("stop");
    // 녹음 중지
    audioRecorder.stopRecording(function () {
      console.log("stopRecording");
      // 녹음된 오디오 데이터를 Blob 객체로 가져오기
      const audioBlob = audioRecorder.getBlob();

      //return createWavFile(audioBlob);

      const url = window.URL.createObjectURL(audioBlob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "example";
      // 파일 다운로드
      a.click();
      setTimeout(() => {
        window.URL.revokeObjectURL(url);
      }, 100);
    });
  };

  return { startRecorder, stopRecorder };
};
