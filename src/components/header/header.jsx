import React, { useState } from "react";
import classes from "./header.module.css";
import CompanyNameAndLogo from "../companyNameAndLogo/companyNameAndLogo.jsx";
import Loginbar from "./loginbar/loginbar";

function Header(props) {
  return (
    <header className={classes.header}>
      <CompanyNameAndLogo isSmall={false} />
      <Loginbar isLoggedIn={props.isLoggedIn1} />
    </header>
  );
}

export default Header;
