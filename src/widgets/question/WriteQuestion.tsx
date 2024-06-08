import { useForm, SubmitHandler } from "react-hook-form";
import hangul from "hangul-js";
import styled from "@emotion/styled";

import {
  TTSText,
  QuestionContainer,
  RowContainer,
  SoundButton,
  SaveButton,
  ExButton,
  DeleteButton,
} from "@/entities";

import {
  TestService,
  useTestState,
  PlayService,
  useLayoutState,
} from "@/shared";

import { shuffle } from "@/utils";

export const WriteQuestion = ({
  content,
  id,
  questionType,
  videoPath,
  type,
  easy,
  color,
  buttonColor,
}: {
  content: string;
  id: number;
  questionType: Question.QuestionType;
  videoPath: string;
  type: "TEST" | "PLAY";
  easy?: boolean;
  color?: string;
  buttonColor?: string;
}) => {
  const { submitQuestion } = PlayService();

  const testId = useTestState((state) => state.testId);
  const { submitWriteAnswer } = TestService();

  const setMessage = useLayoutState((state) => state.setMessage);

  const { register, handleSubmit, setValue } =
    useForm<Question.WriteQuestionFrom>();

  const onSubmit: SubmitHandler<Question.WriteQuestionFrom> = (data) => {
    if (data.answer === undefined || data.answer === undefined)
      setMessage("정답을 기록하고 제출해주세요!");
    else if (type == "PLAY") submitQuestion(id, questionType, data.answer);
    else submitWriteAnswer(testId, id, questionType, data.answer);
  };

  const selectInput: string[] = [];

  const StyleQuestionContainer = !easy
    ? styled(QuestionContainer)`
        background-color: ${color ? color : `#2121daad`};
        border-color: ${color ? color : `#2121daad`};
      `
    : styled(QuestionContainer)`
        background-color: ${color ? color : `#2121daad`};
        border-color: ${color ? color : `#2121daad`};
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
        <SoundButton url={videoPath} color={buttonColor} />
        <AnswerInput color={buttonColor} {...register("answer")} />
        <SaveButton color={buttonColor} onClick={handleSubmit(onSubmit)} />
      </RowContainer>
      {easy ? (
        <RowContainer>
          <DeleteButton
            onClick={() => {
              selectInput.pop();
              setValue("answer", hangul.assemble(selectInput));
            }}
          ></DeleteButton>
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
