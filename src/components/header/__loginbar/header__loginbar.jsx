import React from "react";
import classes from "./header__loginBar.module.less";

function LoginBar({ button }) {
  return <div className={classes.loginbar}> {button} </div>;
}

export default LoginBar;
