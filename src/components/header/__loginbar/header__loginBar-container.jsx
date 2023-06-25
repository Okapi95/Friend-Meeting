import React from "react";
import classes from "./header__loginBar.module.less";

import LoginBar from "./header__loginBar";
import Button from "../../usefulElements/button/button";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function LoginBarContainer() {
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

  return <LoginBar button={button} />;
}

export default LoginBarContainer;
