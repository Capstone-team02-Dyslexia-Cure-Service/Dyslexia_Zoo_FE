import { useEffect } from "react";

import { WriteQuestion } from "@/widgets";

import {
  Background,
  TTSText,
  BasicTestContainer,
  SubmitButton,
} from "@/entities";

import { TestService, useTestStore } from "@/shared";

const BasicTestPage = () => {
  const { getTest, submitTestAnswers } = TestService();
  const testContent = useTestStore((state) => state.testContent);

  useEffect(() => {
    getTest();
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
            marginBottom: "20px",
          }}
        />
        {testContent
          ? testContent.questions.map(({ id, type, content }) => {
              return type === "WRITEWORD" ? (
                <WriteQuestion
                  key={id}
                  content={content}
                  id={id}
                  questionType={type}
                  type="TEST"
                  easy
                />
              ) : null;
            })
          : null}
        <SubmitButton
          onClick={() => {
            submitTestAnswers();
          }}
        />
      </BasicTestContainer>
      <></>
    </>
  );
};

export default BasicTestPage;
