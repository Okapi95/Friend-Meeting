import React from "react";
import { useNavigate } from "react-router-dom";
import classes from "./exitPage.module.less";
import NotificationTemplate from "../usefulElements/usefulElements__notificationTemplate/usefulElements__notificationTemplate";
import Button from "../usefulElements/button/button";

function ExitPage({ changeAuth }) {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
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
            // link="/entry"
            styleButton={classes.button_theme_light}
            onClick={() => changeAuth(false)}
          >
            Да
          </Button>
        </div>
        <div className={classes.exitPage__shellButton}>
          <Button
            styleButton={classes.button_theme_rich}
            onClick={(event) => {
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
