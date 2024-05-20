import { useNavigate } from "react-router-dom";

import styled from "@emotion/styled";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import CheckIcon from "@mui/icons-material/Check";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import MicIcon from "@mui/icons-material/Mic";
import StopIcon from "@mui/icons-material/Stop";

import { speech } from "./function/speech";

import { Container } from "./Container";
import { PAGE_URL } from "@/config/path";

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

export const StartRecordButton = ({ onClick }: { onClick: any }) => (
  <Button onClick={onClick}>
    <StartRecordIcon />
  </Button>
);

export const StopRecordButton = ({ onClick }: { onClick: any }) => (
  <Button onClick={onClick}>
    <StopRecordIcon />
  </Button>
);

export const HomeButton = () => {
  const navigate = useNavigate();
  return (
    <HomeIcon
      onClick={() => {
        navigate(PAGE_URL.Home);
      }}
    ></HomeIcon>
  );
};

export const StoreButton = () => {
  const navigate = useNavigate();
  return (
    <StoreIcon
      onClick={() => {
        navigate(PAGE_URL.Store);
      }}
    ></StoreIcon>
  );
};

export const StatisticButton = () => {
  const navigate = useNavigate();
  return (
    <StatisticIcon
      onClick={() => {
        navigate(PAGE_URL.Statistic);
      }}
    ></StatisticIcon>
  );
};

export const ExButton = ({
  value,
  onClick,
}: {
  value: string;
  onClick: any;
}) => {
  return <WhiteButton onClick={onClick}>{value}</WhiteButton>;
};

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

const WhiteButton = styled(Container)`
  background-color: white;

  width: 110px;
  height: 110px;

  border-radius: 5px;
  margin-bottom: 2px;

  box-shadow: 6px 8px 2px 0 black;

  font-size: 100px;

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

const StartRecordIcon = styled(MicIcon)`
  color: white;
  font-size: 100px;
`;

const StopRecordIcon = styled(StopIcon)`
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

const HomeIcon = styled(ArrowBackIosNewIcon)`
  position: absolute;
  top: 27px;
  left: 30px;

  color: black;
  font-size: 60px;

  z-index: 10;
`;

const StoreIcon = styled(LocalShippingIcon)`
  position: absolute;
  bottom: 17px;
  right: 35px;

  color: white;
  font-size: 90px;

  z-index: 10;
`;

const StatisticIcon = styled(EqualizerIcon)`
  position: absolute;
  bottom: 17px;
  right: 150px;

  color: white;
  font-size: 90px;

  z-index: 10;
`;
