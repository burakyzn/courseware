import axios from "axios";
import config from "./config";

const api = axios.create({
  baseURL: `${config.API_BASE_URL}${config.API_VERSION}`
})

export default api;