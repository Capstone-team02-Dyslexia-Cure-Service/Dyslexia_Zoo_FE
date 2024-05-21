import { useEffect } from "react";

import styled from "@emotion/styled";

import { Background } from "@/component/Background";
import TTSText from "@/component/TTSText";
import { StoreButton, StatisticButton } from "@/component/Button";

import Penguin from "@/component/animal/Penguin";

const BasicTestPage = () => {
  return (
    <>
      <TTSText
        text={"동물을 누르고 함께 놀아봐!!"}
        style={{
          position: "absolute",
          top: "8px",
          left: "50%",
          transform: "translate(-50%, 0%)",
          fontSize: "40px",
          fontWeight: "bold",
          color: "#7060ff",
          zIndex: "10",
        }}
      />
      <Background src="/img/home_background.png" alt="background" />
      <Penguin isHungry />
      <StoreButton />
      <StatisticButton />
    </>
  );
};

export default BasicTestPage;
