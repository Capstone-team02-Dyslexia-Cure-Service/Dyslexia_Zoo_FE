import { RecordRTCPromisesHandler } from "recordrtc";

const rtcSession = {
  type: "audio",
  mimeType: "audio/webm;codecs=pcm",
  audio: true,
  // recorderType: StereoAudioRecorder,
  disableLogs: false,
  numberOfAudioChannels: 1,
  desiredSampRate: 16000,
  bufferSize: 16384,
  // sampleRate: 48000,
  // desiredSampleRate: 16000,
  timeSlice: 1000,
};

export const recorder = async () => {
  const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
  const recorder = new RecordRTCPromisesHandler(stream, undefined);

  return recorder;
};
