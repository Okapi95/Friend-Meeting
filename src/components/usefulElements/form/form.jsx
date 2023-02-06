import React from "react";
import classes from "./form.module.less";

function Form(props) {
  return (
    <form className={classes.shellForm}>
      <div className={classes.headline}>{props.headline}</div>
      <div className={classes.form}>{props.children}</div>
    </form>
  );
}

export default Form;
