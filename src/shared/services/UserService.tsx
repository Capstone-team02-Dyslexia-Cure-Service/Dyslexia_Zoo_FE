import { AxiosResponse } from "axios";
import { PAGE_URL } from "@/shared/configs/path";
import { useNavigate } from "react-router";

import { useUserState, useLayoutState, API, setAccess } from "@/shared";

export const UserService = () => {
  const URL = "api/v1";
  const setName = useUserState((state) => state.setName);
  const navigate = useNavigate();

  const setMessage = useLayoutState((state) => state.setMessage);

  const setStatisticData = useUserState((state) => state.setStatisticData);

  const signin = async (body: User.SignInReqDto) => {
    try {
      const { data } = (await API.post(
        `${URL}/member/signin`,
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

  const loadStatisticData = async (pageNumber: number, size: number) => {
    const { data } = (await API.get(
      `${URL}/achievement/all?pageNumber=${pageNumber}&size=${size}`
    )) as AxiosResponse<User.LoadStatisticDataResDto>;

    setStatisticData(data);
  };

  return { signin, loadStatisticData };
};
