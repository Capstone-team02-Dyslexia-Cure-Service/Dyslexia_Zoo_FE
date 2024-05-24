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
    opacity: 1;
    top: 65%;
    left: 50%;
  }
  50%{
    transform: rotate(10deg);
  }
  75% {
    opacity: 0.7;
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
    opacity: 0;
    top: 60%;
    left: 13%;
    transform: rotate(-10deg);
  }
  50%{
    opacity: 0.7;
    top: 55%;
    left: 9%;
    transform: rotate(-10deg);
  }
  65%{
    opacity: 1;
    top: 50%;
    left: 9%;
    transform: rotate(-360deg);
  }
  100% {
    opacity: 0;
    top: 60%;
    left: 13%;
    transform: rotate(-10deg);
  }
`;
