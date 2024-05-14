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
