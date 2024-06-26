import { AxiosResponse } from "axios";

import { API, useStudyState, useAnimalState, useLayoutState } from "@/shared";

export const StudyService = () => {
  const URL = "api/v1";

  const setStudy = useStudyState((state) => state.setStudy);
  const setAnimal = useAnimalState((state) => state.setAnimal);

  const setLoading = useLayoutState((state) => state.setLoading);

  const getStudyContent = async (id: number) => {
    setLoading("LOADCONTENT");

    const { data } = (await API.get(`${URL}/question/random_edu`, {
      headers: { numOfQuestions: 1 },
    })) as AxiosResponse<Animal.GetStudyContentResDto>;

    setLoading(false);
    setStudy({
      url: data[0].videoPath,
      content: data[0].content,
      id: id,
    });
  };

  const animalFeed = async (id: number) => {
    const {
      data: { animalType, description, nickname, hungerTimer },
    } = (await API.get(`${URL}/animal/feed`, {
      headers: { animalId: id },
    })) as AxiosResponse<Animal.AnimalFeedDto>;

    setAnimal(id, animalType, description, nickname, hungerTimer);
  };

  return { getStudyContent, animalFeed };
};
