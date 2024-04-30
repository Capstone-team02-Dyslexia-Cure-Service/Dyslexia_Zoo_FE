import styled from "@emotion/styled";
import WriteWordQuestion from "@/component/question/WriteWordQuestion";

import { Background } from "@/component/Background";

const BasicTestPage = () => {
  return (
    <>
      <Background src="/img/basictest_background.png" alt="background" />
      <WriteWordQuestion content="문제예시" id={"1"} />
    </>
  );
};

export default BasicTestPage;
