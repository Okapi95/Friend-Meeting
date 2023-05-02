import React from "react";
import classes from "./login-page__afterRegistration.module.less";

import NotificationTemplate from "../../usefulElements/usefulElements__notificationTemplate/usefulElements__notificationTemplate";
import Button from "../../usefulElements/button/button";

import { Link } from "react-router-dom";

function AfterRegistration() {
  return (
    <div className={classes.afterRegistration}>
      <div className={classes.afterRegistration__container}>
        <NotificationTemplate
          fontsize="28"
          text="Вы зарегистрировались! Теперь у вас есть доступ в Личный кабинет"
        />
        <div className={classes.afterRegistration__buttonShell}>
          <Link to="/entry">
            <Button styleButton={classes.button_theme_rich}>
              Войти в личный кабинет
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AfterRegistration;
