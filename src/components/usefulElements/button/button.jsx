import React from "react";
import classnames from "classnames";
import classes from "./button.module.less";
import { Link } from "react-router-dom";

function Button(props) {
  return (
    <Link
      to={props.link}
      className={classnames(classes.loginbarButton, props.styleButton)}
      onClick={props.onClick}
    >
      {props.buttonName}
    </Link>
  );
}

export default Button;
