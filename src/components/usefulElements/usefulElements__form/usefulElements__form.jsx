import React from "react";
import classes from "./usefulElements__form.module.less";

function Form(props) {
  return (
    <form className={classes.form}>
      <div className={classes.form__headline}>{props.headline}</div>
      <div className={classes.form__container}>{props.children}</div>
    </form>
  );
}

export default Form;
