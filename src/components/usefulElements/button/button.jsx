import React from "react";
import classnames from "classnames";
import classes from "./button.module.less";

function Button(props) {
  return (
    <button
      className={classnames(classes.button, props.styleButton)}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

export default Button;
