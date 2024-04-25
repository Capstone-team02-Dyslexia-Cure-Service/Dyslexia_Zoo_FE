import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const QuestionContainer = styled(Container)`
  flex-direction: column;

  width: 800px;
  height: 270px;

  border-radius: 10px;

  background-color: red;
`;
