import React from "react";
import NotificationTemplate from "../usefulElements/usefulElements__notificationTemplate/usefulElements__notificationTemplate";
import classes from "./errorPage.module.less";

function ErrorPage() {
  return (
    <div className={classes.errorPage}>
      <div className={classes.errorPage__errorText}>
        <NotificationTemplate
          fontsize="32"
          text="Такой страницы не существует :("
        />
      </div>
    </div>
  );
}

export default ErrorPage;
