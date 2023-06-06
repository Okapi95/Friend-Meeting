import React from "react";
import classes from "./header__loginbar.module.less";

import Button from "../../usefulElements/button/button";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { internalRequestAxios } from "../../../API-request/axiosConfigBaseURL";

function Loginbar() {
  const authStatus = useSelector((state) => state.authStatus);
  let button = [];
  if (authStatus) {
    button = [
      <Link to="/exit-page">
        <Button styleButton={classes.button_theme_light}>Выход</Button>
      </Link>,
      // <Button onClick={() => internalRequestAxios.get("/auth")}>
      //   get.auth
      // </Button>,
      // <Button onClick={() => internalRequestAxios.get("/oauth/access_token")}>
      //   get.access_token
      // </Button>,
    ];
  } else {
    button = [
      <Link to="/registration">
        <Button styleButton={classes.button_theme_light}>Регистрация</Button>
      </Link>,
      <Link to="/entry">
        <Button styleButton={classes.button_theme_rich}>Вход</Button>
      </Link>,
      // <Button onClick={() => internalRequestAxios.get("/auth")}>
      //   get.auth
      // </Button>,
      // <Button onClick={() => internalRequestAxios.get("/oauth/access_token")}>
      //   get.access_token
      // </Button>,
    ];
  }

  return <div className={classes.loginbar}> {button} </div>;
}

export default Loginbar;
