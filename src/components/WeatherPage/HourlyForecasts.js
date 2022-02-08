import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import Hour from "./Hour";
import WeatherIcon from "./WeatherIcon";
import styles from "./hideHorizontalScrollbar.css";

const HourlyForecasts = ({ data }) => {
  return (
    <>
      <Grid container>
        {data.map((hour) => {
          return (
            <Grid key={hour.EpochDateTime} item xs={2} md={3}>
              <Grid container direction="column" alignItems="center">
                <Grid item style={{ marginTop: "15px" }}>
                  <Hour datetime={hour.DateTime} />
                </Grid>
                <Grid item>
                  <WeatherIcon
                    text={hour.IconPhrase}
                    isDayTime={hour.IsDaylight}
                  />
                </Grid>
                <Grid item style={{ marginBottom: "15px" }}>
                  {hour.Temperature.Value}
                </Grid>
              </Grid>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default HourlyForecasts;
