import React from "react";
import classnames from "classnames";
import classes from "./companyNameAndLogo.module.less";

import svg from "../../images/logo.svg";

import { Link } from "react-router-dom";

function CompanyNameAndLogo(props) {
  let imgSizeClass;
  let nameSizeClass;
  if (props.isSmall) {
    imgSizeClass = classes.nameAndLogo__logo_size_small;
    nameSizeClass = classes.nameAndLogo__name_size_small;
  } else {
    imgSizeClass = classes.nameAndLogo__logo_size_big;
    nameSizeClass = classes.nameAndLogo__name_size_big;
  }

  return (
    <Link className={classes.nameAndLogo} to="">
      <img
        className={classnames(classes.nameAndLogo__logo, imgSizeClass)}
        src={svg}
        alt="logo"
      />
      <div className={classnames(classes.nameAndLogo__name, nameSizeClass)}>
        Meet(Room)
      </div>
    </Link>
  );
}

export default CompanyNameAndLogo;
