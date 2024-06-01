import { AxiosResponse } from "axios";

import { API, FORMAPI, useTestState, useLayoutState } from "@/shared";

export const TestService = () => {
  const URL = "api/v1/test";

  const setTest = useTestState((state) => state.setTest);

  const setSuccess = useLayoutState((state) => state.setSuccess);

  const getTest = async () => {
    const { data } = (await API.get(`${URL}/create`, {
      headers: { numOfQuestions: 9 },
    })) as AxiosResponse<Question.TestResDto>;

    setTest(data);
  };

  const getBasicTest = async () => {
    const { data } = (await API.get(`${URL}/create`, {
      headers: { numOfQuestions: 12 },
    })) as AxiosResponse<Question.TestResDto>;

    setTest(data);
  };

  const submitWriteAnswer = async (
    testId: number,
    questionId: number,
    questionResponseType: Question.QuestionType,
    answer: string
  ) => {
    await API.post(
      `${URL}/interim_submit/write/testId=${testId}&questionId=${questionId}&questionResponseType=${questionResponseType}`,
      {
        answer: answer,
      }
    );
  };

  const submitReadAnswer = async (
    testId: number,
    questionId: number,
    questionResponseType: Question.QuestionType,
    answer: File
  ) => {
    const formData = new FormData();
    formData.append("answerFile", answer);

    await FORMAPI.post(
      `${URL}/interim_submit/read/testId=${testId}&questionId=${questionId}&questionResponseType=${questionResponseType}`,
      formData
    );
  };

  const getTestResult = async (testId: number) => {
    const {
      data: { isCorrect },
    } = await API.get(`${URL}/submit/testId=${testId}`);

    if (isCorrect) setSuccess(true);
    else console.log("!!");
  };

  return {
    getTest,
    getBasicTest,
    submitReadAnswer,
    submitWriteAnswer,
    getTestResult,
  };
};
