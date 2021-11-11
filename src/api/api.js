import { create } from "apisauce";
import { API_BASE_URL } from "../constants";

const api = create({
  baseURL: API_BASE_URL,
});

export default api;
