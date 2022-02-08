import React from "react";
import { Grid } from "@material-ui/core";

const InfoPair = ({ first, second }) => {
  return (
    <Grid container justify="flex-end">
      <Grid item>{first}</Grid>
      <Grid item style={{ marginLeft: "15px", color: "lightgrey" }}>
        {second}
      </Grid>
    </Grid>
  );
};

export default InfoPair;
