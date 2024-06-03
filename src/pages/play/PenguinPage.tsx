import { useEffect, useState } from "react";

import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

import { Background, FixContainer, TTSText, HomeButton } from "@/entities";

import { Question } from "@/widgets";

import { PlayService, usePlayState, useLayoutState } from "@/shared";

const PenguinPage = () => {
  const [state, set] = useState(false);
  const { getQuestion } = PlayService();
  const id = usePlayState((state) => state.id);
  const questionResponseType = usePlayState(
    (state) => state.questionResponseType
  );
  const content = usePlayState((state) => state.content);
  const success = useLayoutState((state) => state.success);

  useEffect(() => {
    getQuestion();
  }, []);

  useEffect(() => {
    if (success)
      setTimeout(() => {
        set(true);
        setTimeout(() => {
          set(false);
        }, 4000);
      }, 2000);
  }, [success]);

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
          <MovePenguin src="/img/penguin_play.png" alt="PENGUIN" />
        ) : (
          <Penguin src="/img/penguin_play.png" alt="PENGUIN" />
        )}
      </FixContainer>
      {content ? (
        <StyleQuestion>
          <Question
            content={content}
            id={id}
            questionType={questionResponseType}
            type="PLAY"
          />
        </StyleQuestion>
      ) : null}
    </>
  );
};

const StyleQuestion = styled.div`
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
