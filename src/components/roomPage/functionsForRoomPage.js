import { internalRequestAxios } from "../../API-request/axiosConfigBaseURL";

const toRequiredFormatDate = (fromDate, toDate, fromTime, toTime) => {
  let dateFrom;
  let dateTo;

  let from = new Date(fromDate);
  from.setHours(fromTime.getHours());
  from.setMinutes(fromTime.getMinutes());
  console.log(from);
  dateFrom = from.toISOString();
  console.log(`это дата и время С:  ${dateFrom}`);

  let to = new Date(toDate);
  to.setHours(toTime.getHours());
  to.setMinutes(toTime.getMinutes());
  dateTo = to.toISOString();
  console.log(`это дата и время ДО:  ${dateTo}`);

  return [{ from: dateFrom, to: dateTo }];
};

const sendCreateMeetingRequest = async (
  meetingName,
  meetingDescription,
  meetingZoomlink,
  changeStateIsRoomCreated,
  toRequiredFormatDate
) => {
  await internalRequestAxios
    .post("/meetings", {
      name: meetingName,
      description: meetingDescription,
      meetingLink: meetingZoomlink,
      dates: toRequiredFormatDate,
    })
    .then((response) => {
      changeStateIsRoomCreated(true);
      console.log(
        `встреча создалась, вот такой response пришёл: ---> ${response}`
      );
      return true;
    })
    .catch((error) => {
      console.log(
        `встреча НЕ создалась, вот такой error пришёл: ---> ${error}`
      );
      return false;
    });
};

export { toRequiredFormatDate, sendCreateMeetingRequest };
