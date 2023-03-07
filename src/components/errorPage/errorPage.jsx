import React from "react";
import NotificationTemplate from "../usefulElements/notificationTemplate/notificationTemplate";
import classes from "./errorPage.module.less";

function ErrorPage() {
  return (
    <div className={classes.errorPage}>
      <div className={classes.errorText}>
        <NotificationTemplate
          fontsize="32"
          text="Такой страницы не существует :("
        />
      </div>
    </div>
  );
}

export default ErrorPage;
