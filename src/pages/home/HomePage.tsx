import { useEffect, useState, useRef } from "react";

import { Background, StoreButton, StatisticButton, TTSText } from "@/entities";

import { Animal, PenguinMove, DolphinMove, HungryStudy } from "@/widgets";

import {
  PAGE_URL,
  useAnimalState,
  AnimalService,
  useStudyState,
} from "@/shared";

const HomePage = () => {
  const animals = useAnimalState((state) => state.animals);
  const studyMovieUrl = useStudyState((state) => state.content);
  const [now, setNow] = useState<Date>(new Date());
  const { loadAnimals } = AnimalService();

  const penguin = useRef<Animal.Animal>();
  const dolphin = useRef<Animal.Animal>();

  useEffect(() => {
    loadAnimals();
  }, [studyMovieUrl]);

  useEffect(() => {
    setNow(new Date());
    penguin.current = animals.find((animal) => animal.animalType === "PENGUIN");
    dolphin.current = animals.find((animal) => animal.animalType === "DOLPHIN");
  }, [animals]);

  return (
    <>
      <Background src="/img/home_background.png" alt="background" />
      <TTSText
        text={"Dyslexia Zoo"}
        style={{
          position: "absolute",

          top: "9px",
          left: "20px",

          fontSize: "50px",
          fontWeight: "bold",
          color: "#549fe1",

          textAlign: "center",
        }}
      />
      <TTSText
        text={"동물원 속 문장, 단어를 클릭하면 발음을 확인할 수 있어!"}
        style={{
          position: "absolute",

          top: "96px",
          left: "23px",

          fontSize: "23px",
          fontWeight: "bold",
          color: "white",

          textAlign: "center",
        }}
      />
      {studyMovieUrl ? <HungryStudy /> : null}
      {penguin.current ? (
        <Animal
          id={penguin.current.id}
          name={penguin.current.nickname}
          info={penguin.current.description}
          playPath={PAGE_URL.Penguin}
          imgPath="/img/penguin.png"
          move={PenguinMove}
          top={70}
          left={52}
          width={120}
          height={130}
          isHungry={penguin.current.hungryTime < now}
        />
      ) : null}
      {dolphin.current ? (
        <Animal
          id={dolphin.current.id}
          name={dolphin.current.nickname}
          info={dolphin.current.description}
          playPath={PAGE_URL.Dolphin}
          imgPath="/img/dolphin.png"
          move={DolphinMove}
          top={65}
          left={20}
          width={150}
          height={160}
          isHungry={dolphin.current.hungryTime < now}
        />
      ) : null}
      <StoreButton />
      <StatisticButton />
    </>
  );
};

export default HomePage;
