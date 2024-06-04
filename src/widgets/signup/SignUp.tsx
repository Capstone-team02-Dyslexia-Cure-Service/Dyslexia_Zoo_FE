import { useForm, SubmitHandler } from "react-hook-form";
import styled from "@emotion/styled";

import Button from "@mui/material/Button";

import { GrayBackground } from "@/entities";
import { UserService, useLayoutState } from "@/shared";

export const SignUp = ({ onClose }: { onClose: () => void }) => {
  const { handleSubmit, register } = useForm<User.SignUpForm>();

  const setMessage = useLayoutState((state) => state.setMessage);
  const { signUp } = UserService();

  const onSubmit: SubmitHandler<User.SignUpForm> = (data) => {
    if (
      !data.email ||
      !data.passwordCheck ||
      !data.password ||
      !data.name ||
      !data.age
    ) {
      setMessage("모든 정보를 입력해주세요.");
      return;
    }
    if (data.password !== data.passwordCheck) {
      setMessage("입력한 비밀번호가 동일하지 않습니다.");
      return;
    }

    signUp({ ...data });

    onClose();
  };

  return (
    <GrayBackground onClose={onClose}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Title>너에 관해서 이야기 해줘!</Title>
        <Input placeholder="이름" {...register("name")} />
        <Input placeholder="이메일" {...register("email")} />
        <Input
          placeholder="비밀번호"
          type="password"
          {...register("password")}
        />
        <Input
          placeholder="비밀번호 재입력"
          type="password"
          {...register("passwordCheck")}
        />
        <Input placeholder="나이" type="number" {...register("age")} />
        <StyleButton type="submit" variant="contained">
          나만의 동물원으로 떠나기..
        </StyleButton>
      </Form>
    </GrayBackground>
  );
};

export const LoadingWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.6);

  position: absolute;
  top: 0px;
  left: 0px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  font-size: 30px;
  color: white;
  font-weight: bold;

  z-index: 40;
`;

const Title = styled.div`
  font-size: 35px;
  font-weight: bold;
  color: #4d4d4d;

  margin-bottom: -3px;
`;

const Form = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  background-color: white;

  width: 80%;
  height: 45px;

  border: 2px solid #ff9614;
  border-radius: 3px;

  outline: none;

  margin-top: 20px;

  font-size: 16px;
  text-align: center;
  font-family: "Spoqa Han Sans Neo", "sans-seri";

  ::placeholder {
    font-family: "Spoqa Han Sans Neo", "sans-seri";
    text-align: center;
  }
`;

const StyleButton = styled(Button)`
  font-size: 20px;
  font-weight: bold;
  width: 82%;
  height: 50px;

  background-color: #ff9614;

  border: 0px;

  box-shadow: 0px 5px 0 -0.5px black;

  margin-top: 20px;
  margin-bottom: 5px;

  transition: opacity 1s linear;

  font-family: "Spoqa Han Sans Neo", "sans-seri";

  :hover {
    background-color: #ff9614;

    border: 0px;

    box-shadow: 0 0 0 0 black;
    margin-top: 25px;
    margin-bottom: 0px;

    transition: 0s;
  }
`;
