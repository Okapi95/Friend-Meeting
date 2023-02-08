import classes from "./App.module.less";
import LoginPage from "./components/login-page/loginPage";
import InfoAboutProject from "./components/mainInfo/infoAboutProject";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RoomPage from "./components/roomPage/roomPage";
import CreatedRoomMessage from "./components/roomPage/createdRoomMessage/createdRoomMessage";

function App() {
  return (
    <BrowserRouter>
      <div className={classes.app}>
        <Header />
        {/* <InfoAboutProject /> */}
        <Routes>
          <Route path="/registration" element={<LoginPage />} />
          <Route path="" element={<InfoAboutProject />} />
        </Routes>
        <Footer />
        <RoomPage />
      </div>
    </BrowserRouter>
  );
}

export default App;
