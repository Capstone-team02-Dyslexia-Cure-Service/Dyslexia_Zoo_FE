import { useEffect } from "react";

import WriteWordQuestion from "@/component/question/WriteQuestion";

import { Background } from "@/component/Background";
import { BasicTestContainer } from "@/component/Container";
import { SubmitButton } from "@/component/Button";
import TTSText from "@/component/TTSText";

import BasicTestService from "@/service/TestService";
import useTestStore from "@/store/testStore";

const BasicTestPage = () => {
  const { getTest, submitTestAnswers } = BasicTestService();
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
                <WriteWordQuestion
                  key={id}
                  content={content}
                  id={id}
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
