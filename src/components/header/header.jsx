import React from "react";
import classes from "./header.module.css";

import CompanyNameAndLogo from "../companyNameAndLogo/companyNameAndLogo.jsx";
import LoginBarContainer from "./__loginbar/header__loginBar-container";

function Header() {
  return (
    <header className={classes.header}>
      <CompanyNameAndLogo isSmall={false} />
      <LoginBarContainer />
    </header>
  );
}

export default Header;
