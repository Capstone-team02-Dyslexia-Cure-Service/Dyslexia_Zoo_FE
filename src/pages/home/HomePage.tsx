import { useEffect, useState } from "react";

import { Background, StoreButton, StatisticButton } from "@/entities";

import { Animal, PenguinMove, DolphinMove } from "@/widgets";

import { PAGE_URL, useAnimalState, AnimalService } from "@/shared";

const HomePage = () => {
  const animals = useAnimalState((state) => state.animals);
  const [now, setNow] = useState<Date>(new Date());
  const { loadAnimals } = AnimalService();

  useEffect(() => {
    loadAnimals();
  }, []);

  useEffect(() => {
    setNow(new Date());
  }, [animals]);

  return (
    <>
      <Background src="/img/home_background.png" alt="background" />
      {animals.find((animal) => animal.name === "penguin") ? (
        <Animal
          name="펭귄"
          info="2024년에 처음 한국으로 왔다. Dyslexia Zoo에서 다이빙을 연습하며 즐겁게 살아가고 있다."
          playPath={PAGE_URL.Penguin}
          imgPath="/img/penguin.png"
          move={PenguinMove}
          top={70}
          left={52}
          width={120}
          height={130}
          isHungry={
            animals.find((animal) => animal.name === "penguin")!.hungryTime <
            now
          }
        />
      ) : null}
      {animals.find((animal) => animal.name === "dolphin") ? (
        <Animal
          name="돌고래"
          info="2024년에 처음 한국으로 왔다. Dyslexia Zoo에서 묘기를 부리며 즐겁게 살아가고 있다."
          playPath={PAGE_URL.Dolphin}
          imgPath="/img/dolphin.png"
          move={DolphinMove}
          top={65}
          left={20}
          width={150}
          height={160}
          isHungry={
            animals.find((animal) => animal.name === "penguin")!.hungryTime <
            now
          }
        />
      ) : null}
      <StoreButton />
      <StatisticButton />
    </>
  );
};

export default HomePage;
