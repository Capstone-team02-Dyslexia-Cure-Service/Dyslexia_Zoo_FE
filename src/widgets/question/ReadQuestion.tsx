import { useState, useRef } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import styled from "@emotion/styled";

import {
  TTSText,
  QuestionContainer,
  RowContainer,
  StartRecordButton,
  StopRecordButton,
  SaveButton,
} from "@/entities";

import {
  PlayService,
  usePlayState,
  useTestState,
  TestService,
  useLayoutState,
} from "@/shared";

export const ReadQuestion = ({
  content,
  id,
  questionType,
  type,
  color,
  buttonColor,
}: {
  content: string;
  id: number;
  questionType: Question.QuestionType;
  type: "TEST" | "PLAY";
  color?: string;
  buttonColor?: string;
}) => {
  const setPlayAnswer = usePlayState((state) => state.setAnswer);
  const answer = usePlayState((state) => state.answer);
  const { submitQuestion } = PlayService();

  const testId = useTestState((state) => state.testId);
  const setTestAnswer = useTestState((state) => state.setAnswer);
  const { submitReadAnswer } = TestService();

  const setMessage = useLayoutState((state) => state.setMessage);

  const { handleSubmit } = useForm<Question.WriteQuestionFrom>();

  const onSubmit: SubmitHandler<Question.ReadQuestionFrom> = () => {
    if (type === "PLAY" && answer === undefined)
      setMessage("정답을 기록하고 제출해주세요!");
    else if (type == "PLAY") submitQuestion(id, questionType, answer as File);
    else submitReadAnswer(testId, id, questionType);
  };

  //New
  const [isRecording, setIsRecording] = useState(false);
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

      mediaRecorderRef.current.ondataavailable = async (event: BlobEvent) => {
        const audioBlob = new Blob([event.data], { type: "audio/webm" });
        const wavBlob = await createWavFile(audioBlob);
        if (type === "PLAY")
          setPlayAnswer(new File([wavBlob], "file.wav", { type: "audio/wav" }));
        else
          setTestAnswer(
            id,
            questionType,
            new File([wavBlob], "file.wav", { type: "audio/wav" })
          );
      };
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

  const StyleQuestionContainer = styled(QuestionContainer)`
    background-color: ${color ? color : `#2121daad`};
    border-color: ${color ? color : `#2121daad`};
  `;

  return (
    <StyleQuestionContainer onSubmit={handleSubmit(onSubmit)}>
      <TTSText
        text={"버튼을 누르고 아래 단어를 정확하게 발음해줘!"}
        style={{
          fontSize: "33px",
          fontWeight: "bold",
          color: "white",
          marginBottom: "12px",
        }}
      />
      <RowContainer>
        {!isRecording ? (
          <StartRecordButton
            color={buttonColor}
            onClick={() => {
              startRecording();
            }}
          />
        ) : (
          <StopRecordButton
            color={"#ffbb00"}
            onClick={() => {
              stopRecording();
            }}
          />
        )}
        <Content
          style={{
            fontSize: questionType === "READ_SENTENCE" ? "26px" : "none",
          }}
        >
          {content}
        </Content>
        <SaveButton color={buttonColor} onClick={handleSubmit(onSubmit)} />
      </RowContainer>
    </StyleQuestionContainer>
  );
};

const Content = styled.div`
  background-color: #ffffff;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 410px;
  height: 110px;

  border: 0px white solid;
  border-left: 10px white solid;
  border-right: 10px white solid;
  border-radius: 7px;

  margin-left: 27px;
  margin-right: 27px;

  outline: none;

  font-size: 45px;
  font-weight: bold;
`;
