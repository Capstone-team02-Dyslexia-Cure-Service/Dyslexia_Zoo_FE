import { AxiosResponse } from "axios";
import { PAGE_URL } from "@/config/path";
import { useNavigate } from "react-router";

import { API, setAccess } from "@/config/axios";
import useUserState from "@/hooks/useUserStore";

const AuthService = () => {
  const URL = "api/v1/member";
  const setName = useUserState((state) => state.setName);
  const navigate = useNavigate();

  const signin = async (body: User.SignInReqDto) => {
    const {
      data: { id, name, level },
    } = (await API.post(
      `${URL}/signin`,
      body
    )) as AxiosResponse<User.SignInResDto>;

    setAccess(id);
    setName(name);

    if (level === "NOT_EVALUATED") navigate(PAGE_URL.BasicTest);
    else navigate(PAGE_URL.Home);
  };

  return { signin };
};

export default AuthService;
