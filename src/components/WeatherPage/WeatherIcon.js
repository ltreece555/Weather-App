import React from "react";
import { useStyle } from "@material-ui/core";

const WeatherIcon = ({ text, isDayTime, variant }) => {
  var icon = "";
  if (isDayTime) {
    switch (text) {
      case "Sunny":
        icon = `./images/Icons/01-s.png`;
        break;
      case "Mostly sunny":
        icon = `./images/Icons/02-s.png`;
        break;
      case "Partly sunny":
        icon = `./images/Icons/03-s.png`;
        break;
      case "Intermittent clouds":
        icon = `./images/Icons/04-s.png`;
        break;
      case "Hazy sunshine":
        icon = `./images/Icons/05-s.png`;
        break;
      case "Mostly cloudy":
        icon = `./images/Icons/06-s.png`;
        break;
      case "Mostly cloudy w/ showers":
        icon = `./images/Icons/13-s.png`;
        break;
      case "Partly sunny w/ showers":
        icon = `./images/Icons/14-s.png`;
        break;
      case "Mostly cloudy w/ t-Storms":
        icon = `./images/Icons/16-s.png`;
        break;
      case "Partly sunny w/ t-Storms":
        icon = `./images/Icons/17-s.png`;
        break;
      case "Mostly cloudy w/ flurries":
        icon = `./images/Icons/20-s.png`;
        break;
      case "Partly sunny w/ flurries":
        icon = `./images/Icons/21-s.png`;
        break;
      case "Mostly cloudy w/ snow":
        icon = `./images/Icons/23-s.png`;
        break;
      default:
        icon = `./images/Icons/01-s.png`;
        break;
    }
  } else {
    switch (text) {
      case "Cloudy":
        icon = `./images/Icons/07-s.png`;
        break;
      case "Dreary (Overcast)":
        icon = `./images/Icons/08-s.png`;
        break;
      case "Fog":
        icon = `./images/Icons/11-s.png`;
        break;
      case "Showers":
        icon = `./images/Icons/12-s.png`;
        break;
      case "T-storms":
        icon = `./images/Icons/15-s.png`;
        break;
      case "Rain":
        icon = `./images/Icons/18-s.png`;
        break;
      case "Flurries":
        icon = `./images/Icons/19-s.png`;
        break;
      case "Snow":
        icon = `./images/Icons/22-s.png`;
        break;
      case "Ice":
        icon = `./images/Icons/24-s.png`;
        break;
      case "Sleet":
        icon = `./images/Icons/25-s.png`;
        break;
      case "Freezing rain":
        icon = `./images/Icons/26-s.png`;
        break;
      case "Rain and snow":
        icon = `./images/Icons/29-s.png`;
        break;
      case "Hot":
        icon = `./images/Icons/30-s.png`;
        break;
      case "Cold":
        icon = `./images/Icons/31-s.png`;
        break;
      case "Windy":
        icon = `./images/Icons/32-s.png`;
        break;
      case "Clear":
        icon = `./images/Icons/33-s.png`;
        break;
      case "Mostly clear":
        icon = `./images/Icons/34-s.png`;
        break;
      case "Partly cloudy":
        icon = `./images/Icons/35-s.png`;
        break;
      case "Intermittent clouds":
        icon = `./images/Icons/36-s.png`;
        break;
      case "Hazy moonlight":
        icon = `./images/Icons/37-s.png`;
        break;
      case "Mostly cloudy":
        icon = `./images/Icons/38-s.png`;
        break;
      case "Partly cloudy w/ showers":
        icon = `./images/Icons/39-s.png`;
        break;
      case "Mostly cloudy w/ showers":
        icon = `./images/Icons/40-s.png`;
        break;
      case "Partly cloudy w/ t-Storms":
        icon = `./images/Icons/41-s.png`;
        break;
      case "Mostly cloudy w/ t-Storms":
        icon = `./images/Icons/42-s.png`;
        break;
      case "Mostly cloudy w/ flurries":
        icon = `./images/Icons/43-s.png`;
        break;
      case "Mostly cloudy w/ snow":
        icon = `./images/Icons/44-s.png`;
        break;
      default:
        icon = `./images/Icons/33-s.png`;
        break;
    }
  }

  if (variant === "lg") {
    return (
      <img style={{ width: "250px", height: "150px" }} src={icon} alt="icon" />
    );
  } else {
    return <img src={icon} />;
  }
};

export default WeatherIcon;
