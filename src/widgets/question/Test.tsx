import React, { useState, useRef } from "react";

const AudioRecorder: React.FC = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);
      audioChunksRef.current = [];

      mediaRecorderRef.current.ondataavailable = (event: BlobEvent) => {
        audioChunksRef.current.push(event.data);
      };

      mediaRecorderRef.current.onstop = async () => {
        const audioBlob = new Blob(audioChunksRef.current, {
          type: "audio/webm",
        });
        const wavBlob = await createWavFile(audioBlob);
        const audioUrl = URL.createObjectURL(wavBlob);
        setAudioUrl(audioUrl);
      };

      mediaRecorderRef.current.start();
      setIsRecording(true);
    } catch (error) {
      console.error("Error accessing microphone:", error);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  const createWavFile = (audioBlob: Blob): Promise<Blob> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsArrayBuffer(audioBlob);

      reader.onloadend = async () => {
        const audioBuffer = reader.result as ArrayBuffer;
        const audioContext = new window.AudioContext();
        const decodedData = await audioContext.decodeAudioData(audioBuffer);

        const resampledData = await resampleAudioBuffer(decodedData, 16000);
        const wavBuffer = encodeWAV(resampledData);
        const wavBlob = new Blob([wavBuffer], { type: "audio/wav" });
        resolve(wavBlob);
      };

      reader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const resampleAudioBuffer = (
    audioBuffer: AudioBuffer,
    targetSampleRate: number
  ): Promise<AudioBuffer> => {
    return new Promise((resolve) => {
      const numberOfChannels = audioBuffer.numberOfChannels;
      const length =
        (audioBuffer.length * targetSampleRate) / audioBuffer.sampleRate;
      const offlineContext = new OfflineAudioContext(
        numberOfChannels,
        length,
        targetSampleRate
      );

      const bufferSource = offlineContext.createBufferSource();
      bufferSource.buffer = audioBuffer;

      bufferSource.connect(offlineContext.destination);
      bufferSource.start(0);
      offlineContext.startRendering().then((resampledBuffer) => {
        resolve(resampledBuffer);
      });
    });
  };

  const encodeWAV = (audioBuffer: AudioBuffer): ArrayBuffer => {
    const numChannels = audioBuffer.numberOfChannels;
    const sampleRate = audioBuffer.sampleRate;
    const bitsPerSample = 16;
    const byteRate = (sampleRate * numChannels * bitsPerSample) / 8;
    const blockAlign = (numChannels * bitsPerSample) / 8;
    const dataLength = audioBuffer.length * numChannels * 2;
    const buffer = new ArrayBuffer(44 + dataLength);
    const view = new DataView(buffer);

    // RIFF chunk descriptor
    writeString(view, 0, "RIFF");
    view.setUint32(4, 36 + dataLength, true);
    writeString(view, 8, "WAVE");

    // FMT sub-chunk
    writeString(view, 12, "fmt ");
    view.setUint32(16, 16, true); // Subchunk1Size (16 for PCM)
    view.setUint16(20, 1, true); // AudioFormat (1 for PCM)
    view.setUint16(22, numChannels, true); // NumChannels
    view.setUint32(24, sampleRate, true); // SampleRate
    view.setUint32(28, byteRate, true); // ByteRate
    view.setUint16(32, blockAlign, true); // BlockAlign
    view.setUint16(34, bitsPerSample, true); // BitsPerSample

    // Data sub-chunk
    writeString(view, 36, "data");
    view.setUint32(40, dataLength, true);

    // Write audio samples
    const interleaved = interleave(audioBuffer);
    const volume = 1;
    let index = 44;
    for (let i = 0; i < interleaved.length; i++) {
      view.setInt16(index, interleaved[i] * (0x7fff * volume), true);
      index += 2;
    }

    return buffer;
  };

  const interleave = (audioBuffer: AudioBuffer): Float32Array => {
    const numberOfChannels = audioBuffer.numberOfChannels;
    const length = audioBuffer.length * numberOfChannels;
    const result = new Float32Array(length);
    let index = 0;
    let inputIndex = 0;

    for (let i = 0; i < audioBuffer.length; i++) {
      for (let channel = 0; channel < numberOfChannels; channel++) {
        result[index++] = audioBuffer.getChannelData(channel)[inputIndex];
      }
      inputIndex++;
    }
    return result;
  };

  const writeString = (view: DataView, offset: number, string: string) => {
    for (let i = 0; i < string.length; i++) {
      view.setUint8(offset + i, string.charCodeAt(i));
    }
  };

  const downloadRecording = () => {
    if (audioUrl) {
      const a = document.createElement("a");
      a.style.display = "none";
      a.href = audioUrl;
      a.download = "recording.wav";
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(audioUrl);
    }
  };

  return (
    <div>
      <button onClick={startRecording} disabled={isRecording}>
        Start Recording
      </button>
      <button onClick={stopRecording} disabled={!isRecording}>
        Stop Recording
      </button>
      {audioUrl && (
        <div>
          <audio controls src={audioUrl}></audio>
          <button onClick={downloadRecording}>Download Recording</button>
        </div>
      )}
    </div>
  );
};

export default AudioRecorder;
