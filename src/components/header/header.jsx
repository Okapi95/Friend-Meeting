import React from "react";
import classes from "./header.module.css";
import CompanyNameAndLogo from "../companyNameAndLogo/companyNameAndLogo.jsx";
import Loginbar from "./loginbar/loginbar";

function Header() {
  return (
    <header className={classes.header}>
      <CompanyNameAndLogo isSmall={false} />
      <Loginbar />
    </header>
  );
}

export default Header;
