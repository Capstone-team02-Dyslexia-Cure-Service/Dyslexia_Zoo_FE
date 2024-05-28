import styled from "@emotion/styled";

export const HungryStudy = ({ url }: { url: string }) => {
  return (
    <>
      <Wrapper>
        <IntroVideo>
          <Video muted autoPlay loop>
            <source src={url} type="video/mp4" />
          </Video>
        </IntroVideo>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  width: 300px;
  height: 300px;

  position: fixed;
  top: 0px;
  left: 0px;

  overflow-y: hidden;
  z-index: -1;
`;

const IntroVideo = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Video = styled.video`
  width: 100%;
  height: 100%;

  object-fit: cover;
`;
