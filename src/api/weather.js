import api from "./api";

const WEATHER = "onecall";

export const weatherApi = {
  getWeather: ({ params }) => api.get(`${WEATHER}`, { params }),
};
