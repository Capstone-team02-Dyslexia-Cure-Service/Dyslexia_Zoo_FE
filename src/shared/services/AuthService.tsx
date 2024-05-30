import { AxiosResponse } from "axios";
import { PAGE_URL } from "@/shared/configs/path";
import { useNavigate } from "react-router";

import { useUserState, useApiState, API, setAccess } from "@/shared";

export const AuthService = () => {
  const URL = "api/v1/member";
  const setName = useUserState((state) => state.setName);
  const navigate = useNavigate();
  const setMessage = useApiState((state) => state.setMessage);

  const signin = async (body: User.SignInReqDto) => {
    try {
      const { data } = (await API.post(
        `${URL}/signin`,
        body
      )) as AxiosResponse<User.SignInResDto>;

      if (data.data && data.data.email) {
        setMessage(data.data.email);
      } else {
        setAccess(data.id);
        setName(data.name);

        if (!data.level || data.level === "NOT_EVALUATED")
          navigate(PAGE_URL.BasicTest);
        else navigate(PAGE_URL.Home);
      }
    } catch (error) {
      setMessage("로그인 정보가 잘못 되었습니다.");
    }
  };

  return { signin };
};
