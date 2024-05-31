import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

export const useAnimalState = create<Animal.AnimalsStore>()(
  immer((set) => ({
    //State
    animals: [],

    //Set function
    setAnimal: (id, animalType, nickname, hungryTimer) => {
      set((state) => {
        if (state.animals.find((animal) => animal.id === id))
          state.animals.find((animal) => animal.id === id)!.hungryTime =
            new Date(hungryTimer.split(".")[0]);
        else {
          state.animals.push({
            id: id,
            animalType: animalType,
            nickname: nickname,
            hungryTime: new Date(hungryTimer.split(".")[0]),
          });
        }

        return {};
      });
    },

    setAnimals: (animalsPara) => {
      set((state) => {
        animalsPara.map((animalPara) => {
          state.setAnimal(
            animalPara.id,
            animalPara.animalType,
            animalPara.nickname,
            animalPara.hungryTimer
          );
        });

        return {};
      });
    },
  }))
);
