import { useEffect } from "react";

import styled from "@emotion/styled";
import WriteWordQuestion from "@/component/question/WriteWordQuestion";

import { Background } from "@/component/Background";

import BasicTestService from "@/service/BasicTestService";
import useTestStore from "@/store/testStore";

const BasicTestPage = () => {
  const [getTest] = BasicTestService();
  const testContent = useTestStore((state) => state.testContent);

  useEffect(() => {
    getTest();
  }, []);

  return (
    <>
      <Background src="/img/basictest_background.png" alt="background" />
      {testContent
        ? testContent.questions.map(({ id, type, content }) => {
            return type === "WRITEWORD" ? (
              <WriteWordQuestion content={content} id={id} />
            ) : null;
          })
        : null}
    </>
  );
};

export default BasicTestPage;
