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
import { useTestStore, PlayService } from "@/shared";
import { useRecorder } from "@/utils";

export const ReadQuestion = ({
  content,
  id,
  questionType,
  type,
}: {
  content: string;
  id: string;
  questionType: Question.QuestionType;
  type: "TEST" | "PLAY";
}) => {
  const setTestAnswers = useTestStore((state) => state.setTestAnswers);
  const { submitTestAnswers } = PlayService();
  const [recording, setRecording] = useState(false);
  const audioRecorder = useRef<RecordRTC>();
  const recordResult = useRef<File>();
  const { startRecorder, stopRecorder } = useRecorder();

  const { handleSubmit } = useForm<Question.WriteQuestionFrom>();

  const onSubmit: SubmitHandler<Question.ReadQuestionFrom> = () => {
    recordResult.current &&
      setTestAnswers(id, questionType, recordResult.current);
    if (type == "PLAY") submitTestAnswers();
  };

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
            onClick={() => {
              startRecorder(audioRecorder.current);
              setRecording(true);
            }}
          />
        ) : (
          <StopRecordButton
            onClick={() => {
              stopRecorder(audioRecorder.current, recordResult);
              setRecording(false);
            }}
          />
        )}
        <Content>{content}</Content>
        <SaveButton onClick={handleSubmit(onSubmit)} />
      </RowContainer>
    </StyleQuestionContainer>
  );
};

const StyleQuestionContainer = styled(QuestionContainer)`
  background-color: #1f1fbd;
  border-color: #1f1fbd;
`;

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
