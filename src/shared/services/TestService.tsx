import { AxiosResponse } from "axios";

import { API, FORMAPI, useTestState } from "@/shared";

export const TestService = () => {
  const URL = "/api/v1/test";

  const setTest = useTestState((state) => state.setTest);
  const testAnswers = useTestState((state) => state.testAnswers);
  const testAnswersInfo = useTestState((state) => state.testAnswersInfo);

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
