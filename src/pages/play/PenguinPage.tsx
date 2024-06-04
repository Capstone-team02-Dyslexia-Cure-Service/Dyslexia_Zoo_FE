import { useEffect, useState } from "react";

import { Background, FixContainer, TTSText, HomeButton } from "@/entities";
import { Question, QuestionFeedback } from "@/widgets";
import { PlayService, usePlayState, useLayoutState } from "@/shared";

import * as Styles from "./Styles";

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
      <QuestionFeedback />
      <HomeButton />
      <TTSText
        text={"문제를 해결하고, 펭귄과 놀아봐!!"}
        style={{
          position: "absolute",
          top: "20px",
          left: "50%",
          transform: "translate(-50%, 0%)",
          fontSize: "40px",
          fontWeight: "bold",
          color: "black",
          zIndex: "10",
        }}
      />

      <FixContainer>
        {state ? (
          <Styles.MovePenguin src="/img/penguin_play.png" alt="PENGUIN" />
        ) : (
          <Styles.Penguin src="/img/penguin_play.png" alt="PENGUIN" />
        )}
      </FixContainer>
      {content ? (
        <Styles.RightStyleQuestion>
          <Question
            content={content}
            id={id}
            questionType={questionResponseType}
            type="PLAY"
          />
        </Styles.RightStyleQuestion>
      ) : null}
    </>
  );
};

export default PenguinPage;
