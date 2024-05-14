import { useForm, SubmitHandler } from "react-hook-form";

import styled from "@emotion/styled";

import TTSText from "@/component/TTSText";
import { QuestionContainer, RowContainer } from "../Container";
import { StartRecordButton, StopRecordButton, SaveButton } from "../Button";

import useTestStore from "@/store/testStore";
import PlayService from "@/service/PlayService";

const ReadQuestion = ({
  content,
  id,
  type,
}: {
  content: string;
  id: string;
  type: "TEST" | "PLAY";
}) => {
  const setTestAnswers = useTestStore((state) => state.setTestAnswers);
  const { submitTestAnswers } = PlayService();

  const { register, handleSubmit } = useForm<Question.ReadWordQuestionFrom>();
  const onSubmit: SubmitHandler<Question.ReadWordQuestionFrom> = (data) => {
    setTestAnswers(id, data.answer);
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
        <StartRecordButton onClick={() => {}} />
        <Content>{content}</Content>
        <SaveButton onClick={handleSubmit(onSubmit)} />
      </RowContainer>
    </StyleQuestionContainer>
  );
};

const StyleQuestionContainer = styled(QuestionContainer)`
  background-color: #1f1fbd;
  border-color: #181896;
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

export default ReadQuestion;
