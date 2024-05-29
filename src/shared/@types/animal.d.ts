declare namespace Animal {
  //DTO
  export type LoadAnimalsResDto = {
    id: number;
    animalType: AnimalType;
    nickname: string;
    hungryTimer: string;
  }[];

  export interface GetStudyContentResDto {
    content: string;
    url: string;
  }

  //Variable
  export type Animals = {
    id: number;
    animalType: AnimalType;
    nickname: string;
    hungryTime: Date;
  }[];
  export type AnimalsPara = {
    id: number;
    animalType: AnimalType;
    nickname: string;
    hungryTimer: string;
  }[];
  export type AnimalType = "DOLPHIN" | "PENGUIN" | "MONKEY" | "SEAL";

  //Store
  export interface AnimalsStore {
    animals: Animals;
    setAnimals: (animalsPara: AnimalsPara) => void;
    setAnimal: (
      id: number,
      animalType: AnimalType,
      nickname: string,
      hungryTimer: string
    ) => void;
  }
  export interface StudyStore {
    content: string | false;
    url: string | false;
    setStudy: (data: GetStudyContentResDto) => void;
  }
}
