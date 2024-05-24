import { useEffect, useState } from "react";

import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

import { Background, FixContainer, TTSText, HomeButton } from "@/entities";

import { ReadQuestion } from "@/widgets";

import { PlayService, useTestStore } from "@/shared";

const DolphinPage = () => {
  const [state, set] = useState(false);
  const { getTest } = PlayService();
  const testContent = useTestStore((state) => state.testContent);

  useEffect(() => {
    getTest();
  }, []);

  return (
    <>
      <Background src="/img/dolphin_background.png" alt="background" />
      <HomeButton />
      <RingFront src="/img/ring_front.png" alt="ring" />
      <RingBack src="/img/ring_back.png" alt="ring" />
      <TTSText
        text={"문제를 해결하고, 돌고래와 놀아봐!!"}
        style={{
          position: "absolute",
          top: "20px",
          left: "50%",
          width: "800px",
          transform: "translate(-50%, 0%)",
          fontSize: "50px",
          fontWeight: "bold",
          color: "black",
          zIndex: "10",
        }}
      />

      <FixContainer>
        {state ? (
          <MoveDolphin
            src="/img/dolphin.png"
            alt="Penguin"
            onClick={() => {
              set(true);
            }}
          />
        ) : (
          <Dolphin
            src="/img/dolphin.png"
            alt="Penguin"
            onClick={() => {
              set(true);
            }}
          />
        )}
      </FixContainer>
      {testContent ? (
        <Question>
          <ReadQuestion
            content={testContent.questions[0].content}
            id={testContent.questions[0].id}
            type="PLAY"
          />
        </Question>
      ) : null}
    </>
  );
};

const Question = styled.div`
  position: absolute;

  transform: translate(-50%, 0%);
  top: 63%;
  left: 74%;
`;

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

const Dolphin = styled.img`
  position: absolute;
  top: 23%;
  left: 43%;

  width: 200px;

  z-index: 10;
`;

const MoveDolphin = styled(Penguin)`
  animation: ${move} 4s 0s;
`;

const RingFront = styled.img`
  position: absolute;
  top: 90px;
  left: 675px;
  z-index: 3;
`;

const RingBack = styled.img`
  position: absolute;
  top: 20px;
  left: 630px;
`;

export default DolphinPage;
