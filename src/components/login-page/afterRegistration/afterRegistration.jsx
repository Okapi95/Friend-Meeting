import React from "react";
import classes from "./afterRegistration.module.less";
import NotificationTemplate from "../../usefulElements/notificationTemplate/notificationTemplate";
import Button from "../../usefulElements/button/button";

function AfterRegistration() {
  return (
    <div className={classes.afterRegistrationShell}>
      <div className={classes.afterRegistration}>
        <NotificationTemplate
          fontsize="28"
          text="Вы зарегистрировались! Теперь у вас есть доступ в Личный кабинет"
        />
        <div className={classes.buttonShellPersonal}>
          <Button
            buttonName="Личный кабинет"
            link="/personal-page"
            styleButton={classes.richButton}
          />
        </div>
      </div>
    </div>
  );
}

export default AfterRegistration;
