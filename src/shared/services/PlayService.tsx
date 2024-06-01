import { AxiosResponse } from "axios";

import { API, useTestState } from "@/shared";

export const PlayService = () => {
  const URL = "/api/v1";

  const setTest = useTestState((state) => state.setTest);
  const testAnswers = useTestState((state) => state.testAnswers);

  const getQuestion = async () => {
    const { data } = (await API.get(`${URL}/question/ramdom_list`, {
      headers: {
        numOfQuestions: 1,
      },
    })) as AxiosResponse<Question.TestResDto>;

    setTest(data);
  };

  const submitTestAnswers = async () => {
    console.log(testAnswers);
  };

  return { getQuestion, submitTestAnswers };
};
