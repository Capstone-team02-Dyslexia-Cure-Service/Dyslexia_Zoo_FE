import styled from "@emotion/styled";
import { speech } from "@/utils";

export const TTSText = ({
  text,
  style,
}: {
  text: string;
  style?: React.CSSProperties;
}) => {
  const clickHandler = () => {
    speech(text);
  };

  return style ? (
    <Text onClick={clickHandler} style={style}>
      {text}
    </Text>
  ) : (
    <Text onClick={clickHandler}>{text}</Text>
  );
};

const Text = styled.div`
  size: 20px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;
