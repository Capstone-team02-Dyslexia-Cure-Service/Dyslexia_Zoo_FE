import { useEffect } from "react";

import styled from "@emotion/styled";

import { Background } from "@/component/Background";
import TTSText from "@/component/TTSText";
import { HomeButton } from "@/component/Button";

import useAnimalState from "@/store/animalStore";

const StorePage = () => {
  const animals = useAnimalState((state) => state.animals);

  return (
    <>
      <Background src="/img/store_background.png" alt="background" />
      <HomeButton />
      <TTSText
        text={"테스트를 도전하고, 새로운 동물을 얻어봐!!"}
        style={{
          position: "absolute",
          top: "20px",
          left: "50%",
          width: "980px",
          transform: "translate(-50%, 0%)",
          fontSize: "50px",
          fontWeight: "bold",
          color: "black",
          zIndex: "10",
        }}
      />
      <StoreGrid>
        {animals.find((animal) => animal.name === "dolphin") ? (
          <OffAnimalStoreImg src="/img/dolphin_store.png" alt="dolphin_store" />
        ) : (
          <AnimalStoreImg src="/img/dolphin_store.png" alt="dolphin_store" />
        )}
        {animals.find((animal) => animal.name === "monkey") ? (
          <OffAnimalStoreImg src="/img/monkey_store.png" alt="monkey_store" />
        ) : (
          <AnimalStoreImg src="/img/monkey_store.png" alt="monkey_store" />
        )}
        {animals.find((animal) => animal.name === "seal") ? (
          <OffAnimalStoreImg src="/img/seal_store.png" alt="seal_store" />
        ) : (
          <AnimalStoreImg src="/img/seal_store.png" alt="seal_store" />
        )}
      </StoreGrid>
    </>
  );
};

const StoreGrid = styled.div`
  position: absolute;

  top: 49%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 70%;
  height: 50%;

  display: grid;
  grid-template-columns: 33% 33% 33%;

  justify-items: center;
`;

const AnimalStoreImg = styled.img`
  width: 270px;

  filter: drop-shadow(0px 10px 0px black);

  margin-bottom: 32px;

  &:hover {
    filter: drop-shadow(0px 0px 0px black);

    margin-bottom: 22px;
    margin-top: 10px;
  }
`;

const OffAnimalStoreImg = styled(AnimalStoreImg)`
  filter: brightness(0.4);

  margin-bottom: 22px;
  margin-top: 10px;

  &:hover {
    filter: brightness(0.4);
  }
`;

export default StorePage;
