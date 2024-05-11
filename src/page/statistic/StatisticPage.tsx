import { LineChart, Line, XAxis, YAxis } from "recharts";
import styled from "@emotion/styled";

import { Background } from "@/component/Background";
import TTSText from "@/component/TTSText";
import { HomeButton } from "@/component/Button";
import { GraphContainer } from "@/component/Container";
import { useEffect } from "react";

import useUserState from "@/store/userStore";

const StatisticPage = () => {
  const statisticData = useUserState((state) => state.statisticData);
  const setStatisticData = useUserState((state) => state.setStatisticData);

  useEffect(() => {
    setStatisticData([
      { day: "5월 5일", score: 10 },
      { day: "5월 6일", score: 20 },
      { day: "5월 7일", score: 29 },
      { day: "5월 8일", score: 10 },
      { day: "5월 9일", score: 10 },
      { day: "5월 10일", score: 20 },
      { day: "5월 11일", score: 29 },
    ]);
  }, []);

  return (
    <>
      <Background src="/img/statistic_background.png" alt="background" />
      <HomeButton />
      <GraphContainer>
        <TTSText
          text={""}
          style={{
            fontSize: "33px",
            fontWeight: "bold",
            color: "#0000cd",
            marginBottom: "12px",
          }}
        />
        <Chart width={700} height={300} data={statisticData}>
          <Line type="monotone" dataKey="score" stroke="#8884d8" />
          <XAxis dataKey="day" />
          <YAxis dataKey="score" />
        </Chart>
      </GraphContainer>
    </>
  );
};

const Chart = styled(LineChart)`
  margin-right: 60px;
  margin-top: 10px;
`;

export default StatisticPage;
