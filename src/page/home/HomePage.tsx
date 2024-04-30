import { useEffect } from "react";

import styled from "@emotion/styled";

import { Background } from "@/component/Background";
import TTSText from "@/component/TTSText";

import Penguin from "@/component/animal/Penguin";

const BasicTestPage = () => {
  return (
    <>
      <Background src="/img/home_background.png" alt="background" />
      <Penguin state={"NORMAL"} />
    </>
  );
};

export default BasicTestPage;
