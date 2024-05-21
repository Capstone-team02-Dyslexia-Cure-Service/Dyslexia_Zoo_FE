declare namespace Animal {
  //DTO

  //Variable
  export type animals = { name: string; hungryTime: Date }[];

  //Store
  export interface animalsStore {
    animals: animals;
    setAnimals: (animals) => void;
    setAnimal: (name: string, hungryTime: Date) => void;
  }
}
