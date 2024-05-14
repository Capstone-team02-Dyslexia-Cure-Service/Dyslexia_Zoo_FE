import { useForm, SubmitHandler } from "react-hook-form";

import styled from "@emotion/styled";

import TTSText from "@/component/TTSText";
import { QuestionContainer, RowContainer } from "../Container";
import { SoundButton, SaveButton } from "../Button";

import useTestStore from "@/store/testStore";
import PlayService from "@/service/PlayService";

const WriteWordQuestion = ({
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
        text={"단어를 듣고 흰 칸에 올바른 철자로 작성해줘!"}
        style={{
          fontSize: "33px",
          fontWeight: "bold",
          color: "white",
          marginBottom: "12px",
        }}
      />
      <RowContainer>
        <SoundButton content={content} />
        <AnswerInput {...register("answer")} />
        <SaveButton onClick={handleSubmit(onSubmit)} />
      </RowContainer>
    </StyleQuestionContainer>
  );
};

const StyleQuestionContainer = styled(QuestionContainer)`
  background-color: #2121da;
  border-color: #1d1dbd;
`;

const AnswerInput = styled.input`
  background-color: white;

  width: 400px;
  height: 110px;

  border: 0px white solid;
  border-left: 5px white solid;
  border-radius: 7px;

  margin-left: 27px;
  margin-right: 27px;

  outline: none;

  font-size: 45px;
  font-weight: bold;
`;

export default WriteWordQuestion;
