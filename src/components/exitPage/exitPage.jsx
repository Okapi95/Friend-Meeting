import React from "react";
import classes from "./exitPage.module.less";
import NotificationTemplate from "../usefulElements/notificationTemplate/notificationTemplate";
import Button from "../usefulElements/button/button";

function ExitPage({ changeAuth }) {
  return (
    <div className={classes.exitPage}>
      <div className={classes.exitText}>
        <NotificationTemplate
          fontsize="32"
          text="Вы хотите выйти из личного кабинета?"
        />
      </div>
      <div className={classes.buttons}>
        <div className={classes.buttonExit}>
          <Button
            buttonName="Да"
            link="/entry"
            styleButton={classes.lightButton}
            onClick={() => changeAuth()}
          />
          {/* Написать ещё смену состояния авторизации! */}
        </div>
        <div className={classes.buttonExit}>
          <Button
            buttonName="Нет"
            link="/personal-page"
            styleButton={classes.richButton}
          />
        </div>
      </div>
    </div>
  );
}

export default ExitPage;
