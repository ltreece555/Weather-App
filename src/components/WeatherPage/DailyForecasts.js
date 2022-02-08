import React from "react";
import { Grid } from "@material-ui/core";
import { WeekDay } from "./WeekDay";
import WeatherIcon from "./WeatherIcon";
import InfoPair from "./InfoPair";

const DailyForecasts = ({ data }) => {
  return (
    <>
      <Grid container direction="column">
        {data.slice(1).map((day) => {
          return (
            <Grid item key={day.EpochDate}>
              <Grid container>
                <Grid item xs={2} align="left">
                  <WeekDay datetime={day.Date} />
                </Grid>
                <Grid item xs={4} align="center">
                  <WeatherIcon text={day.Day.IconPhrase} isDayTime={true} />
                </Grid>
                <Grid item xs={4} align="center">
                  <WeatherIcon text={day.Night.IconPhrase} isDayTime={false} />
                </Grid>
                <Grid item xs={2} align="right">
                  <InfoPair
                    first={day.Temperature.Maximum.Value}
                    second={day.Temperature.Minimum.Value}
                  />
                </Grid>
              </Grid>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default DailyForecasts;
