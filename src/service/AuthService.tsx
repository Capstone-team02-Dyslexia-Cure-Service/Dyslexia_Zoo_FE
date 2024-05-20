import { AxiosResponse } from "axios";

import { API, setAccess } from "@/config/axios";
import useUserState from "@/store/userStore";

const AuthService = () => {
  const URL = "api/v1/member";
  const setName = useUserState((state) => state.setName);

  const signin = async (body: User.SignInReqDto) => {
    const {
      data: { id },
    } = (await API.post(
      `${URL}/signin`,
      body
    )) as AxiosResponse<User.SignInResDto>;

    setAccess(id);
    setName(body.name);
  };

  return { signin };
};

export default AuthService;
