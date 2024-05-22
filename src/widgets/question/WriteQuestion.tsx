import { useForm, SubmitHandler } from "react-hook-form";
import hangul from "hangul-js";
import styled from "@emotion/styled";

import TTSText from "@/entities/TTSText";
import { QuestionContainer, RowContainer } from "../../entities/Container";
import { SoundButton, SaveButton, ExButton } from "../../entities/Button";

import useTestStore from "@/shared/hooks/useTestState";
import PlayService from "@/shared/services/PlayService";

import { shuffle } from "../../utils/arrayRandom";

export const WriteQuestion = ({
  content,
  id,
  type,
  easy,
}: {
  content: string;
  id: string;
  type: "TEST" | "PLAY";
  easy?: boolean;
}) => {
  const setTestAnswers = useTestStore((state) => state.setTestAnswers);
  const { submitTestAnswers } = PlayService();

  const { register, handleSubmit, setValue } =
    useForm<Question.ReadWordQuestionFrom>();
  const onSubmit: SubmitHandler<Question.ReadWordQuestionFrom> = (data) => {
    setTestAnswers(id, data.answer);
    if (type == "PLAY") submitTestAnswers();
  };

  const selectInput: string[] = [];

  const StyleQuestionContainer = !easy
    ? styled(QuestionContainer)`
        background-color: #2121da;
        border-color: #2121da;
      `
    : styled(QuestionContainer)`
        background-color: #2121da;
        border-color: #2121da;
        height: 520px;
      `;

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
      {easy ? (
        <RowContainer>
          {shuffle(hangul.disassemble(content)).map((value) => (
            <ExButton
              value={value}
              onClick={() => {
                selectInput.push(value);
                setValue("answer", hangul.assemble(selectInput));
              }}
            ></ExButton>
          ))}
        </RowContainer>
      ) : null}
    </StyleQuestionContainer>
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
  font-weight: bold;
`;
