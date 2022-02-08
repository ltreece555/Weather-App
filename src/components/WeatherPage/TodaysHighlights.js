import React from "react";
import { Grid } from "@material-ui/core";
import { WeekDay } from "./WeekDay";
import InfoPair from "./InfoPair";

const TodaysHighlights = ({ date, high, low }) => {
  return (
    <>
      <Grid container justify="space-between">
        <Grid item>
          <InfoPair first={<WeekDay datetime={date} />} second={"Today"} />
        </Grid>
        <Grid item>
          <InfoPair first={high} second={low} />
        </Grid>
      </Grid>
    </>
  );
};

export default TodaysHighlights;
