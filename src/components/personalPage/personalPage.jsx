import React from "react";
import Button from "../usefulElements/button/button";
import classes from "./personalPage.module.less";
import NotificationTemplate from "../usefulElements/notificationTemplate/notificationTemplate";
import Form from "../usefulElements/form/form";

function PersonalPage() {
  return (
    <div className={classes.personalPage}>
      <div className={classes.headlinePersonalPage}>
        <NotificationTemplate fontsize="45" text="Личный кабинет" />
      </div>
      <div className={classes.shellPersonalPage}>
        <div className={classes.title}>Мои встречи</div>
        <Form headline="Прошедшие">
          <div>Тут список встреч</div>
        </Form>
        <Form headline="Предстоящие">
          <div>Тут список других встреч</div>
        </Form>
        <div></div>
      </div>

      <div className={classes.buttonShell}>
        <Button
          link="/create-room"
          styleButton={classes.lightButton}
          buttonName="Создать комнату"
        />
      </div>
    </div>
  );
}

export default PersonalPage;
