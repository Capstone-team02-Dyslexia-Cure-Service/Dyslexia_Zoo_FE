import { AxiosResponse } from "axios";

import { API, setAccess } from "@/config/axios";

const AuthService = () => {
  const URL = "api/v1/user";

  const signin = async (body: User.SignInReqDto) => {
    const {
      data: { id },
    } = (await API.post(
      `${URL}/sign-in`,
      body
    )) as AxiosResponse<User.SignInResDto>;

    setAccess(id);
  };

  return { signin };
};

export default AuthService;
