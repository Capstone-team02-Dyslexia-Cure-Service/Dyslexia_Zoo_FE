import { useEffect, useState } from "react";

import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

import { Background } from "@/entities/Background";
import { FixContainer } from "@/entities/Container";
import TTSText from "@/entities/TTSText";
import ReadWordQuestion from "@/entities/question/ReadQuestion";
import { HomeButton } from "@/entities/Button";

import PlayService from "@/service/PlayService";
import useTestStore from "@/hooks/useTestState";

const PenguinPage = () => {
  const [state, set] = useState(false);
  const { getTest } = PlayService();
  const testContent = useTestStore((state) => state.testContent);

  useEffect(() => {
    getTest();
  }, []);

  return (
    <>
      <Background src="/img/penguin_background.png" alt="background" />
      <HomeButton />
      <TTSText
        text={"문제를 해결하고, 펭귄과 놀아봐!!"}
        style={{
          position: "absolute",
          top: "20px",
          left: "50%",
          transform: "translate(-50%, 0%)",
          fontSize: "50px",
          fontWeight: "bold",
          color: "black",
          zIndex: "10",
        }}
      />

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
      {testContent ? (
        <Question>
          <ReadWordQuestion
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

const Penguin = styled.img`
  position: absolute;
  top: 23%;
  left: 0%;

  width: 200px;

  z-index: 10;
`;

const MovePenguin = styled(Penguin)`
  animation: ${move} 4s 0s;
`;

export default PenguinPage;
