import RecordRTC, { RecordRTCPromisesHandler } from "recordrtc";
import { convertBlobToFile } from "./createWavFile";

const rtcSession: RecordRTC.Options = {
  type: "audio",
  mimeType: "audio/wav",
  disableLogs: false,
  numberOfAudioChannels: 1,
  desiredSampRate: 16000,
  bufferSize: 16384,
  timeSlice: 1000,
};

function createAudioElement(blobUrl: string) {
  const downloadEl = document.createElement("a");
  downloadEl.innerHTML = "download";
  downloadEl.download = "audio.wav";
  downloadEl.href = blobUrl;
  const audioEl = document.createElement("audio");
  audioEl.controls = true;
  const sourceEl = document.createElement("source");
  sourceEl.src = blobUrl;
  sourceEl.type = "audio/wav";
  audioEl.appendChild(sourceEl);
  document.body.appendChild(audioEl);
  document.body.appendChild(downloadEl);
}

export const useRecorder = () => {
  //const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
  //const recorder = new RecordRTCPromisesHandler(stream, rtcSession);

  //await record?.stopRecording()
  //recorder.startRecording()
  //

  //navigator.mediaDevices.getUserMedia({ audio: true });

  //let audioRecorder: RecordRTC;

  const startRecorder = (
    audioRecorder: React.MutableRefObject<RecordRTC | undefined>
  ) => {
    // getUserMedia로 오디오 스트림(나의 음성) 가져오기
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then(function (stream) {
        // 오디오 스트림을 녹음하기 위한 RecordRTC 객체 생성
        audioRecorder.current = new RecordRTC(stream, rtcSession);

        // 녹음 시작
        audioRecorder.current.startRecording();
      })
      .catch(function (error) {
        console.error("getUserMedia error:", error);
      });
  };

  const stopRecorder = (
    audioRecorder: React.MutableRefObject<RecordRTC | undefined>,
    save: (file: File) => void
  ) => {
    if (!audioRecorder.current) {
      console.log("no audio recorder");
      throw new Error();
    }

    // 녹음 중지
    audioRecorder.current.stopRecording(function () {
      console.log("stopRecording");
      // 녹음된 오디오 데이터를 Blob 객체로 가져오기
      const audioBlob = audioRecorder.current!.getBlob();

      save(convertBlobToFile(audioBlob, "answerFile"));
      //createAudioElement(window.URL.createObjectURL(audioBlob));
    });
  };

  return { startRecorder, stopRecorder };
};
