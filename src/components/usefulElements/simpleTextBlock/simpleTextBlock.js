import React from "react";
import classes from "./simpleTextBlock.module.less";

function SimpleTextBlock({ children }) {
  return <div className={classes.textBlock}>{children}</div>;
}

export default SimpleTextBlock;
