import api from "./api";

const WEATHER = "weather";

export const weatherApi = {
  getWeather: ({ lon, appid, lat }) =>
    api.get(`${WEATHER}?lon=${lon}&appid=${appid}&lat=${lat}&units=metric`),
};
