import React from "react";
import classes from "./input.module.less";

function Input(props) {
  return (
    <div className={classes.container}>
      <input
        value={props.value}
        onChange={props.onChange}
        name={props.name}
        type={props.type}
        placeHolder={props.placeHolder}
        required={props.required}
        autoFocus={props.autofocus}
      />
    </div>
  );
}

export default Input;
