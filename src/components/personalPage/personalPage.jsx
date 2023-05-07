import React, { useEffect, useState } from "react";
import classes from "./personalPage.module.less";

import Button from "../usefulElements/button/button";
import NotificationTemplate from "../usefulElements/usefulElements__notificationTemplate/usefulElements__notificationTemplate";
import Form from "../usefulElements/usefulElements__form/usefulElements__form";

import { Link } from "react-router-dom";
import SimpleTextBlock from "../usefulElements/simpleTextBlock/simpleTextBlock";
import { internalRequestAxios } from "../../API-request/axiosConfigBaseURL";

function PersonalPage() {
  const [meetings, setMeetings] = useState([]);
  // const sendMeetingsRequest = () => {
  //   internalRequestAxios
  //     .get("/meetings")
  //     .then((response) => {
  //       return response.data.content;
  //     })
  //     .then((array) => {
  //       console.log("ошибка в запросе на встречи");
  //       setMeetings(array);
  //     });
  // };

  useEffect(() => {
    internalRequestAxios
      .get("/meetings")
      .then((response) => {
        return response.data.content;
      })
      .then((array) => {
        // let newArray = [[], ...array];
        // console.log("это новый" + newArray);
        console.log(array);
        setMeetings(array);
      })
      .catch(() => {
        console.log("ошибка в запросе на встречи");
      });
  }, []);
  console.log(meetings);

  return (
    <div className={classes.personalPage}>
      <div className={classes.personalPage__headline}>
        <NotificationTemplate fontsize="45" text="Личный кабинет" />
      </div>
      <div className={classes.personalPage__container}>
        <div className={classes.personalPage__title}>Мои встречи</div>
        <Form headline="Прошедшие">
          <SimpleTextBlock>Список прошедших встреч</SimpleTextBlock>
        </Form>
        <Form headline="Предстоящие">
          {meetings.map((meetingName) => (
            <SimpleTextBlock>{meetingName.description}</SimpleTextBlock>
          ))}
        </Form>
      </div>

      <div className={classes.personalPage__buttonShell}>
        <Link to="/create-room">
          <Button styleButton={classes.button_theme_light}>
            Создать комнату
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default PersonalPage;
