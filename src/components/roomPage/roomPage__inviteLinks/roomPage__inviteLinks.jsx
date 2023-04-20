import React from "react";
import Button from "../../usefulElements/button/button";
import NotificationTemplate from "../../usefulElements/usefulElements__notificationTemplate/usefulElements__notificationTemplate";
import classes from "./roomPage__inviteLinks.module.less";

function InviteLinks(props) {
  const text =
    "Вы создали комнату :) Теперь вы можете скопировать ссылку-приглашение и разослать её вашим друзьям в любом удобном мессенджере.";

  return (
    <div className={classes.inviteLinks}>
      <div className={classes.inviteLinks__container}>
        <NotificationTemplate text={text} />
        <div className={classes.inviteLinks__buttonShell}>
          <Button
            styleButton={classes.button_theme_rich}
            // onClick={}
          >
            Копировать ссылку-приглашение
          </Button>
        </div>
      </div>
    </div>
  );
}

export default InviteLinks;
