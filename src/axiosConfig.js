import axios from "axios";

export const internalRequesAxios = axios.create({
  baseURL: "https://meetroom.speakatalka.com/api",
  withCredentials: true,
});
