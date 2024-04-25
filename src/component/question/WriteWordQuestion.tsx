import styled from "@emotion/styled";
import TTSText from "@/component/TTSText";
import HeadphonesIcon from "@mui/icons-material/Headphones";

import { speech } from "../function/speech";

import { QuestionContainer } from "../Container";

const WriteWordQuestion = ({ content }: { content: string }) => {
  return (
    <QuestionContainer>
      <TTSText
        text={"단어를 듣고 올바른 철자로 작성해주세요!"}
        style={{ fontSize: "20px" }}
      />
      <HeadphonesIcon
        onClick={() => {
          speech(content);
        }}
      />
    </QuestionContainer>
  );
};

export default WriteWordQuestion;
