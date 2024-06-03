import { useEffect } from "react";
import styled from "@emotion/styled";

import { useLayoutState } from "@/shared";

export const Success = () => {
  const success = useLayoutState((state) => state.success);
  const setSuccess = useLayoutState((state) => state.setSuccess);

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        setSuccess(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [success]);

  return (
    <>
      {success ? (
        <LoadingWrapper>
          <Img src="/img/success.png" alt="success"></Img>훌륭한 답변이었어!!
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
