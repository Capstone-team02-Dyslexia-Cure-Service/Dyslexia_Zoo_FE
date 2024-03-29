import { AxiosResponse } from "axios";

import { API, setAccess, storeRefresh } from "@/config/axios";

const authService = () => {
  const URL = "api/v1/user";

  const signin = async (body: User.SignInReqDto) => {
    const {
      data: { accessToken, refreshToken },
    } = (await API.post(
      `${URL}/sign-in`,
      body
    )) as AxiosResponse<User.SignInResDto>;

    setAccess(accessToken);
    storeRefresh(refreshToken);
  };

  return [signin];
};

export default authService;
