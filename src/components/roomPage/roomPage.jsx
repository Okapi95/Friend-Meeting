import React from "react";
import classes from "./roomPage.module.less";

import Form from "../usefulElements/usefulElements__form/usefulElements__form";
import Textarea from "../usefulElements/usefulElements__form/textarea";
import Button from "../usefulElements/button/button";
import NotificationTemplate from "../usefulElements/usefulElements__notificationTemplate/usefulElements__notificationTemplate";
import SimpleTextBlock from "../usefulElements/simpleTextBlock/simpleTextBlock";

import { Navigate } from "react-router-dom";
import { DateRangePicker } from "rsuite";

function RoomPage({
  setMeetingName,
  setMeetingDescription,
  setMeetingZoomlink,
  setСhosenDate,
  setСhosenTime,
  creationMeetingHandler,
  meetingName,
  meetingDescription,
  meetingZoomlink,
  isRoomCreated,
  chosenDate,
  chosenTime,
}) {
  return (
    <div className={classes.roomPage}>
      <div className={classes.roomPage__headline}>
        <NotificationTemplate fontsize="45" text="Создание комнаты" />
      </div>
      <div className={classes.roomPage__container}>
        <Form headline="1. Заполните форму встречи">
          {!meetingName && (
            <SimpleTextBlock>
              Обязательно впишите название встречи
            </SimpleTextBlock>
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
          <SimpleTextBlock>Выберите подходящий интервал дат</SimpleTextBlock>
          <DateRangePicker
            value={chosenDate}
            onChange={setСhosenDate}
            placeholder="Календарь"
            format="yyyy-MM-dd"
            defaultCalendarValue={[new Date(), new Date()]}
            placement="leftStart"
          />
          <SimpleTextBlock>
            Выберите подходящий интервал времени
          </SimpleTextBlock>
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
