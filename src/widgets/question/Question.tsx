import { ReadQuestion } from "./ReadQuestion";
import { WriteQuestion } from "./WriteQuestion";

export const Question = ({
  content,
  id,
  questionType,
  videoPath,
  type,
  color,
  buttonColor,
}: {
  content: string;
  id: number;
  questionType: Question.QuestionType;
  videoPath: string;
  type: "TEST" | "PLAY";
  color?: string;
  buttonColor?: string;
}) => (
  <>
    {questionType === "SELECT_WORD" ? (
      <WriteQuestion
        content={content}
        id={id}
        questionType={questionType}
        videoPath={videoPath}
        type={type}
        color={color}
        buttonColor={buttonColor}
        easy
      />
    ) : questionType === "WRITE_WORD" ? (
      <WriteQuestion
        content={content}
        id={id}
        questionType={questionType}
        videoPath={videoPath}
        type={type}
        color={color}
        buttonColor={buttonColor}
      />
    ) : questionType === "READ_SENTENCE" || questionType === "READ_WORD" ? (
      <ReadQuestion
        content={content}
        id={id}
        questionType={questionType}
        type={type}
        color={color}
        buttonColor={buttonColor}
      />
    ) : null}
  </>
);
