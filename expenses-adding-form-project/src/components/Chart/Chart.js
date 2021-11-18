import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar/ChartBar";

const Chart = (props) => {
  const { dataPoints } = props;

  const dataPointsValue = dataPoints.map((el) => el.value);
  //console.log(dataPointsValue);
  const totalMax = Math.max(...dataPointsValue);
  return (
    <div className="chart">
      {dataPoints.map((el) => (
        <ChartBar
          key={el.label}
          value={el.value}
          maxValue={totalMax}
          label={el.label}
        />
      ))}
    </div>
  );
};

export default Chart;
