import React, { useState } from "react";
import classes from "./App.module.less";
import ErrorPage from "./components/errorPage/errorPage";
import LoginPage from "./components/login-page/loginPage";
import InfoAboutProject from "./components/mainInfo/infoAboutProject";
import AfterRegistration from "./components/login-page/login-page__afterRegistration/login-page__afterRegistration";
import RoomPage from "./components/roomPage/roomPage";
import PersonalPage from "./components/personalPage/personalPage";
import InviteLinks from "./components/roomPage/roomPage__inviteLinks/roomPage__inviteLinks";
import EntryPage from "./components/entryPage/entryPage";
import ExitPage from "./components/exitPage/exitPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";

function App() {
  const [isVisiblePassword, setIsVisible] = useState(false);

  const [isAuthenticated, setAuthenticated] = useState(false);
  // const changeAuthenticationStatus = () => {
  //   internalRequestAxios
  //     .get("/auth")
  //     .then((response) => {
  //       console.log(
  //         `ответ пришёл положительный, пользователь аутентифицирован`
  //       );
  //       setAuthenticated(true);
  //     })
  //     .catch((error) => console.log("пользователь не аутенцифицирован"));
  // };
  // changeAuthenticationStatus();

  const changeAuth = (authenticationStatus) =>
    setAuthenticated(authenticationStatus);

  return (
    <BrowserRouter>
      <div className={classes.app}>
        <Routes>
          <Route path="/" element={<Layout isLoggedIn={isAuthenticated} />}>
            <Route index element={<InfoAboutProject />} />
            <Route
              path="registration"
              element={
                <LoginPage
                  changeAuth={changeAuth}
                  isVisiblePassword={isVisiblePassword}
                  setIsVisible={setIsVisible}
                />
              }
            />
            <Route path="user-has-registered" element={<AfterRegistration />} />
            <Route path="personal-page" element={<PersonalPage />} />
            <Route path="create-room" element={<RoomPage />} />
            <Route path="created-room" element={<InviteLinks />} />
            <Route
              path="entry"
              element={
                <EntryPage
                  changeAuth={changeAuth}
                  isLoggedIn={isAuthenticated}
                  isVisiblePassword={isVisiblePassword}
                  setIsVisible={setIsVisible}
                />
              }
            />
            <Route path="exit-page" element={<ExitPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
