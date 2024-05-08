import { useEffect } from "react";

import styled from "@emotion/styled";

import { Background } from "@/component/Background";
import TTSText from "@/component/TTSText";

import Penguin from "@/component/animal/Penguin";

const StorePage = () => {
  return (
    <>
      <Background src="/img/home_background.png" alt="background" />
      <Penguin />
    </>
  );
};

export default StorePage;
