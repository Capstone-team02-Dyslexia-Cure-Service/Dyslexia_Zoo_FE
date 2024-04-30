import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const Penguin = ({ state }: { state: "NORMAL" }) => {
  return <>{state ? <Img src="/img/penguin.png" alt="Penguin" /> : null}</>;
};

const move = keyframes`
      0% {
      width: 50px;
      height: 50px;
    }
    50% {
      width: 150px;
      height: 150px;
    }
    100% {
      width: 200px;
      height: 200px;
    }
`;

const Img = styled.img`
  position: absolute;

  width: 50px;

  animation: ${move} 4s 0s infinite alternate;
`;

export default Penguin;
