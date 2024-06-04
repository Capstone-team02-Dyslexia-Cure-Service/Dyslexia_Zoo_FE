import styled from "@emotion/styled";
import { PropagateLoader } from "react-spinners";

import { Background } from "./Background";

export const Loading = () => {
  return (
    <>
      <Background src="/img/home_background.png" alt="background" />
      <LoadingWrapper>
        "동물원을 불러오는 중이야."
        <PropagateLoader
          style={{ marginTop: "10px" }}
          color="white"
          size={15}
          speedMultiplier={1}
        />
      </LoadingWrapper>
    </>
  );
};
export const LoadingWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.6);

  position: absolute;
  top: 0px;
  left: 0px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  font-size: 30px;
  color: white;
  font-weight: bold;

  z-index: 40;
`;
