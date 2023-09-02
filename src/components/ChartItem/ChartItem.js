import React from "react";
import "./ChartItem.css";
const ChartItem = (props) => {
  const { month, value, totalMaximum } = props;

  let barFillHeight = "0%";

  if (props.totalMaximum > 0) {
    barFillHeight = Math.round((value / totalMaximum) * 100) + "%";
  }
  console.log(barFillHeight);
  return (
    <div className="chart-item">
      <div style={{ position: "relative" }} className="chart-percent">
        <div
          style={{
            height: barFillHeight,
          }}
          className={`${
            barFillHeight >= "100%" ? "chart-percent-item" : "style-chart"
          }`}
        ></div>
      </div>
      <p>{month}</p>
    </div>
  );
};

export default ChartItem;
