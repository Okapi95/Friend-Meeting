import React from "react";
import classes from "./loginbar.module.less";
import Button from "../../usefulElements/button/button";

function Loginbar({ isLoggedIn }) {
  let button = [];
  if (isLoggedIn) {
    button = [
      <Button
        styleButton={classes.lightButton}
        buttonName="Выход"
        link="/exit-page"
      />,
    ];
  } else {
    button = [
      <Button
        styleButton={classes.lightButton}
        buttonName="Регистрация"
        link="/registration"
      />,
      <Button
        styleButton={classes.richButton}
        buttonName="Вход"
        link="/entry"
      />,
    ];
  }

  return <div className={classes.loginbar}> {button} </div>;
}

export default Loginbar;
