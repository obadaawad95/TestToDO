import "./App.css";
import React from "react";

import { HomePage } from "./pages";
import { Paper } from "@mui/material";
// import TodayIcon from "@material-ui/icons/Today";

function App() {
  const [lat, setLat] = React.useState();
  const [lon, setLon] = React.useState();
  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
      setLat(position.coords.latitude);
      setLon(position.coords.longitude);
    });
  }, []);
  return (
    <Paper className="App">
      <HomePage lat={lat} lon={lon} />
    </Paper>
  );
}

export default App;
