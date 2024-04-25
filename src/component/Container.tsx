import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const RowContainer = styled(Container)`
  flex-direction: row;
`;

export const QuestionContainer = styled(Container)`
  flex-direction: column;

  width: 800px;
  height: 270px;

  border: 3px solid;
  border-color: gray;
  border-radius: 5px;

  background-color: white;
`;
