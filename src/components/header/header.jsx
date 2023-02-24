import React, { useState } from "react";
import classes from "./header.module.css";
import CompanyNameAndLogo from "../companyNameAndLogo/companyNameAndLogo.jsx";
import Loginbar from "./loginbar/loginbar";

function Header() {
  // здесь пишу состояние
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <header className={classes.header}>
      <CompanyNameAndLogo isSmall={false} />
      <Loginbar isLoggedIn={isLoggedIn} />
    </header>
  );
}

export default Header;
