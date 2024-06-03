declare namespace Animal {
  //DTO
  export type LoadAnimalsResDto = {
    animalResponseDtoList: AnimalsPara;
  };

  export type GetStudyContentResDto = {
    content: string;
    videoPath: string;
  }[];

  export type AnimalFeedDto = {
    id: number;
    animalType: AnimalType;
    description: string;
    nickname: string;
    hungerTimer: string;
  };

  //Variable
  export type Animal = {
    id: number;
    animalType: AnimalType;
    description: string;
    nickname: string;
    hungryTime: Date;
  };

  export type Animals = Animal[];

  export type AnimalsPara = {
    id: number;
    animalType: AnimalType;
    description: string;
    nickname: string;
    hungerTimer: string;
  }[];

  export type AnimalType = "DOLPHIN" | "PENGUIN" | "MONKEY" | "SEAL";

  //Store
  export interface AnimalsStore {
    animals: Animals;
    setAnimals: (animalsPara: AnimalsPara) => void;
    setAnimal: (
      id: number,
      animalType: AnimalType,
      description: string,
      nickname: string,
      hungerTimer: string
    ) => void;
  }
  export interface StudyStore {
    content: string | false;
    url: string | false;
    id: number | false;
    setStudy: (data: {
      content: string | false;
      url: string | false;
      id: number | false;
    }) => void;
  }
}
