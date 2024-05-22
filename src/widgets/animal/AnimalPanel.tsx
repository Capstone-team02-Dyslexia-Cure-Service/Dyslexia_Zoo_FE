import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

import { Container } from "../../entities/Container";

import TTSText from "../../entities/TTSText";

const AnimalPanel = ({
  mouseX,
  mouseY,
  name,
  info,
  path,
  onClose,
  isHungry,
}: {
  mouseX: number;
  mouseY: number;
  name: string;
  info: string;
  path: string;
  onClose: () => void;
  isHungry?: boolean;
}) => {
  const navigate = useNavigate();
  return (
    <PanelContainer
      style={{
        top: `${mouseY - 270}px`,
        left: `${mouseX + 50}px`,
      }}
    >
      <Close onClick={onClose}>X</Close>
      <TTSText
        text={name}
        style={{
          fontSize: "30px",
          fontWeight: "bold",
          marginTop: "-4px",
        }}
      />
      <TTSText
        text={info}
        style={{
          width: "98%",
          height: "90px",

          wordBreak: "break-all",

          marginBottom: "14px",
          marginTop: "10px",

          fontSize: "17px",
          textAlign: "center",
        }}
      />
      {isHungry ? (
        <DisableButton>배고파서 놀 수 없습니다..</DisableButton>
      ) : (
        <Button
          onClick={() => {
            navigate(path);
          }}
        >
          놀아 주기
        </Button>
      )}
      <Button>먹이 주기</Button>
    </PanelContainer>
  );
};

const PanelContainer = styled(Container)`
  position: fixed;

  background: white;

  width: 250px;
  height: 200px;

  border: 0x solid black;
  border-radius: 5px;

  padding: 10px;
`;

const Button = styled.button`
  width: 100%;
  height: 50px;
  margin-top: 5px;

  background-color: #0000cd;

  color: white;
  font-size: 18px;
  font-weight: bold;

  border: 0px;
  border-radius: 5px;
`;

const DisableButton = styled(Button)`
  background-color: gray;
`;

const Close = styled.button`
  position: absolute;

  background-color: white;

  border: 0px;

  top: 8px;
  right: 6px;

  font-size: 20px;
  font-weight: bold;
`;

export default AnimalPanel;
