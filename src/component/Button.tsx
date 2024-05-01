import styled from "@emotion/styled";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import CheckIcon from "@mui/icons-material/Check";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import { speech } from "./function/speech";

import { Container } from "./Container";

export const SoundButton = ({ content }: { content: string }) => (
  <Button>
    <SoundIcon
      onClick={() => {
        speech(content);
      }}
    />
  </Button>
);

export const SubmitButton = ({ onClick }: { onClick: any }) => (
  <LargeButton onClick={onClick}>
    <SubmitIcon />
  </LargeButton>
);

export const SaveButton = ({ onClick }: { onClick: any }) => (
  <Button onClick={onClick}>
    <SaveIcon />
  </Button>
);

const Button = styled(Container)`
  background-color: #3232ff;

  width: 110px;
  height: 110px;

  border-radius: 5px;
  margin-bottom: 2px;

  box-shadow: 6px 8px 2px 0 black;

  &:hover {
    box-shadow: 0 0 0 0 black;
    margin-bottom: 0px;
    margin-top: 2px;
  }
`;

const LargeButton = styled(Button)`
  background-color: #0000cd;

  width: 750px;

  border: 3px #0000cd solid;

  margin-bottom: 32px;

  &:hover {
    box-shadow: 0 0 0 0 black;
    margin-bottom: 30px;
    margin-top: 2px;
  }
`;

const SoundIcon = styled(HeadphonesIcon)`
  color: white;
  font-size: 100px;
`;

const SubmitIcon = styled(KeyboardArrowUpIcon)`
  color: white;
  font-size: 100px;
`;

const SaveIcon = styled(CheckIcon)`
  color: white;
  font-size: 100px;
`;