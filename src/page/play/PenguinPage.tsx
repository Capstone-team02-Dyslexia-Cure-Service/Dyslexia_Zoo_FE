import { useEffect, useState } from "react";

import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

import { Background } from "@/component/Background";
import { FixContainer } from "@/component/Container";
import TTSText from "@/component/TTSText";

const PenguinPage = () => {
  const [state, set] = useState(false);

  return (
    <>
      <Background src="/img/penguin_background.png" alt="background" />
      <FixContainer>
        {state ? (
          <MovePenguin
            src="/img/penguin_play.png"
            alt="Penguin"
            onClick={() => {
              set(true);
            }}
          />
        ) : (
          <Penguin
            src="/img/penguin_play.png"
            alt="Penguin"
            onClick={() => {
              set(true);
            }}
          />
        )}
      </FixContainer>
    </>
  );
};

const move = keyframes`
  0% {
    transform: rotate(0deg);
    animation-timing-function: linear;
  }
  10% {
    transform: rotate(60deg);
    animation-timing-function: linear;
  }
  30% {
    transform: rotate(60deg);
    animation-timing-function: linear;
  }
  40% {
    top: 0%;
    left: 60%;
    transform: rotate(150deg);
    animation-timing-function: linear;
  }
  65% {
    top: 10%;
    left: 70%;
    transform: rotate(200deg);
    animation-timing-function: linear;
  }
  100% {
    top: 120%;
    left: 76%;
    transform: rotate(470deg);
    animation-timing-function: linear;
  }
`;

const Penguin = styled.img`
  position: absolute;
  top: 23%;
  left: 0%;

  width: 200px;
`;

const MovePenguin = styled(Penguin)`
  animation: ${move} 4s 0s;
`;

export default PenguinPage;
