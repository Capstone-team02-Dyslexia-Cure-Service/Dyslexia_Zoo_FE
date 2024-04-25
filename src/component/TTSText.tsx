import styled from "@emotion/styled";
import { speech } from "./function/speech";

const TTSText = ({ text }: { text: string }) => {
  const clickHandler = () => {
    speech(text);
  };

  return <Text onClick={clickHandler}>{text}</Text>;
};

const Text = styled.div`
  size: 20px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export default TTSText;
