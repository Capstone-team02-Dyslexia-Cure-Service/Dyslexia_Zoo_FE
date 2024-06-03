import { AxiosResponse } from "axios";

import { API, FORMAPI, usePlayState, useLayoutState } from "@/shared";

export const PlayService = () => {
  const URL = "/api/v1";

  const setPlay = usePlayState((state) => state.setPlay);
  const setFeedback = usePlayState((state) => state.setFeedback);

  const setSuccess = useLayoutState((state) => state.setSuccess);
  const setLoading = useLayoutState((state) => state.setLoading);

  const getQuestion = async () => {
    setLoading("LOADCONTENT");

    const { data } = (await API.get(`${URL}/question/random_list`, {
      headers: { numOfQuestions: 1 },
    })) as AxiosResponse<Question.QuestionResDto[]>;

    console.log(data);

    setLoading(false);
    setPlay(data[0]);
  };

  const submitQuestion = async (
    id: number,
    questionResponseType: Question.QuestionType,
    answer: File | string
  ) => {
    if (typeof answer === "string") {
      setLoading("GETRESULT");

      console.log(answer);

      const {
        data: {
          isCorrect,
          answerVideoFilePath,
          speedFeedback,
          accuracyFeedback,
        },
      } = (await API.post(`${URL}/solvingRecord/solve/one/write`, {
        answer: answer,
        questionId: id,
        questionResponseType: questionResponseType,
      })) as AxiosResponse<Question.QuestionSubmitResDto>;

      console.log(answerVideoFilePath);

      setLoading(false);
      if (isCorrect) setSuccess(true);
      else
        setFeedback({
          videoPath: answerVideoFilePath,
          speedFeedback,
          accuracyFeedback,
        });
    } else {
      setLoading("GETRESULT");

      const formData = new FormData();
      formData.append("answerFile", answer);

      const {
        data: {
          isCorrect,
          answerVideoFilePath,
          speedFeedback,
          accuracyFeedback,
        },
      } = (await FORMAPI.post(
        `${URL}/solvingRecord/solve/one/read?questionId=${id}&questionResponseType=${questionResponseType}`,
        formData
      )) as AxiosResponse<Question.QuestionSubmitResDto>;

      setLoading(false);
      if (isCorrect) setSuccess(true);
      else
        setFeedback({
          videoPath: answerVideoFilePath,
          speedFeedback,
          accuracyFeedback,
        });
    }
  };

  return { getQuestion, submitQuestion };
};
