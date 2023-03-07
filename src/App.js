import React, { useState } from "react";
import classes from "./App.module.less";
import ErrorPage from "./components/errorPage/errorPage";
import LoginPage from "./components/login-page/loginPage";
import InfoAboutProject from "./components/mainInfo/infoAboutProject";
import AfterRegistration from "./components/login-page/afterRegistration/afterRegistration";
import RoomPage from "./components/roomPage/roomPage";
import PersonalPage from "./components/personalPage/personalPage";
import InviteLinks from "./components/roomPage/inviteLinks/inviteLinks";
import EntryPage from "./components/entryPage/entryPage";
import ExitPage from "./components/exitPage/exitPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";

function App() {
  const [isAuthenticated, setAuthenticated] = useState(false);

  const changeAuth = () => setAuthenticated(!isAuthenticated);

  return (
    <BrowserRouter>
      <div className={classes.app}>
        <Routes>
          <Route path="/" element={<Layout isLoggedIn={isAuthenticated} />}>
            <Route
              index
              element={<InfoAboutProject isLoggedIn={isAuthenticated} />}
            />
            <Route
              path="registration"
              element={<LoginPage changeAuth={changeAuth} />}
            />
            <Route path="user-has-registered" element={<AfterRegistration />} />
            <Route path="personal-page" element={<PersonalPage />} />
            <Route path="create-room" element={<RoomPage />} />
            <Route path="created-room" element={<InviteLinks />} />
            <Route
              path="entry"
              element={<EntryPage changeAuth={changeAuth} />}
            />
            <Route
              path="exit-page"
              element={
                <ExitPage
                  isLoggedIn={isAuthenticated}
                  changeAuth={changeAuth}
                />
              }
            />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
