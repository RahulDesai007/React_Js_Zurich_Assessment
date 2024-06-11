import React from 'react';
import { VictoryChart, VictoryBar } from 'victory';
import Typography from '@mui/material/Typography';
const BarChart = () => {
  return <div>
  <Typography>Sample Bar Chart</Typography>
  <VictoryChart
 
  domainPadding={{ x: 35 }}
  width={1740}
  height={400}
>
  <VictoryBar
    
    barRatio={0.3}
    style={{
      data: { fill: "#c43a31"    }
    }}
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
export default BarChart;
