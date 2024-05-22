import { AxiosResponse } from "axios";

import { API } from "@/shared/configs/axios";
import useTestStore from "@/shared/hooks/useTestState";

const PlayService = () => {
  const URL = "/api/v1/play";

  const setTest = useTestStore((state) => state.setTest);
  const testAnswers = useTestStore((state) => state.testAnswers);

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

export default PlayService;
