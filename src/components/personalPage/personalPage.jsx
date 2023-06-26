import React from "react";
import classes from "./personalPage.module.less";

import Button from "../usefulElements/button/button";
import NotificationTemplate from "../usefulElements/usefulElements__notificationTemplate/usefulElements__notificationTemplate";
import Form from "../usefulElements/usefulElements__form/usefulElements__form";

import { Link } from "react-router-dom";
import SimpleTextBlock from "../usefulElements/simpleTextBlock/simpleTextBlock";

function PersonalPage({ meetings }) {
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
            <SimpleTextBlock key={meetingName.meetingId}>
              {meetingName.description}
            </SimpleTextBlock>
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
