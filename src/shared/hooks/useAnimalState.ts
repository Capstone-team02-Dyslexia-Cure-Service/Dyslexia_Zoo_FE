import { create } from "zustand";

export const useAnimalState = create<Animal.animalsStore>((set) => ({
  //State
  animals: [],

  //Set function
  setAnimal: (name, hungryTimeString) => {
    set((state) => {
      if (state.animals.find((animal) => animal.name === name))
        state.animals.find((animal) => animal.name === name)!.hungryTime =
          new Date(hungryTimeString.split(".")[0]);
      else {
        state.animals.push({
          name: name,
          hungryTime: new Date(hungryTimeString.split(".")[0]),
        });
      }

      return {};
    });
  },

  setAnimals: (animalsPara) => {
    set((state) => {
      animalsPara.map((animalPara) => {
        state.setAnimal(animalPara.name, animalPara.hungryTimeString);
      });

      return {};
    });
  },
}));
