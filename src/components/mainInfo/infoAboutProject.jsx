import React from "react";
import classes from "./infoAboutProject.module.less";

import Button from "../usefulElements/button/button";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function InfoAboutProject() {
  const authStatus = useSelector((state) => state.authStatus);
  console.log(
    "сейчас в инфе о проекте такой статус аутентификации-----> " + authStatus
  );

  return (
    <div className={classes.aboutProject}>
      <div className={classes.aboutProject__mostparth}>
        Этот проект для ваших встреч с близкими и не очень людьми :)
      </div>
      <div className={classes.aboutProject__lessparthOne}>
        Если вы и ваши друзья вечно не можете найти время для встречи, то это
        приложение вам поможет! Тут можно запланировать встречу:
      </div>
      <div className={classes.aboutProject__lessparthTwo}>
        <mark>1.</mark> Выберите удобные дату и время и отправьте друзьям.
        <mark>2.</mark> Друзья выберут своё время в ваших тайм-рамках.
        <mark>3.</mark> Приложение укажет, когда встретиться смогут ВСЕ
        (наконец-то!)!
      </div>
      <div>
        {authStatus && (
          <Link to={"/personal-page"}>
            <Button styleButton={classes.button_theme_light}>
              Вернуться в личный кабинет
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default InfoAboutProject;
