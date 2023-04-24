import React from "react";
import Button from "../usefulElements/button/button";
import classes from "./infoAboutProject.module.less";

function InfoAboutProject(props) {
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
        {props.isLoggedIn && (
          <Button
            styleButton={classes.button_theme_light}
            buttonName="Вернуться в личный кабинет"
            link="/personal-page"
          />
        )}
      </div>
    </div>
  );
}

export default InfoAboutProject;
