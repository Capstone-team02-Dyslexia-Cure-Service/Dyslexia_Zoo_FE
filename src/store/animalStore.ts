import { create } from "zustand";

const useAnimalState = create<Animal.animalsStore>((set) => ({
  //State
  animals: [
    { name: "penguin", hungryTime: new Date(new Date("2024-06-21T12:30:30")) },
  ],

  //Set function
  setAnimals: (animals) => {
    set(() => ({ animals: animals }));
  },

  setAnimal: (name, hungryTime) => {
    set((state) => {
      state.animals.find((animal) => animal.name === name)!.hungryTime =
        hungryTime;

      return {};
    });
  },
}));

export default useAnimalState;
