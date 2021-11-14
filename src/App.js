import "./App.css";
import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage, WeatherPage } from "./pages";
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
    <Router>
      <Fragment>
        <Routes>
          <Route exact path="/">
            <Route exact path="/" element={<HomePage lat={lat} lon={lon} />} />
          </Route>
          <Route exact path="/weather">
            <Route exact path="/weather" element={<WeatherPage />} />
          </Route>
        </Routes>
      </Fragment>
    </Router>
  );
}

export default App;
