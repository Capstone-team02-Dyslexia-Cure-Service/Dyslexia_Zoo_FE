import styled from "@emotion/styled";

export const StoreGrid = styled.div`
  position: absolute;

  top: 49%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 80%;
  height: 50%;

  display: grid;
  grid-template-columns: 33% 33% 33%;

  justify-items: center;
`;

export const AnimalStoreImg = styled.img`
  width: 270px;

  filter: drop-shadow(0px 10px 0px black);

  margin-bottom: 32px;

  &:hover {
    filter: none;

    margin-bottom: 22px;
    margin-top: 10px;
  }
`;

export const OffAnimalStoreImg = styled(AnimalStoreImg)`
  filter: brightness(0.4);

  margin-bottom: 22px;
  margin-top: 10px;

  &:hover {
    filter: brightness(0.4);
  }
`;
