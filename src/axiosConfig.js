import axios from "axios";

export const instance = axios.create({
    baseURL: "https://meetroom.speakatalka.com/api",
    withCredentials: true
})
