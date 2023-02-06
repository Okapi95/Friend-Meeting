import React from "react";
import Button from "../usefulElements/button/button";
import classes from "./roomPage.module.less";
import Form from "../usefulElements/form/form";
import Input from "../usefulElements/form/input";
import Textarea from "../usefulElements/form/textarea";
import { DateRangePicker } from "rsuite";
import "rsuite/styles/index.less";

function RoomPage(props) {
  return (
    <div className={classes.roomPage}>
      <Form headline="Заполните форму встречи">
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
      <div className={classes.form__buttonChekin}>
        Выберите удобные даты встречи.
        <div>
          <div className="field">
            <p>Date Time Range</p>
            <DateRangePicker
              format="yyyy-MM-dd HH:mm:ss"
              defaultCalendarValue={[
                new Date("2022-02-01 00:00:00"),
                new Date("2022-05-01 23:59:59"),
              ]}
            />

            <p>Time Range</p>
            <DateRangePicker
              format="HH:mm:ss"
              ranges={[]}
              defaultCalendarValue={[
                new Date("2022-02-01 00:00:00"),
                new Date("2022-05-01 23:59:59"),
              ]}
            />

            <p>Meridian format</p>
            <DateRangePicker
              format="yyyy-MM-dd hh:mm aa"
              showMeridian
              defaultCalendarValue={[
                new Date("2022-02-01 00:00:00"),
                new Date("2022-05-01 23:59:59"),
              ]}
            />
          </div>
        </div>
        <div>Выбранный дата и время</div>
      </div>
      <div className={classes.buttonShell}>
        <Button
          buttonName="Создать комнату"
          link=""
          styleButton={classes.richButton}
        />
      </div>
    </div>
  );
}
export default RoomPage;
