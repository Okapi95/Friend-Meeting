import React from "react";
import classes from "./companyNameAndLogo.module.less";
import svg from "../../images/logo.svg";
import { Link } from "react-router-dom";

function CompanyNameAndLogo(props) {
  let imgSizeClass;
  let nameSizeClass;
  if (props.isSmall) {
    imgSizeClass = classes.smallLogo;
    nameSizeClass = classes.smallName;
  } else {
    imgSizeClass = classes.bigLogo;
    nameSizeClass = classes.bigName;
  }

  return (
    <Link className={classes.nameAndLogo} to="">
      <img className={imgSizeClass} src={svg} alt="logo" />
      <div className={nameSizeClass}>Meet(Room)</div>
    </Link>
  );
}

export default CompanyNameAndLogo;
