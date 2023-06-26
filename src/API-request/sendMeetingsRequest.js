import { internalRequestAxios } from "./internalRequestAxios";

const sendMeetingsRequest = (setMeetings) => {
  internalRequestAxios
    .get("/meetings")
    .then((response) => {
      return response.data.content;
    })
    .then((array) => {
      console.log(array);
      setMeetings(array);
    })
    .catch(() => {
      console.log("ошибка в запросе на встречи");
    });
};

export { sendMeetingsRequest };
