import styled from "@emotion/styled";

import { PropagateLoader } from "react-spinners";
import { useLayoutState } from "@/shared";

export const StateLoading = () => {
  const loading = useLayoutState((state) => state.loading);

  return (
    <>
      {loading ? (
        <LoadingWrapper>
          {loading === "LOADCONTENT"
            ? "문제를 가지고 오고 있어!"
            : loading === "GETRESULT"
            ? "너의 답변을 확인하고 있어!"
            : null}
          <PropagateLoader
            style={{ marginTop: "10px" }}
            color="white"
            size={15}
            speedMultiplier={1}
          />
        </LoadingWrapper>
      ) : null}
    </>
  );
};

export const LoadingWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.6);

  position: fixed;
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
