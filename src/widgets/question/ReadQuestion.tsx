import { useState, useRef } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import RecordRTC from "recordrtc";

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
  useTestState,
  PlayService,
  usePlayState,
  useLayoutState,
} from "@/shared";

import { useRecorder } from "@/utils";

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
  const setAnswer = usePlayState((state) => state.setAnswer);
  const answer = usePlayState((state) => state.answer);
  const { submitQuestion } = PlayService();

  const setMessage = useLayoutState((state) => state.setMessage);

  const [recording, setRecording] = useState(false);
  const audioRecorder = useRef<RecordRTC>();
  const { startRecorder, stopRecorder } = useRecorder();

  const { handleSubmit } = useForm<Question.WriteQuestionFrom>();

  const onSubmit: SubmitHandler<Question.ReadQuestionFrom> = () => {
    if (answer === undefined) setMessage("정답을 기록하고 제출해주세요!");
    else if (type == "PLAY") submitQuestion(id, questionType, answer);
    else console.log("Test");
  };

  const StyleQuestionContainer = styled(QuestionContainer)`
    background-color: ${color ? color : `#1f1fbd`};
    border-color: ${color ? color : `#1f1fbd`};
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
        {!recording ? (
          <StartRecordButton
            color={buttonColor}
            onClick={() => {
              startRecorder(audioRecorder);
              setRecording(true);
            }}
          />
        ) : (
          <StopRecordButton
            color={buttonColor}
            onClick={() => {
              if (type === "PLAY")
                stopRecorder(audioRecorder, (file: File) => {
                  setAnswer(file);
                });
              else {
                console.log("TEST");
              }
              setRecording(false);
            }}
          />
        )}
        <Content>{content}</Content>
        <SaveButton color={buttonColor} onClick={handleSubmit(onSubmit)} />
      </RowContainer>
    </StyleQuestionContainer>
  );
};

const Content = styled.div`
  background-color: white;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 420px;
  height: 110px;

  border: 0px white solid;
  border-radius: 7px;

  margin-left: 27px;
  margin-right: 27px;

  outline: none;

  font-size: 45px;
  font-weight: bold;
`;
