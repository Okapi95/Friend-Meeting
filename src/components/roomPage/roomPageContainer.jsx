import React, { useState } from "react";
import RoomPage from "./roomPage";

import {
  toRequiredFormatDate,
  sendCreateMeetingRequest,
} from "./functionsForRoomPage/functionsForRoomPage";
import { controlAuthorization } from "../../API-request/controlAuthorization";
import { authorizationSlice } from "../../store/features/authorizationSlice";
import { useDispatch, useSelector } from "react-redux";

// библиотека Rsuite для выбора даты и времени

import "rsuite/styles/index.less";
import "./customDateRangePicker.module.less";

function RoomPageContainer() {
  const [meetingName, setMeetingName] = useState("");
  const [meetingDescription, setMeetingDescription] = useState("");
  const [meetingZoomlink, setMeetingZoomlink] = useState("");

  const [chosenDate, setСhosenDate] = useState([new Date(), new Date()]);
  const [chosenTime, setСhosenTime] = useState([new Date(), new Date()]);
  const [isRoomCreated, setIsRoomCreated] = useState(false);

  const { changeAuthStatusToFalse } = authorizationSlice.actions;
  const dispatch = useDispatch();
  const authStatus = useSelector((state) => state.authStatus);

  const creationMeetingHandler = async () => {
    let isStatusAuthorization = await controlAuthorization();
    console.log(`сначала было такое состояние:  ${authStatus}`);
    console.log(
      `вот что в начале записалось в переменную errorAuthorization:  ${isStatusAuthorization}`
    );
    if (!isStatusAuthorization) {
      dispatch(changeAuthStatusToFalse());
      console.log(
        `сработало условие if, так как в переменную записалось значение ${isStatusAuthorization}, должен задиспачиться экшен со сменой состояния на false`
      );
    }
    sendCreateMeetingRequest(
      meetingName,
      meetingDescription,
      meetingZoomlink,
      setIsRoomCreated,
      toRequiredFormatDate(
        chosenDate[0],
        chosenDate[1],
        chosenTime[0],
        chosenTime[1]
      )
    );
    console.log(
      `по итогу клика на создание комнаты такое сейчас состояние:  ${authStatus}`
    );
  };

  return (
    <RoomPage
      setMeetingName={setMeetingName}
      setMeetingDescription={setMeetingDescription}
      setMeetingZoomlink={setMeetingZoomlink}
      setСhosenDate={setСhosenDate}
      setСhosenTime={setСhosenTime}
      creationMeetingHandler={creationMeetingHandler}
      meetingName={meetingName}
      meetingDescription={meetingDescription}
      meetingZoomlink={meetingZoomlink}
      isRoomCreated={isRoomCreated}
      chosenDate={chosenDate}
      chosenTime={chosenTime}
    />
  );
}
export default RoomPageContainer;
