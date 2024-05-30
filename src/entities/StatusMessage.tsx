import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { useApiState } from "@/shared";

export const StatusMessage = () => {
  const { message, setMessage } = useApiState();

  useEffect(() => {
    const timer = setTimeout(() => {
      setMessage(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [message]);

  return (
    <MessageContainer show={message !== false}>{message}</MessageContainer>
  );
};

const MessageContainer = styled.div<{ show: boolean }>`
  display: ${({ show }) => (show ? "block" : "none")};
  background-color: #4444ff;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  position: fixed;
  top: 30px;
  left: 50%;
  transform: translateX(-50%);
  transition: opacity 0.5s;
  opacity: ${({ show }) => (show ? 1 : 0)};

  z-index: 100;
`;
