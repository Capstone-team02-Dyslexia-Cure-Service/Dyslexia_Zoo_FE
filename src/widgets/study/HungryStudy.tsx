import styled from "@emotion/styled";

import { useStudyState, StudyService } from "@/shared";

//영상에서 읽는 단어의 Text
//영상이 끝날 때까지 화면을 못 벗어남
//단어 3개, 문장 하나

//동물 놀아주기 문제 풀고, 틀리면 다시 틀리면 다시
//틀린거 피드백, 쓰기 문제는 영역을 굵게 빨간
//말하기는 속도, 정확도 어는
//테스트 같은 결과만 점수만

export const HungryStudy = () => {
  const state = useStudyState((state) => state);
  const { animalFeed } = StudyService();

  return (
    <Background>
      <Wrapper>
        <IntroVideo>
          <Video
            autoPlay
            onEnded={() => {
              state.id && animalFeed(state.id);
              state.setStudy({ url: false, content: false, id: false });
            }}
          >
            {state.url ? <source src={state.url} type="video/mp4" /> : null}
          </Video>
        </IntroVideo>
        <Content>{state.content}</Content>
      </Wrapper>
    </Background>
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
  height: 550px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 20px;
`;

const IntroVideo = styled.div`
  background-color: #001eff;

  width: 600px;
  height: 400px;

  border-radius: 10px 10px 0px 0px;
`;

const Video = styled.video`
  width: 100%;
  height: 100%;

  object-fit: cover;
`;

const Content = styled.div`
  background-color: white;
  width: 600px;
  height: 80px;
  margin-top: 18px;

  font-size: 30px;
  font-weight: bold;
  border-radius: 0px 0px 10px 10px;

  display: flex;
  justify-content: center;
  align-items: center;
`;
