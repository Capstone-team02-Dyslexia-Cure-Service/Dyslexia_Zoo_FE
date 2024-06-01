import { useEffect, useState } from "react";

import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

import { Background, FixContainer, TTSText, HomeButton } from "@/entities";

import { ReadQuestion } from "@/widgets";

import { PlayService, useTestState } from "@/shared";

const DolphinPage = () => {
  const [state, set] = useState(false);
  const { getQuestion } = PlayService();
  const testContent = useTestState((state) => state.testContent);

  useEffect(() => {
    getQuestion();
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
            alt="PENGUIN"
            onClick={() => {
              set(true);
            }}
          />
        ) : (
          <Dolphin
            src="/img/dolphin.png"
            alt="PENGUIN"
            onClick={() => {
              set(true);
            }}
          />
        )}
      </FixContainer>
      {testContent ? (
        <Question>
          <ReadQuestion
            content={testContent[0].content}
            id={testContent[0].id}
            questionType={"WRITE_WORD"}
            type="PLAY"
          />
        </Question>
      ) : null}
    </>
  );
};

const Question = styled.div`
  position: absolute;

  transform: translate(50%, 0%);
  top: 63%;
  right: 74%;
`;

const move = keyframes`
  0% {
    top: 60%;
    left: 70%;
    animation-timing-function: linear;
    transform: rotate(60deg);

    opacity: 0;
  }
  20% {
    top: 50%;
    left: 68%;
    animation-timing-function: linear;
    transform: rotate(30deg);

    opacity: 1;
  }
  40% {
    top: 40%;
    left: 65%;
    animation-timing-function: linear;
    transform: rotate(0deg);
  }
  60% {
    top: 20%;
    left: 40%;
    animation-timing-function: linear;
    transform: rotate(-60deg);
  }
  80% {
    top: 40%;
    left: 20%;
    animation-timing-function: linear;
  }
  100% {
    top: 60%;
    left: 5%;
    animation-timing-function: linear;
    transform: rotate(-80deg);
    opacity: 1;
  }
`;

const Dolphin = styled.img`
  position: absolute;
  top: 60%;
  left: 70%;

  width: 200px;

  z-index: 10;
  transform: rotate(60deg);

  opacity: 0;
`;

const MoveDolphin = styled(Dolphin)`
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
