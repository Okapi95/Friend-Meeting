import { Link, Outlet } from "react-router-dom";
import classes from "./layout.module.less";
import Header from "./header/header";
import Footer from "./footer/footer";

function Layout(props) {
  return (
    <>
      <Header isLoggedIn1={props.isLoggedIn} />
      <Outlet className={classes.outlet} />
      <Footer />
    </>
  );
}

export { Layout };
