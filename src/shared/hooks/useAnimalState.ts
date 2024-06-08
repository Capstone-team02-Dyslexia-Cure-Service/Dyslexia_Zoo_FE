import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

export const useAnimalState = create<Animal.AnimalsStore>()(
  immer((set) => ({
    //State
    animals: [],

    //Set function
    setAnimal: (id, animalType, description, nickname, hungerTimer) => {
      set((state) => {
        if (state.animals.find((animal) => animal.id === id)) {
          state.animals.find((animal) => animal.id === id)!.hungryTime =
            new Date(hungerTimer.split(".")[0]);
        } else {
          state.animals.push({
            id: id,
            animalType: animalType,
            description: description,
            nickname: nickname,
            hungryTime: new Date(hungerTimer.split(".")[0]),
          });
        }
      });
    },

    setAnimals: (animalsPara) => {
      set((state) => {
        const newAnimals: Animal.Animals = [];

        animalsPara.map((animal) => {
          newAnimals.push({
            id: animal.id,
            animalType: animal.animalType,
            description: animal.description,
            nickname: animal.nickname,
            hungryTime: new Date(animal.hungerTimer.split(".")[0]),
          });
        });

        state.animals = newAnimals;
      });
    },
  }))
);
