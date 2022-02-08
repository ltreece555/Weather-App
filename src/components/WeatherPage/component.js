import React, { useState, useEffect } from "react";
import { Container, Grid, Divider, makeStyles } from "@material-ui/core";
import TemperatureChart from "./TemperatureChart";
import WeatherHeader from "./WeatherHeader";
import HourlyForecasts from "./HourlyForecasts";
import DailyForecasts from "./DailyForecasts";
import TodaysHighlights from "./TodaysHighlights";
import Axios from "axios";

const useStyles = makeStyles((theme) => ({
  divider: {
    backgroundColor: "lightgrey",
    marginTop: "10px",
    marginBottom: "10px",
  },
  weatherBody: {
    paddingTop: "25px",
  },
  weatherSection: {
    paddingLeft: "25px",
    paddingRight: "25px",
  },
}));

const WeatherPage = (location, key) => {
  // init for our state variables
  const [loading, setLoading] = useState(true); // for loading state
  const [Error, setError] = useState(false);
  const [hourlyForecasts, setHourlyForecasts] = useState();
  const [dailyForecasts, setDailyForecasts] = useState();
  const [currentTemp, setCurrentTemp] = useState();
  const [currentDesc, setCurrentDesc] = useState();
  const [isDayTime, setIsDayTime] = useState();
  const [bgImage, setBgImage] = useState();
  const classes = useStyles();

  let locName = "Jonesboro";
  let apiKey = "ZWQhLcTwLyM8XcnmGuZ0cCXhDecP2h9G";
  let locKey = "326860";

  useEffect(() => {
    setBgImage("./images/Backgrounds/clear-sky.jpg");
    setLoading(true);
    async function getWeatherData() {
      Axios.get(
        `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locKey}?apikey=${apiKey}`
      )
        .then((res) => {
          setDailyForecasts(res.data.DailyForecasts);
        })
        .catch((err) => {
          console.log(err);
        });
      Axios.get(
        `http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/${locKey}?apikey=${apiKey}`
      )
        .then((res) => {
          setHourlyForecasts(res.data);
          setCurrentTemp(res.data[0].Temperature.Value);
          setCurrentDesc(res.data[0].IconPhrase);
          setIsDayTime(res.data[0].IsDayLight);
        })
        .catch((err) => {
          console.log(err);
          setError(true);
        });
    }
    getWeatherData();
    setLoading(false);
  }, []);

  if (dailyForecasts && hourlyForecasts) {
    return (
      <div
        style={{
          minHeight: "100vh",
          height: "100%",
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Container className={classes.weatherBody}>
          <Grid container>
            <Grid item xs={12} md={4} className={classes.weatherSection}>
              <WeatherHeader
                location={locName}
                description={currentDesc}
                temperature={currentTemp}
                isDayTime={isDayTime}
              />
              <TodaysHighlights
                date={dailyForecasts[0].Date}
                high={dailyForecasts[0].Temperature.Maximum.Value}
                low={dailyForecasts[0].Temperature.Minimum.Value}
              />
              <Divider className={classes.divider} />
              <HourlyForecasts data={hourlyForecasts} />
            </Grid>
            <Grid item xs={12} md={8} className={classes.weatherSection}>
              <Divider className={classes.divider} />
              <DailyForecasts data={dailyForecasts} />
              <TemperatureChart dailyForecasts={dailyForecasts} />
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  } else {
    return null;
  }
};

export default WeatherPage;
