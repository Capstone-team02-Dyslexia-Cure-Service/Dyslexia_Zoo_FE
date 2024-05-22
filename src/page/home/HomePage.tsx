import { useEffect, useState } from "react";

import styled from "@emotion/styled";

import { Background } from "@/component/Background";
import TTSText from "@/component/TTSText";
import { StoreButton, StatisticButton } from "@/component/Button";

import Penguin from "@/component/animal/Penguin";
import Animal from "@/component/animal/Animal";
import { PenguinMove } from "@/component/animal/AnimalMove";

import useAnimalState from "@/store/animalStore";
import { PAGE_URL } from "@/config/path";

const BasicTestPage = () => {
  const animals = useAnimalState((state) => state.animals);
  const setAnimal = useAnimalState((state) => state.setAnimal); //remove
  const setAnimals = useAnimalState((state) => state.setAnimals); // remove
  const [now, setNow] = useState<Date>(new Date());

  useEffect(() => {
    setAnimal("penguin", "2024-05-21T16:50:24.298Z");
    setAnimals([
      { name: "penguin", hungryTimeString: "2024-05-22T16:50:24.298Z" },
    ]);
  }, []);

  useEffect(() => {
    console.log(new Date("2023-05-21T12:30:30"));
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
          top={75}
          left={52}
          width={100}
          height={110}
          isHungry
        />
      ) : null}
      <StoreButton />
      <StatisticButton />
    </>
  );
};

export default BasicTestPage;
