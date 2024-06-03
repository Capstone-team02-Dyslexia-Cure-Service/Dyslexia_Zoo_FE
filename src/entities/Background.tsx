import styled from "@emotion/styled";

export const Background = ({ src }: { src: string; alt: string }) => {
  const StyledBackground = styled.div`
    position: fixed;
    top: 0px;
    left: 0px;

    background-image: url(${src});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    height: 100vh;

    z-index: -1;
  `;
  return <StyledBackground />;
};
