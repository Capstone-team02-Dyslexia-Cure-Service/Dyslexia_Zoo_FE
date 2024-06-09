import { useEffect, useState, useRef } from "react";

import { Background, FixContainer, TTSText, HomeButton } from "@/entities";
import { Question, QuestionFeedback } from "@/widgets";
import { PlayService, usePlayState, useLayoutState } from "@/shared";

import * as Styles from "./Styles";

const PenguinPage = () => {
  const [state, set] = useState(false);
  const idSuccess = useRef(false);

  const { getQuestion } = PlayService();
  const id = usePlayState((state) => state.id);
  const questionResponseType = usePlayState(
    (state) => state.questionResponseType
  );
  const content = usePlayState((state) => state.content);
  const videoPath = usePlayState((state) => state.videoPath);
  const success = useLayoutState((state) => state.success);
  const feedback = usePlayState((state) => state.feedback);

  useEffect(() => {
    getQuestion();
  }, []);

  useEffect(() => {
    if (success && feedback !== undefined) idSuccess.current = true;
  }, [success]);

  useEffect(() => {
    if (feedback === undefined && idSuccess.current) {
      set(true);
      const timer = setTimeout(() => {
        idSuccess.current = false;
        set(false);
        getQuestion();
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [feedback]);

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
      {!success && content && !state && !idSuccess.current ? (
        <Styles.RightStyleQuestion>
          <Question
            content={content}
            videoPath={videoPath}
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
