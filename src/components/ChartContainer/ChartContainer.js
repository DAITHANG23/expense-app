import { useEffect } from "react";

import "./ChartContainer.css";
import ChartItem from "../ChartItem/ChartItem";

const ChartContainer = ({ filtered }) => {
  const expenseCharts = [
    { month: "Jan", value: 0 },
    { month: "Feb", value: 0 },
    { month: "Mar", value: 0 },
    { month: "Apr", value: 0 },
    { month: "May", value: 0 },
    { month: "Jun", value: 0 },
    { month: "Jul", value: 0 },
    { month: "Aug", value: 0 },
    { month: "Sep", value: 0 },
    { month: "Oct", value: 0 },
    { month: "Nov", value: 0 },
    { month: "Dec", value: 0 },
  ];

  for (const expense of filtered) {
    const expenseMonth = new Date(expense.createTime).getMonth(); // starting at 0 => January => 0

    expenseCharts[expenseMonth].value += expense.amount;
  }

  const dataPointValues = expenseCharts.map((item) => item.value);
  console.log(dataPointValues);
  const totalMaximum = Math.max(...dataPointValues);

  const chartItem = expenseCharts?.map((chart) => {
    const { month, value } = chart;
    return (
      <div>
        <ChartItem month={month} value={value} totalMaximum={totalMaximum} />
      </div>
    );
  });
  return <div className="chart-container">{chartItem}</div>;
};

export default ChartContainer;
