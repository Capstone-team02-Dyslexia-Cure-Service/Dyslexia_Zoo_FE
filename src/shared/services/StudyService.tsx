import { AxiosResponse } from "axios";

import { API, useStudyState } from "@/shared";

export const StudyService = () => {
  const URL = "api/v1/study";

  const { setStudy } = useStudyState();

  const GetStudyContent = async () => {
    const { data } = (await API.get(
      `${URL}`
    )) as AxiosResponse<Animal.GetStudyContentResDto>;

    setStudy(data);
  };

  return { GetStudyContent };
};
