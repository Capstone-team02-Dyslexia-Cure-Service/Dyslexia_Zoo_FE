import { AxiosResponse } from "axios";
import { PAGE_URL } from "@/shared/configs/path";
import { useNavigate } from "react-router";

import { useAnimalState, API } from "@/shared";

export const AnimalService = () => {
  const URL = "api/v1/store";
  const setAnimals = useAnimalState((state) => state.setAnimals);

  const loadAnimals = async () => {
    const { data } = (await API.get(
      `${URL}`
    )) as AxiosResponse<Animal.LoadAnimalsResDto>;

    setAnimals(data);
  };

  return { loadAnimals };
};
