import React from "react";
import Button from "../../usefulElements/button/button";
import NotificationTemplate from "../../usefulElements/notificationTemplate/notificationTemplate";
import classes from "./inviteLinks.module.less";

function InviteLinks(props) {
  const text =
    "Вы создали комнату :) Теперь вы можете скопировать ссылку-приглашение и разослать её вашим друзьям в любом удобном мессенджере.";

  return (
    <div className={classes.shell}>
      <div className={classes.inviteLinks}>
        <NotificationTemplate text={text} />
        <div className={classes.buttonShell}>
          <Button
            buttonName="Копировать ссылку-приглашение"
            link=""
            styleButton={classes.richButton}
          />
        </div>
      </div>
    </div>
  );
}

export default InviteLinks;
