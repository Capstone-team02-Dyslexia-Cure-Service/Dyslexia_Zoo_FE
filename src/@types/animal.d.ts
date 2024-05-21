declare namespace Animal {
  //DTO

  //Variable
  export type Animals = { name: string; hungryTime: Date }[];
  export type AnimalsPara = { name: string; hungryTimeString: string }[];

  //Store
  export interface animalsStore {
    animals: Animals;
    setAnimals: (animalsPara: AnimalsPara) => void;
    setAnimal: (name: string, hungryTimeString: string) => void;
  }
}
