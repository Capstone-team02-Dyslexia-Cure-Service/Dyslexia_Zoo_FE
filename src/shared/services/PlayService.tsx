import { AxiosResponse } from "axios";

import { API, useTestState } from "@/shared";

export const PlayService = () => {
  const URL = "/api/v1/play";

  const setTest = useTestState((state) => state.setTest);
  const testAnswers = useTestState((state) => state.testAnswers);

  const getTest = async () => {
    const {
      data: { id, questions },
    } = (await API.get(`${URL}`)) as AxiosResponse<Question.BasicTestResDto>;

    setTest({ id: id, questions: questions });
  };

  const submitTestAnswers = async () => {
    console.log(testAnswers);
  };

  return { getTest, submitTestAnswers };
};
