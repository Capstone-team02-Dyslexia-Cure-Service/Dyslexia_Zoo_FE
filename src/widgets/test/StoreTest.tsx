import { useEffect } from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

import { TTSText, SubmitButton } from "@/entities";
import { Question } from "@/widgets";
import { TestService, useTestState } from "@/shared";

export const StoreTest = () => {
  const { getTest, getTestResult } = TestService();
  const questions = useTestState((state) => state.questionList);
  const testId = useTestState((state) => state.testId);

  useEffect(() => {
    getTest();
  }, []);

  return (
    <>
      <Container>
        <SubContainer>
          <BackGroundImg src="/img/truck.png"></BackGroundImg>
          <TestBox>
            <TestContainer>
              <TTSText
                text={"실력을 뽐내봐!!"}
                style={{
                  fontSize: "70px",
                  fontWeight: "bold",
                  color: "#ff1515",
                  marginBottom: "5px",
                }}
              />
              <TTSText
                text={"문제를 하나를 마무리할 때마다 체크 버튼을 눌러줘!"}
                style={{
                  fontSize: "30px",
                  fontWeight: "bold",
                  color: "black",
                  marginBottom: "40px",
                }}
              />
              {questions
                ? questions.map(({ id, questionResponseType, content }) => (
                    <Question
                      key={id}
                      content={content}
                      id={id}
                      questionType={questionResponseType}
                      type="TEST"
                      color="#ff4444"
                      buttonColor="#ff1515"
                    />
                  ))
                : null}
              <SubmitButton
                color="#ff4444"
                onClick={() => {
                  getTestResult(testId);
                }}
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
        right: 70%;
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
  width: 804px;
  height: 435px;
  border-top: 20px solid white;
  border-bottom: 20px solid white;

  border-radius: 20px;

  overflow-y: scroll;
  overflow-x: hidden;

  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #2f3542;
  }
  ::-webkit-scrollbar-track {
    background-color: #dcdcdc;
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
