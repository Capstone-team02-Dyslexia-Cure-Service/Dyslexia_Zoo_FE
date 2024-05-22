import styled from "@emotion/styled";
import { Controller, useForm } from "react-hook-form";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import TTSText from "@/component/TTSText";

import AuthService from "@/service/AuthService";

const SignInPage = () => {
  const { control, handleSubmit } = useForm<User.SignInReqDto>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { signin } = AuthService();

  const onSubmit = (data: User.SignInReqDto) => {
    signin(data);
  };

  return (
    <>
      <SunImg src="/img/sun.png" alt="signin_logo" />
      <SignInForm onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <StyleInput
              type="name"
              label="이름"
              variant="outlined"
              {...field}
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <StyleInput
              type="password"
              label="비밀번호"
              variant="outlined"
              {...field}
            />
          )}
        />
        <StyleButton type="submit" variant="contained">
          로그인
        </StyleButton>
      </SignInForm>
      <MainImg src="/img/signin_logo.png" alt="signin_logo" />
    </>
  );
};

const StyleInput = styled(TextField)`
  width: 240px;
  margin-bottom: 10px;

  background-color: white;

  border-radius: 5px;
`;

const StyleButton = styled(Button)`
  font-size: 17px;
  width: 240px;

  background-color: #ff9614;

  :hover {
    background-color: #ff8200;
  }
`;

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

  width: 36%;
  aspect-ratio: 1;

  z-index: 1;
`;

export default SignInPage;
