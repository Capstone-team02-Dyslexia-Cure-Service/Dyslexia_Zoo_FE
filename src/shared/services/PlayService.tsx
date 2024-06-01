import { AxiosResponse } from "axios";

import { API, FORMAPI, usePlayState, useLayoutState } from "@/shared";

export const PlayService = () => {
  const URL = "/api/v1/question/one";

  const setPlay = usePlayState((state) => state.setPlay);
  const setFeedback = usePlayState((state) => state.setFeedback);

  const setSuccess = useLayoutState((state) => state.setSuccess);

  const getQuestion = async () => {
    const { data } = (await API.get(
      `${URL}`
    )) as AxiosResponse<Question.QuestionResDto>;

    setPlay(data);
  };

  const submitQuestion = async (
    id: number,
    questionResponseType: Question.QuestionType,
    answer: File | string
  ) => {
    if (typeof answer === "string") {
      const {
        data: { isCorrect, videoPath, speedFeedback, accuracyFeedback },
      } = (await API.post(
        `${URL}/questionId=${id}&questionResponseType=${questionResponseType}`,
        {
          answer: answer,
        }
      )) as AxiosResponse<Question.QuestionSubmitResDto>;

      if (isCorrect) setSuccess(true);
      else setFeedback({ videoPath, speedFeedback, accuracyFeedback });
    } else {
      const formData = new FormData();
      formData.append("answerFile", answer);

      const {
        data: { isCorrect, videoPath, speedFeedback, accuracyFeedback },
      } = (await FORMAPI.post(
        `${URL}/questionId=${id}&questionResponseType=${questionResponseType}`,
        formData
      )) as AxiosResponse<Question.QuestionSubmitResDto>;

      if (isCorrect) setSuccess(true);
      else setFeedback({ videoPath, speedFeedback, accuracyFeedback });
    }
  };

  return { getQuestion, submitQuestion };
};
