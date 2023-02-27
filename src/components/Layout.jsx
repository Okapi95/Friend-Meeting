import { Link, Outlet } from "react-router-dom";
import Header from "./header/header";
import Footer from "./footer/footer";

function Layout(props) {
  return (
    <>
      <Header isLoggedIn1={props.isLoggedIn2} />
      <Outlet />
      <Footer />
    </>
  );
}

export { Layout };
