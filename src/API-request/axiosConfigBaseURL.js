import axios from "axios";

export const internalRequestAxios = axios.create({
  baseURL: "https://meetroom.speakatalka.com/api",
  withCredentials: true,
});
