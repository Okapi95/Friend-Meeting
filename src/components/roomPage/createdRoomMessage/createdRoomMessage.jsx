import React from "react";
import Button from "../../usefulElements/button/button";
import classes from "./createdRoomMessage.module.less";

function CreatedRoomMessage() {
  return (
    <div className={classes.createdRoomMessage}>
      <div className={classes.notice}>
        Вы создали комнату :) Теперь вы можете скопировать ссылку-приглашение и
        разослать её вашим друзьям в любом удобном мессенджере.
      </div>
      <div className={classes.buttonShell}>
        <Button
          buttonName="Копировать ссылку-приглашение"
          link=""
          styleButton={classes.richButton}
        />
      </div>
    </div>
  );
}

export default CreatedRoomMessage;
