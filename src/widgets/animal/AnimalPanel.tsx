import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";

import { TTSText, Container } from "@/entities";
import { StudyService } from "@/shared";

//배고픔 Service 구현해서 연결, setOnHungryStudy

export const AnimalPanel = ({
  id,
  mouseX,
  mouseY,
  name,
  info,
  path,
  onClose,
  isHungry,
}: {
  id: number;
  mouseX: number;
  mouseY: number;
  name: string;
  info: string;
  path: string;
  onClose: () => void;
  isHungry?: boolean;
}) => {
  const { getStudyContent } = StudyService();
  const navigate = useNavigate();
  return (
    <PanelContainer
      style={{
        top: `${mouseY - 300}px`,
        left: `${mouseX + 50}px`,
      }}
    >
      <Close onClick={onClose}>
        <CloseIcon />
      </Close>
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
          width: "99%",
          height: "90px",

          wordBreak: "break-all",

          marginBottom: "4px",
          marginTop: "7px",

          fontSize: "17px",
          textAlign: "center",
        }}
      />
      {isHungry ? (
        <DisableButton>배고파서 놀 수 없습니다</DisableButton>
      ) : (
        <Button
          onClick={() => {
            navigate(path);
          }}
        >
          놀아 주기
        </Button>
      )}
      <Button
        onClick={() => {
          getStudyContent(id);
          onClose();
        }}
      >
        먹이 주기
      </Button>
    </PanelContainer>
  );
};

const PanelContainer = styled(Container)`
  position: fixed;

  background: white;

  width: 250px;
  height: 260px;

  border: 0x solid black;
  border-radius: 5px;

  padding: 10px;
`;

const Button = styled.button`
  width: 100%;
  height: 40px;

  margin-top: 13px;

  background-color: #0000cd;

  color: white;
  font-size: 18px;
  font-weight: bold;

  border: 0px;
  border-radius: 5px;

  box-shadow: 0px 5px 0 -0.5px black;

  :active {
    background-color: #0000cd;

    border: 0px;

    box-shadow: 0 0 0 0 black;
    margin-top: 18px;
    margin-bottom: -5px;

    transition: 0s;
  }
`;

const DisableButton = styled(Button)`
  margin-top: 18px;
  margin-bottom: -5px;

  box-shadow: 0 0 0 0 black;

  background-color: gray;
`;

const Close = styled.button`
  position: absolute;

  background-color: white;

  border: 0px;

  top: 8px;
  right: 5px;

  font-size: 20px;
  font-weight: bold;

  color: black;
`;
