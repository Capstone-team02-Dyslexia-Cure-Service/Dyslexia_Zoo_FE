import { AxiosResponse } from "axios";

import { API, useTestState, useLayoutState } from "@/shared";

export const PlayService = () => {
  const URL = "/api/v1";

  const setTest = useTestState((state) => state.setTest);
  const testAnswers = useTestState((state) => state.testAnswers);
  const setMessage = useLayoutState((state) => state.setMessage);

  const getQuestion = async () => {
    const { data } = (await API.get(`${URL}/question/random_list`, {
      headers: {
        numOfQuestions: 1,
      },
    })) as AxiosResponse<Question.TestResDto>;

    setTest(data);
  };

  const submitTestAnswers = async () => {
    console.log(testAnswers);
    if (testAnswers.length === 0) {
      setMessage("녹음 이후 제출해주세요!");
      return;
    }

    setMessage("제출 완료!");
  };

  return { getQuestion, submitTestAnswers };
};
