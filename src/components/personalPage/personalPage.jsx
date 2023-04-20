import React from "react";
import Button from "../usefulElements/button/button";
import classes from "./personalPage.module.less";
import NotificationTemplate from "../usefulElements/usefulElements__notificationTemplate/usefulElements__notificationTemplate";
import Form from "../usefulElements/usefulElements__form/usefulElements__form";
import { Link } from "react-router-dom";

function PersonalPage() {
  return (
    <div className={classes.personalPage}>
      <div className={classes.personalPage__headline}>
        <NotificationTemplate fontsize="45" text="Личный кабинет" />
      </div>
      <div className={classes.personalPage__container}>
        <div className={classes.personalPage__title}>Мои встречи</div>
        <Form headline="Прошедшие">
          <div>Тут список встреч</div>
        </Form>
        <Form headline="Предстоящие">
          <div>Тут список других встреч</div>
        </Form>
        <div></div>
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
