import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  flex-wrap: wrap;

  width: 98%;
`;

export const QuestionContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 750px;
  height: 220px;

  border: 3px #0000cd solid;
  border-radius: 5px;

  background-color: #0000cd;

  margin-bottom: 30px;
`;

export const GraphContainer = styled.div`
  position: absolute;
  top: 65%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 750px;
  height: 440px;

  border: 0px #0000cd solid;
  border-radius: 10px;

  background-color: white;

  margin-bottom: 30px;
`;

export const BasicTestContainer = styled(Container)`
  position: absolute;

  top: 200px;
  left: 50%;
  transform: translate(-50%, 0%);
`;

export const FixContainer = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;

  width: 100%;
  height: 100%;

  overflow: hidden;
`;
