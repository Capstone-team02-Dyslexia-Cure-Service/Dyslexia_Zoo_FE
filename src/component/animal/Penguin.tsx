import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

import React, { useState } from "react";

import AnimalPanel from "./AnimalPanel";
import { PAGE_URL } from "@/config/path";

const Penguin = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showControlPanel, setShowControlPanel] = useState(false);

  const handleMouseDown = (e: any) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
    setShowControlPanel(true);
  };

  const handleClosePanel = () => {
    setShowControlPanel(false);
  };

  return (
    <>
      <Img src="/img/penguin.png" alt="Penguin" onMouseDown={handleMouseDown} />
      {showControlPanel && (
        <AnimalPanel
          mouseX={mousePosition.x}
          mouseY={mousePosition.y}
          name={"이름"}
          info={
            "간단한 설명 간단한 설명 간단한 설명 간단한 설명 간단한 설명 간단한 설명 간단한 설명 간단한 설명"
          }
          path={PAGE_URL.Penguin}
          onClose={handleClosePanel}
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

const Img = styled.img`
  position: absolute;

  top: 75%;
  left: 52%;

  width: 100px;

  animation: ${move} 10s 0s infinite;
`;

export default Penguin;
