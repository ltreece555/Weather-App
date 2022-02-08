import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { defaults } from "chart.js";
import { getWeekDay } from "./WeekDay";

const Chart = ({ dailyForecasts }) => {
  const [chartData, setChartData] = useState({});
  const [weekDays, setWeekDays] = useState([]);
  const [tempHigh, setTempHigh] = useState([]);
  const [tempLow, setTempLow] = useState([]);

  useEffect(() => {
    dailyForecasts.map((day) => {
      setWeekDays([...weekDays, getWeekDay(day.Date)]);
      setTempHigh([...tempHigh, day.Temperature.Maximum.Value]);
      setTempLow([...tempLow, day.Temperature.Minimum.Value]);
      weekDays.push(getWeekDay(day.Date));
      tempHigh.push(day.Temperature.Maximum.Value);
      tempLow.push(day.Temperature.Minimum.Value);
    });

    setChartData({
      labels: weekDays,
      datasets: [
        {
          label: "Low",
          data: tempLow,
          backgroundColor: "rgb(0,0,50,.5)",
        },
        {
          label: "High",
          data: tempHigh,
          backgroundColor: "rgb(50,0,0,.5)",
        },
      ],
    });
  }, []);

  defaults.global.defaultFontColor = "white";

  return (
    <div className="chart">
      <Line data={chartData} />
    </div>
  );
};

export default Chart;
