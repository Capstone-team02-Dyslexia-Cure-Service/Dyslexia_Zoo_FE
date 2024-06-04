import { useForm } from "react-hook-form";

import { UserService } from "@/shared";

import * as Styles from "../Styles";

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
      <Styles.SunImg src="/img/sun.png" alt="signin_logo" />
      <Styles.SignInForm onSubmit={handleSubmit(onSubmit)}>
        <Styles.StyleInput
          placeholder="아이디"
          {...register("email", { required: "아이디를 입력해주세요!" })}
        />
        <Styles.StyleInput
          placeholder="비밀번호"
          type="password"
          {...register("password", { required: "비밀번호를 입력해주세요!" })}
        />
        <Styles.StyleButton type="submit" variant="contained">
          동물원 입장!
        </Styles.StyleButton>
        <Styles.SignUp>혹시 동물원이 아직 없다면..</Styles.SignUp>
      </Styles.SignInForm>
      <Styles.MainImg src="/img/signin_logo.png" alt="signin_logo" />
    </>
  );
};

export default SignInPage;
