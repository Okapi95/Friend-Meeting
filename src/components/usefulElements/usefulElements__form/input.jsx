import React from "react";
import classes from "./input.module.less";

function Input(props) {
  return (
    <div className={classes.container}>
      <input
        value={props.value}
        onChange={props.onChange}
        name={props.name}
        onBlur={props.onBlur}
        type={props.type}
        placeHolder={props.placeHolder}
        required={props.required}
      />
      {props.children}
    </div>
  );
}

export default Input;
