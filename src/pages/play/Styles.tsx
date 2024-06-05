import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

//Move
const dolphinMove = keyframes`
  0% {
    top: 60%;
    left: 70%;
    animation-timing-function: linear;
    transform: rotate(60deg);

    opacity: 0;
  }
  20% {
    top: 50%;
    left: 68%;
    animation-timing-function: linear;
    transform: rotate(30deg);

    opacity: 1;
  }
  40% {
    top: 40%;
    left: 65%;
    animation-timing-function: linear;
    transform: rotate(0deg);
  }
  60% {
    top: 20%;
    left: 40%;
    animation-timing-function: linear;
    transform: rotate(-60deg);
  }
  80% {
    top: 40%;
    left: 20%;
    animation-timing-function: linear;
  }
  100% {
    top: 60%;
    left: 5%;
    animation-timing-function: linear;
    transform: rotate(-80deg);
    opacity: 1;
  }
`;

const penguinMove = keyframes`
  0% {
    transform: rotate(0deg);
    animation-timing-function: linear;
  }
  10% {
    transform: rotate(60deg);
    animation-timing-function: linear;
  }
  30% {
    transform: rotate(60deg);
    animation-timing-function: linear;
  }
  40% {
    top: 0%;
    left: 60%;
    transform: rotate(150deg);
    animation-timing-function: linear;
  }
  65% {
    top: 10%;
    left: 70%;
    transform: rotate(200deg);
    animation-timing-function: linear;
  }
  100% {
    top: 120%;
    left: 76%;
    transform: rotate(470deg);
    animation-timing-function: linear;
  }
`;

//Stlye
export const LeftStyleQuestion = styled.div`
  position: absolute;

  transform: translate(50%, 0%);
  bottom: 0px;
  left: 35px;
`;

export const RightStyleQuestion = styled.div`
  position: absolute;

  transform: translate(0%, 0%);
  bottom: 0px;
  right: 35px;
`;

export const Dolphin = styled.img`
  position: absolute;
  top: 60%;
  left: 70%;

  width: 200px;

  z-index: 10;
  transform: rotate(60deg);

  opacity: 0;
`;

export const MoveDolphin = styled(Dolphin)`
  animation: ${dolphinMove} 4s 0s;
`;

export const RingFront = styled.img`
  position: absolute;
  top: 90px;
  left: 675px;
  z-index: 3;
`;

export const RingBack = styled.img`
  position: absolute;
  top: 20px;
  left: 630px;
`;

export const Penguin = styled.img`
  position: absolute;
  top: 23%;
  left: 0%;

  width: 200px;

  z-index: 10;
`;

export const MovePenguin = styled(Penguin)`
  animation: ${penguinMove} 4s 0s;
`;
