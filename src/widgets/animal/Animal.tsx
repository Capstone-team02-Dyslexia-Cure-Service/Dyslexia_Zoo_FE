import { useState } from "react";

import styled from "@emotion/styled";
import { keyframes, Keyframes } from "@emotion/react";

import { AnimalPanel } from "@/widgets";

import PriorityHighIcon from "@mui/icons-material/PriorityHigh";

type Prop = {
  name: string;
  info: string;
  playPath: string;

  imgPath: string;
  move: Keyframes;

  top: number; // %
  left: number;
  width: number; // px
  height: number;

  isHungry?: boolean;
};

export const Animal = ({
  name,
  info,
  playPath,
  imgPath,
  move,
  top,
  left,
  width,
  height,
  isHungry,
}: Prop) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showControlPanel, setShowControlPanel] = useState(false);

  const handleMouseDown = (e: any) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
    setShowControlPanel(true);
  };

  const handleClosePanel = () => {
    setShowControlPanel(false);
  };

  const hungry = keyframes`
  0% {
    height: ${height}px;
  }
  50%{
    margin-top: 15px;
    height: ${height - 15}px;
  }
  100% {
    height: ${height}px;
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

    top: ${top - 3}%;
    left: ${left + 4}%;

    animation: ${signHungry} 2s 0s infinite;
  `;

  const Img = styled.img`
    position: absolute;

    top: ${top}%;
    left: ${left}%;

    width: ${width}px;
    height: ${height}px;

    animation: ${isHungry ? hungry : move} ${isHungry ? "2s" : "10s"} 0s
      infinite;
  `;

  const StopImg = styled.img`
    position: absolute;

    top: ${mousePosition.y - 80}px;
    left: ${mousePosition.x - 40}px;

    width: ${width}px;
    height: ${height}px;
  `;

  return (
    <>
      {showControlPanel ? (
        <StopImg src={imgPath} alt={name} />
      ) : (
        <Img src={imgPath} alt={name} onMouseDown={handleMouseDown} />
      )}
      {isHungry && !showControlPanel ? <HungrySign /> : null}
      {showControlPanel && (
        <AnimalPanel
          mouseX={mousePosition.x}
          mouseY={mousePosition.y}
          name={name}
          info={info}
          path={playPath}
          onClose={handleClosePanel}
          isHungry={isHungry}
        />
      )}
    </>
  );
};
