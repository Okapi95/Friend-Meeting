import React from "react";
import classes from "./companyNameAndLogo.module.less";
import svg from "../../images/logo.svg";
import { Link } from "react-router-dom";

function CompanyNameAndLogo(props) {
  let imgSizeClass;
  let nameSizeClass;
  if (props.isSmall) {
    imgSizeClass = classes.nameAndLogo__smallLogo;
    nameSizeClass = classes.nameAndLogo__smallName;
  } else {
    imgSizeClass = classes.nameAndLogo__bigLogo;
    nameSizeClass = classes.nameAndLogo__bigName;
  }

  return (
    <Link className={classes.nameAndLogo} to="">
      <img className={imgSizeClass} src={svg} alt="logo" />
      <div className={nameSizeClass}>Meeting room</div>
    </Link>
  );
}

export default CompanyNameAndLogo;
