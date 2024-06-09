import { useEffect } from "react";

import { Question } from "@/widgets";

import {
  Background,
  TTSText,
  BasicTestContainer,
  SubmitButton,
} from "@/entities";

import { TestService, useTestState } from "@/shared";

const BasicTestPage = () => {
  const { getBasicTest, getTestResult } = TestService();
  const questions = useTestState((state) => state.questionList);
  const testId = useTestState((state) => state.testId);

  useEffect(() => {
    getBasicTest();
  }, []);

  return (
    <>
      <Background src="/img/basictest_background.png" alt="background" />
      <BasicTestContainer>
        <TTSText
          text={"너에 관해서 알려줘!"}
          style={{
            fontSize: "60px",
            fontWeight: "bold",
            color: "white",
            marginBottom: "0px",
          }}
        />
        <TTSText
          text={"문제를 하나를 마무리할 때마다 체크 버튼을 눌러줘!"}
          style={{
            fontSize: "30px",
            fontWeight: "bold",
            color: "white",
            marginBottom: "30px",
          }}
        />
        {questions
          ? questions.map(
              ({ id, questionResponseType, content, videoPath }) => (
                <Question
                  key={`${id}-${questionResponseType}`}
                  content={content}
                  videoPath={videoPath}
                  id={id}
                  questionType={questionResponseType}
                  type="TEST"
                />
              )
            )
          : null}
        <SubmitButton
          onClick={() => {
            getTestResult(testId);
          }}
        />
      </BasicTestContainer>
      <></>
    </>
  );
};

export default BasicTestPage;
