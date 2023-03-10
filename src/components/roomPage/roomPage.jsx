import React, { useState } from "react";
import Button from "../usefulElements/button/button";
import classes from "./roomPage.module.less";
import NotificationTemplate from "../usefulElements/notificationTemplate/notificationTemplate";
import Form from "../usefulElements/form/form";
import Textarea from "../usefulElements/form/textarea";

// библиотека Rsuite для выбора даты и времени
import { DateRangePicker } from "rsuite";
import "rsuite/styles/index.less";
import "./customDateRangePicker.module.less";

function RoomPage() {
  const [meetingName, setMeetingName] = useState("");
  const [meetingDescription, setMeetingDescription] = useState("");
  const [meetingZoomlink, setMeetingZoomlink] = useState("");

  const [chosenDate, setСhosenDate] = useState([
    new Date("2017-02-01 01:00:00"),
    new Date("2017-02-02 14:00:00"),
  ]);
  const [chosenTime, setСhosenTime] = useState([
    new Date("2017-02-01 01:00:00"),
    new Date("2017-02-02 14:00:00"),
  ]);

  return (
    <div className={classes.roomPage}>
      <div className={classes.headlineRoomPage}>
        <NotificationTemplate fontsize="45" text="Создание комнаты" />
      </div>
      <div className={classes.containerForm}>
        <Form headline="1. Заполните форму встречи">
          {!meetingName && (
            <div>поле нейм не должно быть пустым! недоделанный код.</div>
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
          <p>Выберите удобную дату(даты)</p>
          <DateRangePicker
            value={chosenDate}
            onChange={setСhosenDate}
            placeholder="Календарь"
            format="yyyy-MM-dd"
            defaultCalendarValue={[
              new Date("2022-02-01"),
              new Date("2022-05-01"),
            ]}
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
          {/* {valueСhosenDate[0].toString()}-{valueСhosenDate[1].toString()} */}
        </Form>
      </div>
      <div className={classes.buttonShell}>
        <Button
          buttonName="3. Создать комнату"
          link="/created-room"
          styleButton={classes.richButton}
        />
      </div>
    </div>
  );
}
export default RoomPage;
