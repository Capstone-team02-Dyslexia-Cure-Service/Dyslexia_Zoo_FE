import { useEffect } from "react";
import styled from "@emotion/styled";

import { useLayoutState } from "@/shared";

export const Failure = () => {
  const failure = useLayoutState((state) => state.failure);
  const setFailure = useLayoutState((state) => state.setFailure);

  useEffect(() => {
    if (failure !== false) {
      const timer = setTimeout(() => {
        setFailure(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [failure]);

  return (
    <>
      {failure ? (
        <LoadingWrapper>
          <Img src="/img/failure.png" alt="failure"></Img>
          {failure}개의 문제가 아쉬웠어.
          <div>다음에 다시 도전해보자!!</div>
        </LoadingWrapper>
      ) : null}
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

const Img = styled.img`
  width: 200px;
  margin-bottom: 20px;
`;
