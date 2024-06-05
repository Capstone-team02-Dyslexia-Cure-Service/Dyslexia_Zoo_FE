import { useEffect, useState } from "react";

import { Background, FixContainer, TTSText, HomeButton } from "@/entities";
import { Question, QuestionFeedback } from "@/widgets";
import { PlayService, usePlayState, useLayoutState } from "@/shared";

import * as Styles from "./Styles";

const DolphinPage = () => {
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
      <Background src="/img/dolphin_background.png" alt="background" />
      <QuestionFeedback />
      <HomeButton />
      <Styles.RingFront src="/img/ring_front.png" alt="ring" />
      <Styles.RingBack src="/img/ring_back.png" alt="ring" />
      <TTSText
        text={"문제를 해결하고, 돌고래와 놀아봐!!"}
        style={{
          position: "absolute",
          top: "20px",
          left: "50%",
          width: "800px",
          transform: "translate(-50%, 0%)",
          fontSize: "40px",
          fontWeight: "bold",
          color: "black",
          zIndex: "10",
        }}
      />

      <FixContainer>
        {state ? (
          <Styles.MoveDolphin src="/img/dolphin.png" alt="PENGUIN" />
        ) : (
          <Styles.Dolphin src="/img/dolphin.png" alt="PENGUIN" />
        )}
      </FixContainer>
      {content ? (
        <Styles.LeftStyleQuestion>
          <Question
            content={content}
            id={id}
            questionType={questionResponseType}
            type="PLAY"
          />
        </Styles.LeftStyleQuestion>
      ) : null}
    </>
  );
};

export default DolphinPage;
