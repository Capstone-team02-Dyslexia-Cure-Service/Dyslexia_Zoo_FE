import { AxiosResponse } from "axios";

import { API, FORMAPI, useTestState, useLayoutState } from "@/shared";

export const TestService = () => {
  const URL = "api/v1/test";

  const setTest = useTestState((state) => state.setTest);

  const setLoading = useLayoutState((state) => state.setLoading);
  const setSuccess = useLayoutState((state) => state.setSuccess);
  const setFailure = useLayoutState((state) => state.setFailure);

  const getTest = async () => {
    setLoading("LOADCONTENT");

    const { data } = (await API.get(`${URL}/create`, {
      headers: { numOfQuestions: 9 },
    })) as AxiosResponse<Question.TestResDto>;

    setLoading(false);
    setTest(data);
  };

  const getBasicTest = async () => {
    setLoading("LOADCONTENT");

    const { data } = (await API.get(`${URL}/create`, {
      headers: { numOfQuestions: 12 },
    })) as AxiosResponse<Question.TestResDto>;

    setLoading(false);
    setTest(data);
  };

  const submitWriteAnswer = async (
    testId: number,
    questionId: number,
    questionResponseType: Question.QuestionType,
    answer: string
  ) => {
    setLoading("GETRESULT");

    await API.post(
      `${URL}/interim_submit/write/testId=${testId}&questionId=${questionId}&questionResponseType=${questionResponseType}`,
      {
        answer: answer,
      }
    );

    setLoading(false);
  };

  const submitReadAnswer = async (
    testId: number,
    questionId: number,
    questionResponseType: Question.QuestionType,
    answer: File
  ) => {
    setLoading("GETRESULT");

    const formData = new FormData();
    formData.append("answerFile", answer);

    await FORMAPI.post(
      `${URL}/interim_submit/read/testId=${testId}&questionId=${questionId}&questionResponseType=${questionResponseType}`,
      formData
    );

    setLoading(false);
  };

  const getTestResult = async (testId: number) => {
    setLoading("GETRESULT");

    const {
      data: { numCorrect },
    } = await API.get(`${URL}/submit/testId=${testId}`);

    setLoading(false);

    if (numCorrect > 6) setSuccess(true);
    else setFailure(numCorrect);
  };

  return {
    getTest,
    getBasicTest,
    submitReadAnswer,
    submitWriteAnswer,
    getTestResult,
  };
};
