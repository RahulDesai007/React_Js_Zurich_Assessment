import React from 'react';
import { 
    VictoryPie } 
    from 'victory';
import Typography from '@mui/material/Typography';
const PieChart = () => {
  return <div>
  <Typography>Sample Pie Chart</Typography>
  <VictoryPie

  width={440}
  height={250}
  animate={{
  duration: 2000,
  easing: "bounce",
  onExit: {
              duration: 500,
              before: () => ({
                _y: 0,
                fill: "orange",
                label: "BYE"
              })
            }
}}
    colorScale={["rgba(255, 99, 132, 0.8)",
          "rgba(54, 162, 235, 0.8)",
          "rgba(255, 206, 86, 0.8)",
          "rgba(75, 192, 192, 0.8)",
          "rgba(153, 102, 255, 0.8)",
          "rgba(255, 159, 64, 0.8)" ]}
  data={[
    { x: "D1", y: 35 },
    { x: "D2", y: 40 },
    { x: "D3", y: 195 },
    { x: "D4", y: 75 },
    { x: "D5", y: 48 },
    { x: "D6", y: 25 }
  ]}
  events={[{
      target: "data",
      eventHandlers: {
        onMouseOver: () => {
          return [
            {
              target: "data",
              mutation: () => ({style: {fill: "red", width: 30}})
            }, {
              target: "labels",
              mutation: () => ({ active: true })
            }
          ];
        },
        onMouseOut: () => {
          return [
            {
              target: "data",
              mutation: () => {}
            }, {
              target: "labels",
              mutation: () => ({ active: false })
            }
          ];
        }
      }
    }]}
/></div>;
};
export default PieChart;
