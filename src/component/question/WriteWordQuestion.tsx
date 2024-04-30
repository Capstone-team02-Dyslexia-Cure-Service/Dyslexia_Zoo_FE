import { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import styled from "@emotion/styled";

import TTSText from "@/component/TTSText";
import { QuestionContainer, RowContainer } from "../Container";
import { SoundButton, SaveButton } from "../Button";

import useTestStore from "@/store/testStore";

const WriteWordQuestion = ({
  content,
  id,
}: {
  content: string;
  id: string;
}) => {
  const { testAnswers, setTest, setTestAnswers } = useTestStore(
    (state) => state
  );

  const { register, handleSubmit } = useForm<Question.ReadWordQuestionFrom>();
  const onSubmit: SubmitHandler<Question.ReadWordQuestionFrom> = (data) => {
    setTestAnswers(id, data.answer);
  };

  useEffect(() => {
    setTest({
      id: "11",
      questions: [{ id: "1", type: "WRITEWORD", content: "content" }],
    });
  }, []);

  useEffect(() => {
    console.log(testAnswers);
  }, [testAnswers]);

  return (
    <QuestionContainer onSubmit={handleSubmit(onSubmit)}>
      <TTSText
        text={"단어를 듣고 흰 칸에 올바른 철자로 작성해주세요!"}
        style={{
          fontSize: "30px",
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
    </QuestionContainer>
  );
};

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
`;

export default WriteWordQuestion;
