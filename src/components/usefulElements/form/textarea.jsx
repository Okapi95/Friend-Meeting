import React from "react";
import classes from "./textarea.module.less";

function Textarea(props) {
  return (
    <div className={classes.container}>
      <textarea
        maxLength={350}
        name={props.name}
        placeHolder={props.placeHolder}
        autoFocus={props.autoFocus}
        rows={props.rows}
        wrap="hard"
      ></textarea>
    </div>
  );
}
export default Textarea;
