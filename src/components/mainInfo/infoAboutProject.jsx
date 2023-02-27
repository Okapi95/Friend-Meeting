import React from "react";
import Button from "../usefulElements/button/button";
import classes from "./infoAboutProject.module.less";

function InfoAboutProject(props) {
  return (
    <div className={classes.aboutProject}>
      <div className={classes.aboutProject__mostparth}>
        Этот проект для ваших встреч с близкими и неочень людьми :)
      </div>
      <div className={classes.aboutProject__lessparthone}>
        Если вы и ваши друзья вечно не можете найти время для встречи, то это
        приложение вам поможет!
      </div>
      <div className={classes.aboutProject__lessparthtwo}>
        Создайте комнату встречи и выберите удобное для всех время. Затем
        отправьте друзьям ссылку-приглашение... Готово!
      </div>
      <div>
        {props.isLoggedIn && (
          <Button
            styleButton={classes.lightButton}
            buttonName="Вернуться в личный кабинет"
            link="/personal-page"
          />
        )}
      </div>
    </div>
  );
}

export default InfoAboutProject;
