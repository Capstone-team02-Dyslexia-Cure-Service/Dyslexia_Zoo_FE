import styled from "@emotion/styled";
import { useForm } from "react-hook-form";

import Button from "@mui/material/Button";

import { UserService } from "@/shared";

const SignInPage = () => {
  const { register, handleSubmit } = useForm<User.SignInReqDto>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { signin } = UserService();

  const onSubmit = (data: User.SignInReqDto) => {
    signin(data);
  };

  return (
    <>
      <SunImg src="/img/sun.png" alt="signin_logo" />
      <SignInForm onSubmit={handleSubmit(onSubmit)}>
        <StyleInput
          placeholder="아이디"
          {...register("email", { required: "아이디를 입력해주세요!" })}
        />
        <StyleInput
          placeholder="비밀번호"
          type="password"
          {...register("password", { required: "비밀번호를 입력해주세요!" })}
        />
        <StyleButton type="submit" variant="contained">
          동물원 입장!
        </StyleButton>
      </SignInForm>
      <MainImg src="/img/signin_logo.png" alt="signin_logo" />
    </>
  );
};

const SignInForm = styled.form`
  position: absolute;
  right: 20%;
  top: 40%;
  transform: translate(50%, -50%);

  width: 20%;
  aspect-ratio: 1;

  z-index: 2;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MainImg = styled.img`
  position: absolute;
  left: 50%;
  bottom: 0px;
  transform: translate(-50%, 0%);

  width: 100%;
`;

const SunImg = styled.img`
  position: absolute;
  right: 20%;
  top: 40%;
  transform: translate(50%, -50%);

  width: 50%;
  aspect-ratio: 1;

  z-index: 1;
`;

const StyleInput = styled.input`
  background-color: white;

  width: 220px;
  height: 45px;

  border: 0px white solid;
  border-left: 5px white solid;
  border-radius: 3px;

  outline: none;

  margin-top: 10px;

  font-size: 17px;
`;

const StyleButton = styled(Button)`
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

  :hover {
    background-color: #ff9614;

    border: 0px;

    box-shadow: 0 0 0 0 black;
    margin-top: 15px;
    margin-bottom: 0px;

    transition: 0s;
  }
`;

export default SignInPage;
