import styled from "@emotion/styled";
import HeadphonesIcon from "@mui/icons-material/Headphones";

import { speech } from "../function/speech";

import TTSText from "@/component/TTSText";
import { QuestionContainer, RowContainer, Container } from "../Container";
import Convas from "../Convas";

const WriteWordQuestion = ({ content }: { content: string }) => {
  return (
    <QuestionContainer>
      <TTSText
        text={"단어를 듣고 올바른 철자로 작성해주세요!"}
        style={{
          fontSize: "29px",
          fontWeight: "bold",
          color: "white",
          marginBottom: "12px",
        }}
      />
      <RowContainer>
        <SoundButton>
          <SoundIcon
            onClick={() => {
              speech(content);
            }}
          />
        </SoundButton>
      </RowContainer>
    </QuestionContainer>
  );
};

const SoundButton = styled(Container)`
  background-color: #3232ff;

  width: 110px;
  height: 110px;

  border-radius: 5px;
  margin-right: 27px;
  margin-bottom: 2px;

  box-shadow: 6px 8px 2px 0 black;

  &:hover {
    box-shadow: 0 0 0 0 black;
    margin-bottom: 0px;
    margin-top: 2px;
  }
`;

const SoundIcon = styled(HeadphonesIcon)`
  color: white;
  font-size: 100px;
`;

export default WriteWordQuestion;
