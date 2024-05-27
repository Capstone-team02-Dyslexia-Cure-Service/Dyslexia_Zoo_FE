import { keyframes } from "@emotion/react";

export const PenguinMove = keyframes`
  0% {
    top: 70%;
    left: 52%;
    transform: rotate(10deg);
  }
  20% {
    transform: rotate(-10deg);
  }
  25% {
    top: 65%;
    left: 50%;
  }
  50%{
    transform: rotate(10deg);
  }
  75% {
    top: 75%;
    left: 43%;
  }
  80%{
    transform: rotate(-10deg);
  }
  100% {
    top: 70%;
    left: 52%;
    transform: rotate(10deg);
  }
`;

export const DolphinMove = keyframes`
  0% {
    top: 60%;
    left: 13%;
    transform: rotate(-10deg);
  }
  50%{
    top: 55%;
    left: 9%;
    transform: rotate(-10deg);
  }
  65%{
    top: 50%;
    left: 9%;
    transform: rotate(-360deg);
  }
  100% {
    top: 60%;
    left: 13%;
    transform: rotate(-10deg);
  }
`;
