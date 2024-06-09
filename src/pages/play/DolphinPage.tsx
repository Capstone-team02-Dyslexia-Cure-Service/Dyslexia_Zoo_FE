import { useEffect, useState, useRef } from "react";

import { Background, FixContainer, TTSText, HomeButton } from "@/entities";
import { Question, QuestionFeedback } from "@/widgets";
import { PlayService, usePlayState, useLayoutState } from "@/shared";

import * as Styles from "./Styles";

const DolphinPage = () => {
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
    if (success) idSuccess.current = true;
  }, [success]);

  useEffect(() => {
    if (feedback === undefined && idSuccess.current) {
      set(true);
      idSuccess.current = false;
      setTimeout(() => {
        set(false);
      }, 4000);
    }
  }, [feedback]);
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
          width: "600px",
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
            videoPath={videoPath}
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
