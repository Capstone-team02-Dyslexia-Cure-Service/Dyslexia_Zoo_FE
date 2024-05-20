import { useForm, SubmitHandler } from "react-hook-form";

import styled from "@emotion/styled";

import TTSText from "@/component/TTSText";
import { QuestionContainer, RowContainer } from "../Container";
import { SoundButton, SaveButton, ExButton } from "../Button";

import useTestStore from "@/store/testStore";
import PlayService from "@/service/PlayService";
import hangul from "hangul-js";

const WriteWordQuestion = ({
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

  console.log(hangul.disassemble(content));
  console.log(hangul.assemble(["ㄱ", "ㅇ", "ㄴ", "ㅏ", "ㄷ", "ㅏ"]));

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
      {easy
        ? hangul
            .disassemble(content)
            .map((value) => (
              <ExButton value={value} onClick={() => {}}></ExButton>
            ))
        : null}
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

export default WriteWordQuestion;
