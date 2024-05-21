import { useEffect, useState } from "react";

import styled from "@emotion/styled";

import { Background } from "@/component/Background";
import TTSText from "@/component/TTSText";
import { StoreButton, StatisticButton } from "@/component/Button";

import Penguin from "@/component/animal/Penguin";

import useAnimalState from "@/store/animalStore";

const BasicTestPage = () => {
  const animals = useAnimalState((state) => state.animals);
  const setAnimal = useAnimalState((state) => state.setAnimal);
  const [now, setNow] = useState<Date>(new Date());

  useEffect(() => {
    setAnimal("penguin", "2024-05-21T16:50:24.298Z");
  }, []);

  useEffect(() => {
    console.log(new Date("2023-05-21T12:30:30"));
    setNow(new Date());
  }, [animals]);

  return (
    <>
      <Background src="/img/home_background.png" alt="background" />
      {animals.find((animal) => animal.name === "penguin") ? (
        <Penguin
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

export default BasicTestPage;
