import { keyframes } from "@emotion/react";

export const PenguinMove = keyframes`
  0% {
    top: 75%;
    left: 52%;
    transform: rotate(10deg);
  }
  20% {
    transform: rotate(-10deg);
  }
  25% {
    top: 60%;
    left: 50%;
  }
  50%{
    transform: rotate(10deg);
  }
  75% {
    top: 80%;
    left: 43%;
  }
  80%{
    transform: rotate(-10deg);
  }
  100% {
    top: 75%;
    left: 52%;
    transform: rotate(10deg);
  }
`;
