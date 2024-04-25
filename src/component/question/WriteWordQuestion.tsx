import styled from "@emotion/styled";
import TTSText from "@/component/TTSText";

import { QuestionContainer } from "../Container";

const WriteWordQuestion = ({ content }: { content: string }) => {
  return (
    <QuestionContainer>
      <TTSText text={content} />
    </QuestionContainer>
  );
};

export default WriteWordQuestion;
