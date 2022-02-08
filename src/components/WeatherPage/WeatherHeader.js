import React from "react";
import { Container, Typography } from "@material-ui/core";
import WeatherIcon from "./WeatherIcon";

const WeatherHeader = ({ location, description, isDayTime, temperature }) => {
  return (
    <Container align="center">
      <Typography variant="h4">{location}</Typography>
      <Typography variant="h5">{description}</Typography>
      <Typography variant="h1">{temperature}&deg;</Typography>
    </Container>
  );
};

export default WeatherHeader;
