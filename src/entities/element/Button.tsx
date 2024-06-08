import { useNavigate } from "react-router-dom";
import { useRef } from "react";

import styled from "@emotion/styled";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import CheckIcon from "@mui/icons-material/Check";
//import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import MicIcon from "@mui/icons-material/Mic";
import StopIcon from "@mui/icons-material/Stop";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import PublishIcon from "@mui/icons-material/Publish";

import { Container } from "./Container";
import { PAGE_URL } from "@/shared/configs/path";

export const SoundButton = ({
  url,
  color,
}: {
  url: string;
  color?: string;
}) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const playAudio = () => {
    audioRef.current!.play();
  };

  return (
    <Button style={color ? { background: color } : undefined}>
      <SoundIcon onClick={playAudio} />
      <audio src={url} ref={audioRef} />
    </Button>
  );
};

export const SubmitButton = ({
  onClick,
  color,
}: {
  onClick: any;
  color?: string;
}) => (
  <LargeButton
    onClick={onClick}
    style={
      color ? { background: color, border: `3px ${color} solid` } : undefined
    }
  >
    <SubmitIcon>시험 결과 확인하기!</SubmitIcon>
  </LargeButton>
);

/* export const SaveButton = ({
  onClick,
  color,
}: {
  onClick: any;
  color?: string;
}) => {
  const [click, setClick] = useState(false);

  return (
    <Button
      onClick={() => {
        setClick(true);
        onClick();
      }}
      style={color ? { background: color } : undefined}
    >
      {click ? <SaveCheckIcon /> : <SaveIcon />}
    </Button>
  );
}; */

export const SaveButton = ({
  onClick,
  color,
}: {
  onClick: any;
  color?: string;
}) => {
  return (
    <Button onClick={onClick} style={color ? { background: color } : undefined}>
      <SaveIcon />
    </Button>
  );
};

export const SaveCheckButton = ({
  onClick,
  color,
}: {
  onClick: any;
  color?: string;
}) => {
  return (
    <Button onClick={onClick} style={color ? { background: color } : undefined}>
      <SaveCheckIcon />
    </Button>
  );
};

export const StartRecordButton = ({
  onClick,
  color,
}: {
  onClick: any;
  color?: string;
}) => (
  <Button onMouseUp={onClick} style={color ? { background: color } : undefined}>
    <StartRecordIcon />
  </Button>
);

export const StopRecordButton = ({
  onClick,
  color,
}: {
  onClick: any;
  color?: string;
}) => (
  <Button onMouseUp={onClick} style={color ? { background: color } : undefined}>
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

export const DeleteButton = ({ onClick }: { onClick: any }) => {
  return (
    <WhiteButton onClick={onClick}>
      <DeleteIcon />
    </WhiteButton>
  );
};

const Button = styled(Container)`
  background-color: #3232ff;

  width: 110px;
  height: 110px;

  border-radius: 5px;
  margin-bottom: 16px;

  box-shadow: 0px 8px 4px 0 black;

  &:active {
    box-shadow: 0 0 0 0 black;
    margin-bottom: 8px;
    margin-top: 8px;
  }
`;

const WhiteButton = styled(Container)`
  background-color: white;

  width: 110px;
  height: 110px;

  border-radius: 5px;
  margin: 30px 16px 0px 16px;

  box-shadow: 6px 8px 2px 0 black;

  font-size: 75px;
  font-weight: bold;

  &:active {
    box-shadow: 0 0 0 0 black;
    margin: 32px 16px -2px 16px;
  }
`;

const LargeButton = styled(Button)`
  background-color: #0000cd;

  width: 750px;

  border: 3px #0000cd solid;

  margin-bottom: 32px;

  &:active {
    box-shadow: 0 0 0 0 black;
    margin-bottom: 30px;
    margin-top: 2px;
  }
`;

const DeleteIcon = styled(ArrowBackIcon)`
  color: red;
  font-size: 75px;
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

const SubmitIcon = styled.div`
  color: white;
  font-size: 50px;
  font-weight: bold;
`;

const SaveIcon = styled(PublishIcon)`
  color: white;
  font-size: 100px;
`;

const SaveCheckIcon = styled(CheckIcon)`
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
