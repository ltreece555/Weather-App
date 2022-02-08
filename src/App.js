import React from "react";
import WeatherPage from "./components/WeatherPage/component";
import SearchAppBar from "./components/WeatherPage/SearchAppBar";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  div: {
    fontFamily: "Arial",
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div style={{ color: "white", height: "100%" }}>
        {/* <SearchAppBar loc="Jonesboro" api="ZWQhLcTwLyM8XcnmGuZ0cCXhDecP2h9G" /> */}
        <WeatherPage location="Jonesboro" key="326860" />
      </div>
    </ThemeProvider>
  );
};

export default App;
