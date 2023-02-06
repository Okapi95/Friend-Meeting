import React from "react";
import classes from "./textarea.module.less";

function Textarea(props) {
  return (
    <div className={classes.container}>
      <textarea
        // cols={20}
        maxLength={350}
        name={props.name}
        placeHolder={props.placeHolder}
        // rows={5}
        wrap="hard"
      ></textarea>
    </div>
  );
}
export default Textarea;
