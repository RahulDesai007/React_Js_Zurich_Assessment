import React from 'react';
import { VictoryChart, VictoryLine, VictoryVoronoiContainer, VictoryTooltip } from 'victory';
import Typography from '@mui/material/Typography';
const LineChart = () => {
  return <div>
  <Typography>Sample Line Chart</Typography>
  <VictoryChart
  containerComponent={
    <VictoryVoronoiContainer voronoiDimension="x"
      labels={({ datum }) => `y: ${datum.y}`}
      labelComponent={<VictoryTooltip cornerRadius={0} flyoutStyle={{fill: "white"}}/>}
    />
  }
  domainPadding={{ x: 20 }}
  width={440}
  height={250}
>
  <VictoryLine
    
    barRatio={0.8}
   
    data={[
    { x: "D1", y: 35 },
    { x: "D2", y: 40 },
    { x: "D3", y: 195 },
    { x: "D4", y: 75 },
    { x: "D5", y: 48 },
    { x: "D6", y: 25 }
  ]}
  />
</VictoryChart></div>;
};
export default LineChart;
