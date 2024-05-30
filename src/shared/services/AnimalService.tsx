import { AxiosResponse } from "axios";
import { useAnimalState, API } from "@/shared";

export const AnimalService = () => {
  const URL = "api/v1/store";
  const setAnimals = useAnimalState((state) => state.setAnimals);

  const loadAnimals = async () => {
    console.log(API.defaults.headers["memberId"]);
    const { data } = (await API.get(
      `${URL}`
    )) as AxiosResponse<Animal.LoadAnimalsResDto>;

    setAnimals(data);
  };

  return { loadAnimals };
};
