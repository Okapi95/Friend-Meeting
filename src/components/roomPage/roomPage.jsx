import React from "react";
import Button from "../usefulElements/button/button";
import classes from "./roomPage.module.less";
import Form from "../usefulElements/form/form";
import Input from "../usefulElements/form/input";
import Textarea from "../usefulElements/form/textarea";
import CreatedRoomMessage from "./createdRoomMessage/createdRoomMessage";

// библиотека Rsuite для выбора даты и времени
import { DateRangePicker } from "rsuite";
import "rsuite/styles/index.less";
import "./customDateRangePicker.module.less";

function RoomPage(props) {
  return (
    <div className={classes.roomPage}>
      <div className={classes.containerForm}>
        <Form headline="1. Заполните форму встречи">
          <Input
            name="meetingname"
            type="text"
            placeHolder="Назовите встречу"
            required={true}
            autofocus={true}
          />
          <Input
            name="email"
            type="email"
            placeHolder="Email"
            required={true}
            autofocus={false}
          />
          <Textarea
            placeHolder="Опишите вашу встречу"
            name="meeting-description"
          />
        </Form>

        <Form headline="2. Выберите дату и время">
          <p>Выберите удобную дату(даты)</p>
          <DateRangePicker
            placeholder="Календарь"
            format="yyyy-MM-dd"
            defaultCalendarValue={[
              new Date("2022-02-01 00:00:00"),
              new Date("2022-05-01 23:59:59"),
            ]}
            placement="leftStart"
          />
          <p>Выберите подходящий интервал времени</p>
          <DateRangePicker
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
      <div className={classes.buttonShell}>
        <Button
          buttonName="Создать комнату"
          link=""
          styleButton={classes.richButton}
        />
      </div>
      <CreatedRoomMessage />
    </div>
  );
}
export default RoomPage;
