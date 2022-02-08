import React from "react";

const getWeekDay = (datetime) => {
  let dt = new Date(datetime);
  let i = dt.getDay();
  let day = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return day[i];
};

const WeekDay = ({ datetime }) => {
  let answer = getWeekDay(datetime);
  return <>{answer}</>;
};

export { WeekDay, getWeekDay };
