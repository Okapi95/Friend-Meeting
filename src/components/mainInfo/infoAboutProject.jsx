import React from "react";
import Button from "../usefulElements/button/button";
import classes from "./infoAboutProject.module.less";
import { useSelector } from "react-redux";

function InfoAboutProject() {
  const authStatus = useSelector((state) => state.authStatus);
  console.log(
    "сейчас в инфе о проекте такой статус аутентификации-----> " + authStatus
  );

  return (
    <div className={classes.aboutProject}>
      <div className={classes.aboutProject__mostparth}>
        Этот проект для ваших встреч с близкими и неочень людьми :)
      </div>
      <div className={classes.aboutProject__lessparthOne}>
        Если вы и ваши друзья вечно не можете найти время для встречи, то это
        приложение вам поможет! Тут можно запланировать встречу:
      </div>
      <div className={classes.aboutProject__lessparthTwo}>
        1. Выберите удобные дату и время и отправьте друзьям. 2. Друзья выберут
        своё время в ваших тайм-рамках. 3. Приложение укажет, когда встретиться
        смогут ВСЕ (наконец-то!)!
      </div>
      <div>
        {authStatus && (
          <Button styleButton={classes.button_theme_light}>
            Вернуться в личный кабинет
          </Button>
        )}
      </div>
    </div>
  );
}

export default InfoAboutProject;
