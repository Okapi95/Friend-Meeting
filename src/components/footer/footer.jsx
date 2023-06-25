import React from "react";
import classes from "./footer.module.less";

import CompanyNameAndLogo from "../companyNameAndLogo/companyNameAndLogo.jsx";

import svggmail from "../../images/iconsgmail.svg";
import svgtelegram from "../../images/iconstelegram.svg";
import svggithub from "../../images/iconsgithub.svg";

function Footer() {
  return (
    <footer className={classes.footer}>
      <CompanyNameAndLogo isSmall={true} />
      <div className={classes.footer__year}>2022</div>
      <div className={classes.footer__contacts}>
        <a
          target="_blank"
          href="mailto:mari.shpak.1995@gmail.com"
          rel="noreferrer"
        >
          <img src={svggmail} alt="gmail" />
        </a>
        <a target="_blank" href="https://t.me/mariShpak95" rel="noreferrer">
          <img src={svgtelegram} alt="telegram" />
        </a>
        <a target="_blank" href="https://github.com/Okapi95" rel="noreferrer">
          <img src={svggithub} alt="github" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
