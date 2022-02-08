import React, { useEffect, useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { fade, makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import AsyncSelect from "react-select/async";
import makeAnimated from "react-select/animated";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

const animatedComponent = makeAnimated();

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function SearchAppBar(loc, api) {
  const classes = useStyles();
  const [searchData, setSearchData] = useState([]);
  const [location, setLocation] = useState(loc);
  const [apiKey, setApiKey] = useState(api);

  const handleSearchChange = (e) => {
    setLocation(e.target.value);
  };

  useEffect(() => {
    fetch(
      `https://cors-anywhere.herokuapp.com/http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${apiKey}&q=${location}`
    )
      .then((response) => response.json())
      .then((searchData) => setSearchData(searchData));
  });

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            Powered by AccuWeather
          </Typography>
          <Autocomplete
            id="combo-box-demo"
            options={searchData}
            style={{ width: 300 }}
            renderInput={(params) => (
              <TextField {...params} label="Combo box" variant="outlined" />
            )}
            getOptionLabel={(option) => `${option.LocalizedName}`}
            renderOption={(option) => {
              return <h4>{`${option.LocalizedName}`}</h4>;
            }}
            onChange={handleSearchChange}
          />
        </Toolbar>
      </AppBar>
    </div>
  );
}
