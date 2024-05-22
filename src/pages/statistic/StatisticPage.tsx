import { useEffect } from "react";
import { LineChart, Line, XAxis, YAxis } from "recharts";
import styled from "@emotion/styled";

import { Background, TTSText, HomeButton, GraphContainer } from "@/entities";

import { useUserState } from "@/shared";

const StatisticPage = () => {
  const statisticData = useUserState((state) => state.statisticData);
  const setStatisticData = useUserState((state) => state.setStatisticData);
  const name = useUserState((state) => state.name);

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
          text={`${name}의 성장 그래프`}
          style={{
            fontSize: "40px",
            fontWeight: "bold",
            color: "#6565af",
            marginBottom: "5px",
          }}
        />
        <TTSText
          text={`문제 풀이 결과를 기반으로 하루의 향상 정도를 수치화했습니다.`}
          style={{
            fontSize: "18px",
            color: "#6565afc3",
          }}
        />
        <Chart width={700} height={300} data={statisticData}>
          <Line type="monotone" dataKey="score" stroke="#0000cd" />
          <XAxis dataKey="day" />
          <YAxis dataKey="score" />
        </Chart>
      </GraphContainer>
    </>
  );
};

const Chart = styled(LineChart)`
  margin-top: 15px;
  margin-right: 50px;
`;

export default StatisticPage;
