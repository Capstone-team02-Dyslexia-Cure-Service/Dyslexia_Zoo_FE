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

  width: 600px;
  height: 240px;

  border: 3px #0000cd solid;
  border-radius: 5px;

  background-color: #0000cd;
`;
