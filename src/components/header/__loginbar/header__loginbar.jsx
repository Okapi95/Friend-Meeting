import React from "react";
import classes from "./header__loginbar.module.less";

import Button from "../../usefulElements/button/button";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Loginbar() {
  const authStatus = useSelector((state) => state.authStatus);
  let button = [];
  if (authStatus) {
    button = [
      <Link to="/exit-page">
        <Button styleButton={classes.button_theme_light}>Выход</Button>
      </Link>,
    ];
  } else {
    button = [
      <Link to="/registration">
        <Button styleButton={classes.button_theme_light}>Регистрация</Button>
      </Link>,
      <Link to="/entry">
        <Button styleButton={classes.button_theme_rich}>Вход</Button>
      </Link>,
    ];
  }

  return <div className={classes.loginbar}> {button} </div>;
}

export default Loginbar;
