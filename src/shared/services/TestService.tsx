import { AxiosResponse } from "axios";

import { API, FORMAPI, useTestStore } from "@/shared";

export const TestService = () => {
  const URL = "/api/v1/test";

  const setTest = useTestStore((state) => state.setTest);
  const testAnswers = useTestStore((state) => state.testAnswers);

  const getTest = async () => {
    const {
      data: { id, questions },
    } = (await API.get(`${URL}`)) as AxiosResponse<Question.BasicTestResDto>;

    setTest({ id: id, questions: questions });
  };

  const submitTestAnswers = async () => {
    const { data } = await FORMAPI.post(`${URL}`, testAnswers);

    //정답 전시 구현 필요
  };

  return { getTest, submitTestAnswers };
};
