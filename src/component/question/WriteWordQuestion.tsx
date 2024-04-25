import styled from "@emotion/styled";
import TTSText from "@/component/TTSText";
import HeadphonesIcon from "@mui/icons-material/Headphones";

import { speech } from "../function/speech";

import { QuestionContainer } from "../Container";

const WriteWordQuestion = ({ content }: { content: string }) => {
  return (
    <QuestionContainer>
      <HeadphonesIcon />
      <TTSText text={content} />
    </QuestionContainer>
  );
};

export default WriteWordQuestion;
