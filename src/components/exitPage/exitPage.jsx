import React from "react";

import classes from "./exitPage.module.less";

import NotificationTemplate from "../usefulElements/usefulElements__notificationTemplate/usefulElements__notificationTemplate";
import Button from "../usefulElements/button/button";
import { Navigate } from "react-router-dom";

function ExitPage({ logOutRequest, authStatus, goBack }) {
  return (
    <div className={classes.exitPage}>
      <div className={classes.exitPage__exitText}>
        <NotificationTemplate
          fontsize="32"
          text="Вы хотите выйти из личного кабинета?"
        />
      </div>
      <div className={classes.exitPage__buttonsShell}>
        <div className={classes.exitPage__shellButton}>
          <Button
            styleButton={classes.button_theme_light}
            onClick={() => {
              logOutRequest();
            }}
          >
            Да
          </Button>
          {!authStatus && <Navigate to={"/"} />}
        </div>
        <div className={classes.exitPage__shellButton}>
          <Button
            styleButton={classes.button_theme_rich}
            onClick={() => {
              goBack();
            }}
          >
            Нет
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ExitPage;
