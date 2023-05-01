import React, { useState } from "react";
import Button from "../usefulElements/button/button";
import classes from "./roomPage.module.less";
import NotificationTemplate from "../usefulElements/usefulElements__notificationTemplate/usefulElements__notificationTemplate";
import Form from "../usefulElements/usefulElements__form/usefulElements__form";
import Textarea from "../usefulElements/usefulElements__form/textarea";
import {
  toRequiredFormatDate,
  sendCreateMeetingRequest,
} from "./functionsForRoomPage";
import { controlAuthorization } from "../../API-request/controlAuthorization";

import { Navigate } from "react-router-dom";

// библиотека Rsuite для выбора даты и времени
import { DateRangePicker } from "rsuite";
import "rsuite/styles/index.less";
import "./customDateRangePicker.module.less";
import { useDispatch, useSelector } from "react-redux";

function RoomPage() {
  const [meetingName, setMeetingName] = useState("");
  const [meetingDescription, setMeetingDescription] = useState("");
  const [meetingZoomlink, setMeetingZoomlink] = useState("");

  const [chosenDate, setСhosenDate] = useState([new Date(), new Date()]);
  const [chosenTime, setСhosenTime] = useState([new Date(), new Date()]);
  const [isRoomCreated, setIsRoomCreated] = useState(false);

  const dispatch = useDispatch();
  const authStatus = useSelector((state) => state.authStatus);

  const creationMeetingHandler = async () => {
    let errorAuthorization = await controlAuthorization();
    console.log(`сначала было такое состояние:  ${authStatus}`);
    console.log(
      `вот что в начале записалось в переменную errorAuthorization:  ${errorAuthorization}`
    );
    if (!errorAuthorization) {
      dispatch({
        type: "authentication/changeAuthenticatedStatusToFalse",
      });
      console.log(
        `сработало условие if, так как в переменную записалось значение ${errorAuthorization}, должен задиспачиться экшен со сменой состояния на false`
      );
    }
    await sendCreateMeetingRequest(
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
    <div className={classes.roomPage}>
      <div className={classes.roomPage__headline}>
        <NotificationTemplate fontsize="45" text="Создание комнаты" />
      </div>
      <div className={classes.roomPage__container}>
        <Form headline="1. Заполните форму встречи">
          {!meetingName && (
            <div>поле нейм не должно быть пустым! дописать код.</div>
          )}
          <Textarea
            value={meetingName}
            onChange={(event) => {
              setMeetingName(event.target.value);
            }}
            placeHolder="Название встречи"
            name="meeting-name"
            autofocus={true}
            rows={1}
          />
          <Textarea
            value={meetingDescription}
            onChange={(event) => {
              setMeetingDescription(event.target.value);
            }}
            placeHolder="Опишите вашу встречу"
            name="meeting-description"
            rows={1}
          />
          <Textarea
            value={meetingZoomlink}
            onChange={(event) => {
              setMeetingZoomlink(event.target.value);
            }}
            placeHolder="Сюда нужно вставить ссылку на Zoom-конференцию"
            name="meeting-zoomlink"
            rows={2}
          />
        </Form>

        <Form headline="2. Выберите дату и время">
          <p>Выберите подходящий интервал дат</p>
          <DateRangePicker
            value={chosenDate}
            onChange={setСhosenDate}
            placeholder="Календарь"
            format="yyyy-MM-dd"
            defaultCalendarValue={[new Date(), new Date()]}
            placement="leftStart"
          />
          <p>Выберите подходящий интервал времени</p>
          <DateRangePicker
            value={chosenTime}
            onChange={setСhosenTime}
            placeholder="Время"
            format="HH:mm"
            ranges={[]}
            defaultCalendarValue={[
              new Date("2022-02-01 00:00:00"),
              new Date("2022-05-01 23:59:00"),
            ]}
            placement="leftStart"
          />
        </Form>
      </div>
      <div className={classes.roomPage__buttonShell}>
        <Button
          styleButton={classes.button_theme_rich}
          onClick={() => creationMeetingHandler()}
        >
          3. Создать комнату
        </Button>
        {isRoomCreated && <Navigate to="/created-room" replace={true} />}
      </div>
    </div>
  );
}
export default RoomPage;
