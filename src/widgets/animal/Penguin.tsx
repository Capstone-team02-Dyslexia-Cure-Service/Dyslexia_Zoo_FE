import { useState, useRef } from "react";

import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

import AnimalPanel from "./AnimalPanel";
import { PAGE_URL } from "@/shared/configs/path";

import PriorityHighIcon from "@mui/icons-material/PriorityHigh";

const Penguin = ({ isHungry }: { isHungry?: boolean }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showControlPanel, setShowControlPanel] = useState(false);

  const handleMouseDown = (e: any) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
    setShowControlPanel(true);
  };

  const handleClosePanel = () => {
    setShowControlPanel(false);
  };

  const Img = styled.img`
    position: absolute;

    top: 75%;
    left: 52%;

    width: 100px;
    height: 110px;

    animation: ${isHungry ? hungry : move} ${isHungry ? "2s" : "10s"} 0s
      infinite;
  `;

  const StopImg = styled.img`
    position: absolute;

    top: ${mousePosition.y - 80}px;
    left: ${mousePosition.x - 40}px;

    width: 100px;
    height: 110px;
  `;

  return (
    <>
      {showControlPanel ? (
        <StopImg src="/img/penguin.png" alt="Penguin" />
      ) : (
        <Img
          src="/img/penguin.png"
          alt="Penguin"
          onMouseDown={handleMouseDown}
        />
      )}
      {isHungry && !showControlPanel ? <HungrySign /> : null}
      {showControlPanel && (
        <AnimalPanel
          mouseX={mousePosition.x}
          mouseY={mousePosition.y}
          name={"펭귄"}
          info={
            "2024년에 처음 한국으로 왔다. Dyslexia Zoo에서 다이빙을 연습하며 즐겁게 살아가고 있다."
          }
          path={PAGE_URL.Penguin}
          onClose={handleClosePanel}
          isHungry={isHungry}
        />
      )}
    </>
  );
};

const move = keyframes`
  0% {
    top: 75%;
    left: 52%;
    transform: rotate(10deg);
  }
  20% {
    transform: rotate(-10deg);
  }
  25% {
    top: 60%;
    left: 50%;
  }
  50%{
    transform: rotate(10deg);
  }
  75% {
    top: 80%;
    left: 43%;
  }
  80%{
    transform: rotate(-10deg);
  }
  100% {
    top: 75%;
    left: 52%;
    transform: rotate(10deg);
  }
`;

const hungry = keyframes`
  0% {
    height: 110px;
  }
  50%{
    margin-top: 15px;
    height: 95px;
  }
  100% {
    height: 110px;
  }
`;

const signHungry = keyframes`
  0% {
    font-size: 50px;
  }
  50%{
    margin-top: 14px;
    font-size: 40px;
  }
  100% {
    font-size: 50px;
  }
`;

const HungrySign = styled(PriorityHighIcon)`
  position: absolute;
  font-size: 50px;
  color: red;

  top: 72%;
  left: 56%;

  animation: ${signHungry} 2s 0s infinite;
`;

export default Penguin;
