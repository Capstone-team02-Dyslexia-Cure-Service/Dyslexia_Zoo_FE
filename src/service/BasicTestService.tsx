import { AxiosResponse } from "axios";

import { API } from "@/config/axios";
import useTestStore from "@/store/testStore";

const BasicTestService = () => {
  const URL = "/api/v1/basicTest";

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

  return [getTest, submitTestAnswers];
};

export default BasicTestService;
