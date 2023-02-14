import classes from "./App.module.less";
import LoginPage from "./components/login-page/loginPage";
import InfoAboutProject from "./components/mainInfo/infoAboutProject";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import RoomPage from "./components/roomPage/roomPage";
import PersonalPage from "./components/personalPage/personalPage";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { Layout } from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <div className={classes.app}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<InfoAboutProject />} />
            <Route path="/registration" element={<LoginPage />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
