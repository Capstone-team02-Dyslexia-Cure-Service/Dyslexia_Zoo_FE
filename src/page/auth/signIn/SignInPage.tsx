import styled from "@emotion/styled/macro";
import { Controller, useForm } from "react-hook-form";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const SignInPage = () => {
  const { control, handleSubmit } = useForm<User.SignInReqDto>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = () => {};
  return (
    <>
      <SignInForm onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <TextField type="email" placeholder="이메일" {...field} />
          )}
        />
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <TextField type="password" placeholder="qlalfqjsgh" {...field} />
          )}
        />
        <Button type="submit" variant="contained">
          로그인
        </Button>
      </SignInForm>
      <MainImg src="/img/signin_logo.png" alt="signin_logo" />
    </>
  );
};

const SignInForm = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const MainImg = styled.img`
  width: 500px;
`;

export default SignInPage;
