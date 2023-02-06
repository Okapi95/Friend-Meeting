import React from "react";
import classes from "./loginbar.module.less";
import Button from "../../usefulElements/button/button";

function Loginbar() {
  return (
    <div className={classes.loginbar}>
      <Button
        styleButton={classes.lightButton}
        buttonName="Регистрация"
        link="/registration"
      />
      <Button
        styleButton={classes.richButton}
        buttonName="Вход"
        link="/entry"
      />
    </div>
  );
}

export default Loginbar;
