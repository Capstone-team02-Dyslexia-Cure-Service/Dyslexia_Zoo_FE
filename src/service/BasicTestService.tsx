import { AxiosResponse } from "axios";

import { API, FORMAPI } from "@/config/axios";
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
    const formData = new FormData();
    testAnswers.map((testAnswer) => {
      formData.append(testAnswer.id, testAnswer.answer);
    });
    console.log(testAnswers);
  };

  return { getTest, submitTestAnswers };
};

export default BasicTestService;
