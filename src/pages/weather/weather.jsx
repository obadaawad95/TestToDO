import React from "react";
import { Box, Icon, Typography } from "@mui/material";
import BG from "../../assets/images/weatherBG.jpg";
import { selectWeather } from "../../store/weather";
import CloudIcon from "@mui/icons-material/Cloud";
import { useSelector } from "react-redux";
import tron from "reactotron-react-js";
export const WeatherPage = () => {
  const weatherInfos = useSelector(selectWeather);
  tron.logImportant("dddd", weatherInfos);
  return (
    <Box
      sx={{
        backgroundImage: `url(${BG})`,
        backgroundRepeat: "no-repeat",
        backgroundColor: (t) =>
          t.palette.mode === "light" ? t.palette.grey[50] : t.palette.grey[900],
        backgroundSize: "cover",
        width: "100%",
        flex: 1,
        height: 900,
        display: "flex",
        backgroundPosition: "center",
        alignItems: "center",
      }}
    >
      <div>
        <Box
          sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
        >
          <CloudIcon color="#FFF" sx={{ paddingLeft: 5, paddingRight: 2 }} />
          <Typography
            variant="h4"
            sx={{ color: "#fff", fontFamily: "cursive", fontWeight: "Bold" }}
          >
            {weatherInfos?.main?.temp}
          </Typography>
        </Box>
        <Box
          sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
        >
          <CloudIcon color="#FFF" sx={{ paddingLeft: 5, paddingRight: 2 }} />
          <Typography
            variant="h4"
            sx={{ color: "#fff", fontFamily: "cursive", fontWeight: "Bold" }}
          >
            {weatherInfos?.weather[0]?.main}
          </Typography>
        </Box>
        <Box
          sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
        >
          <Typography
            variant="h4"
            sx={{ color: "#fff", fontFamily: "cursive", fontWeight: "Bold" }}
          >
            Wind Speed :
          </Typography>
          <Typography
            variant="h4"
            sx={{ color: "#fff", fontFamily: "cursive", fontWeight: "Bold" }}
          >
            {weatherInfos?.wind?.speed}
          </Typography>
        </Box>
      </div>
    </Box>
  );
};
