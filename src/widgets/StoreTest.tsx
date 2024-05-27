import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

import { WriteQuestion } from "./question/WriteQuestion";
import { ReadQuestion } from "./question/ReadQuestion";

export const StoreTest = () => {
  return (
    <>
      <Container>
        <SubContainer>
          <BackGroundImg src="/img/truck.png"></BackGroundImg>
          <TestBox>
            <TestContainer>
              <WriteQuestion
                key={"1"}
                content={"강민규"}
                id={"1"}
                questionType={"SELECTWORD"}
                type="TEST"
                easy
                color="#ff4444"
                buttonColor="#ff1515"
              />
              <ReadQuestion
                key={"1"}
                content={"강민규"}
                id={"1"}
                questionType={"SELECTWORD"}
                type="TEST"
                color="#ff4444"
                buttonColor="#ff1515"
              />
            </TestContainer>
          </TestBox>
        </SubContainer>
      </Container>
    </>
  );
};

const slideIn = keyframes`
    from {
        right: -100%;
    }
    to {
        right: 50%;
        transform: translateX(50%);
    }
`;

const Container = styled.div`
  position: absolute;

  bottom: 0px;
  right: -100%;

  animation: ${slideIn} 2s forwards;

  z-index: 3;
`;

const SubContainer = styled.div`
  position: relative;
  width: 1300px;
`;

const BackGroundImg = styled.img`
  position: absolute;

  width: 1500px;
  height: 740px;
  bottom: 0px;
  left: -90px;
`;

const TestBox = styled.div`
  position: absolute;

  background-color: white;

  left: 537px;
  bottom: 58px;
  width: 794px;
  height: 435px;
  border-top: 25px solid white;
  border-bottom: 25px solid white;

  border-radius: 20px;

  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const TestContainer = styled.div`
  left: 537px;
  bottom: 58px;
  width: 794px;

  border-radius: 20px;

  display: flex;
  align-items: center;
  flex-direction: column;
`;
