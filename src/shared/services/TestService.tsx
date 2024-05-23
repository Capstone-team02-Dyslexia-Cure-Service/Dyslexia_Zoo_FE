import { AxiosResponse } from "axios";

import { API, FORMAPI, useTestStore } from "@/shared";

export const TestService = () => {
  const URL = "/api/v1/test";

  const setTest = useTestStore((state) => state.setTest);
  const testAnswers = useTestStore((state) => state.testAnswers);
  const testAnswersInfo = useTestStore((state) => state.testAnswersInfo);

  const getTest = async () => {
    const {
      data: { id, questions },
    } = (await API.get(`${URL}`)) as AxiosResponse<Question.BasicTestResDto>;

    setTest({ id: id, questions: questions });
  };

  const submitTestAnswers = async () => {
    const formData = new FormData();
    formData.append(
      "info",
      new Blob([JSON.stringify(testAnswersInfo)], {
        type: "application/json",
      })
    );
    testAnswers.map((answer, index) => {
      formData.append(`answer_${index}`, answer);
    });

    const { data } = await FORMAPI.post(`${URL}`, formData);

    //정답 전시 구현 필요
  };

  return { getTest, submitTestAnswers };
};
