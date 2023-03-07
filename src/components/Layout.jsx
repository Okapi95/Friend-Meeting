import { Link, Outlet } from "react-router-dom";
import Header from "./header/header";
import Footer from "./footer/footer";

function Layout(props) {
  return (
    <>
      <Header isLoggedIn1={props.isLoggedIn} />
      <Outlet />
      <Footer />
    </>
  );
}

export { Layout };
