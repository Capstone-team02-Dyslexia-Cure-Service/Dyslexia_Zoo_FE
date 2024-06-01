import styled from "@emotion/styled";

import { Container } from "@/entities";
import { TTSText } from "@/entities";

import { useTestState } from "@/shared";

export const QuestionFeedback = () => {
  const feedback = useTestState((state) => state.testFeedback);
  const setFeedback = useTestState((state) => state.setTestFeedback);

  return (
    <>
      {feedback ? (
        <Background>
          <Wrapper>
            <IntroVideo>
              <Video autoPlay>
                <source src={feedback.url} type="video/mp4" />
              </Video>
            </IntroVideo>
            {feedback.speedFeedback ? (
              <>
                <TTSText
                  text={"말하기의 속도를 조절하면 좋을 것 같아."}
                  style={{
                    fontSize: "27px",
                    fontWeight: "bold",
                    color: "white",
                    marginBottom: "12px",
                  }}
                />
                <TTSText
                  text={feedback.speedFeedback}
                  style={{
                    background: "white",
                    width: "600px",
                    height: "40px",
                    marginBottom: "20px",
                    fontSize: "20px",
                    fontWeight: "bold",
                    borderRadius: "8px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                />
              </>
            ) : null}
            <TTSText
              text={"조금 더 정확하게 말하면 좋을 것 같아."}
              style={{
                fontSize: "27px",
                fontWeight: "bold",
                color: "white",
                marginBottom: "12px",
              }}
            />

            <TTSText
              text={feedback.accuracyFeedback}
              style={{
                background: "white",
                width: "580px",
                height: "72px",
                marginBottom: "20px",
                fontSize: "20px",
                fontWeight: "bold",
                borderRadius: "8px",
                borderLeft: "10px solid white",
                borderRight: "10px solid white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            />

            <Button
              onClick={() => {
                setFeedback(undefined);
              }}
            >
              다시 한번 도전하기!
            </Button>
          </Wrapper>
        </Background>
      ) : null}
    </>
  );
};

const Background = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  z-index: 20;
`;

const Wrapper = styled.div`
  background-color: #6a00ff;
  width: 650px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 8px;
`;

const IntroVideo = styled.div`
  background-color: #001eff;

  width: 600px;
  height: 200px;

  margin-top: 24px;
  margin-bottom: 20px;

  border-radius: 8px;
`;

const Video = styled.video`
  width: 100%;
  height: 100%;

  object-fit: cover;
`;

const Button = styled(Container)`
  background-color: #7878fd;

  width: 600px;
  height: 45px;

  border-radius: 5px;

  margin-top: 10px;
  margin-bottom: 30px;

  box-shadow: 0px 6px 2px 0 black;

  font-size: 27px;
  font-weight: bold;
  color: white;

  &:hover {
    box-shadow: none;
    margin-bottom: 24px;
    margin-top: 16px;
  }
`;
