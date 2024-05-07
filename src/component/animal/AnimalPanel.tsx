import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

import { Container } from "../Container";

import TTSText from "../TTSText";

const AnimalPanel = ({
  mouseX,
  mouseY,
  name,
  info,
  path,
  onClose,
}: {
  mouseX: number;
  mouseY: number;
  name: string;
  info: string;
  path: string;
  onClose: () => void;
}) => {
  const navigate = useNavigate();
  return (
    <PanelContainer
      style={{
        top: `${mouseY - 200}px`,
        left: `${mouseX}px`,
      }}
    >
      <Close onClick={onClose}>X</Close>
      <TTSText
        text={name}
        style={{
          fontSize: "17px",
          fontWeight: "bold",
        }}
      />
      <TTSText
        text={info}
        style={{
          width: "100%",
          height: "70px",

          wordBreak: "break-all",

          marginBottom: "10px",
          marginTop: "5px",

          fontSize: "13px",
        }}
      />
      <Button
        onClick={() => {
          navigate(path);
        }}
      >
        놀아 주기
      </Button>
      <Button>먹이 주기</Button>
    </PanelContainer>
  );
};

const PanelContainer = styled(Container)`
  position: fixed;

  background: white;

  width: 150px;
  height: 160px;

  border: 0x solid black;
  border-radius: 5px;

  padding: 10px;
`;

const Button = styled.button`
  width: 100%;
  height: 30px;
  margin-top: 5px;

  background-color: #0000cd;

  color: white;
  font-size: 12px;

  border: 0px;
  border-radius: 5px;
`;

const Close = styled.button`
  position: absolute;

  background-color: white;

  border: 0px;

  top: 9px;
  right: 9px;

  font-weight: bold;
`;

export default AnimalPanel;
