import React from "react";
import classes from "./notificationTemplate.module.less";

function NotificationTemplate(props) {
  return (
    <div
      className={classes.notice}
      style={{ fontSize: Number(props.fontsize) }}
    >
      {props.text}
    </div>
  );
}

export default NotificationTemplate;
