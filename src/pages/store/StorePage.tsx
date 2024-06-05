import { useEffect, useState } from "react";

import * as Styles from "./Styles";

import { Background, TTSText, HomeButton } from "@/entities";
import { useAnimalState, AnimalService } from "@/shared";
import { StoreTest } from "@/widgets";

const StorePage = () => {
  const animals = useAnimalState((state) => state.animals);
  const { loadAnimals } = AnimalService();
  const [onTest, setOnTest] = useState(false);

  useEffect(() => {
    loadAnimals();
  }, []);

  return (
    <>
      <Background src="/img/store_background.png" alt="background" />
      <HomeButton />
      {onTest ? <StoreTest /> : null}
      <TTSText
        text={"테스트를 도전하고, 새로운 동물을 얻어봐!!"}
        style={{
          position: "absolute",
          top: "20px",
          left: "50%",
          width: "880px",
          transform: "translate(-50%, 0%)",
          fontSize: "50px",
          fontWeight: "bold",
          color: "black",
          zIndex: "10",
        }}
      />

      <TTSText
        text={"아직 동물원에 도착하지 못했어"}
        style={{
          position: "absolute",
          backgroundColor: "red",
          borderLeft: "13px solid red",
          borderRadius: "13px",
          top: "300px",
          left: "64%",
          width: "645px",
          transform: "translate(-50%, 0%)",
          fontSize: "50px",
          fontWeight: "bold",
          color: "white",
          zIndex: "2",
        }}
      />

      {!animals ? null : (
        <Styles.StoreGrid>
          {animals.find((animal) => animal.animalType === "DOLPHIN") ? (
            <Styles.OffAnimalStoreImg
              src="/img/dolphin_store.png"
              alt="dolphin_store"
            />
          ) : (
            <Styles.AnimalStoreImg
              src="/img/dolphin_store.png"
              alt="dolphin_store"
              onClick={() => setOnTest(true)}
            />
          )}
          {animals.find((animal) => animal.animalType === "MONKEY") ? (
            <Styles.OffAnimalStoreImg
              src="/img/monkey_store.png"
              alt="monkey_store"
            />
          ) : (
            <Styles.OffAnimalStoreImg
              src="/img/monkey_store.png"
              alt="monkey_store"
              onClick={() => setOnTest(true)}
            />
          )}
          {animals.find((animal) => animal.animalType === "SEAL") ? (
            <Styles.OffAnimalStoreImg
              src="/img/seal_store.png"
              alt="seal_store"
            />
          ) : (
            <Styles.OffAnimalStoreImg
              src="/img/seal_store.png"
              alt="seal_store"
              onClick={() => setOnTest(true)}
            />
          )}
        </Styles.StoreGrid>
      )}
    </>
  );
};

export default StorePage;
