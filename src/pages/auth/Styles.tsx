import styled from "@emotion/styled";
import Button from "@mui/material/Button";

export const SignInForm = styled.form`
  position: absolute;
  right: 25%;
  top: 38%;
  transform: translate(50%, -50%);

  width: 20%;
  aspect-ratio: 1;

  z-index: 2;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MainImg = styled.img`
  position: absolute;
  left: 50%;
  bottom: 0px;
  transform: translate(-50%, 0%);

  width: 100%;
`;

export const SunImg = styled.img`
  position: absolute;
  right: 25%;
  top: 38%;
  transform: translate(50%, -50%);

  width: 50%;
  aspect-ratio: 1;

  z-index: 1;
`;

export const SignUpButton = styled.div`
  font-size: 17px;
  font-weight: bold;
  color: white;

  margin-top: 10px;
  margin-bottom: 2px;
  text-shadow: 0px 2px 0px rgba(0, 0, 0, 0.5);

  :active {
    margin-top: 12px;
    margin-bottom: 0px;
    text-shadow: none;
  }
`;

export const StyleInput = styled.input`
  background-color: white;

  width: 210px;
  height: 45px;

  border: 0px white solid;
  border-left: 5px white solid;
  border-radius: 3px;

  outline: none;

  margin-top: 10px;

  font-size: 17px;

  font-size: 16px;
  text-align: center;
  font-family: "Spoqa Han Sans Neo", "sans-seri";

  ::placeholder {
    font-family: "Spoqa Han Sans Neo", "sans-seri";
    text-align: center;
  }
`;

export const StyleButton = styled(Button)`
  font-size: 19px;
  font-weight: bold;

  width: 230px;
  height: 45px;

  background-color: #ff9614;

  border: 0px;

  box-shadow: 0px 5px 0 -0.5px black;

  margin-top: 10px;
  margin-bottom: 5px;

  transition: opacity 1s linear;

  font-family: "Spoqa Han Sans Neo", "sans-seri";

  :hover {
    background-color: #ff9614;
  }

  :active {
    background-color: #ff9614;

    border: 0px;

    box-shadow: 0 0 0 0 black;
    margin-top: 15px;
    margin-bottom: 0px;

    transition: 0s;
  }
`;
