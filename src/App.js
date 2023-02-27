import React, { useState } from "react";
import classes from "./App.module.less";
import LoginPage from "./components/login-page/loginPage";
import InfoAboutProject from "./components/mainInfo/infoAboutProject";
import AfterRegistration from "./components/login-page/afterRegistration/afterRegistration";
import RoomPage from "./components/roomPage/roomPage";
import PersonalPage from "./components/personalPage/personalPage";
import InviteLinks from "./components/roomPage/inviteLinks/inviteLinks";
import EntryPage from "./components/entryPage/entryPage";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { Layout } from "./components/Layout";

function App() {
  const [isAuthenticated, setAuthenticated] = useState(false);

  return (
    <BrowserRouter>
      <div className={classes.app}>
        <Routes>
          <Route path="/" element={<Layout isLoggedIn2={isAuthenticated} />}>
            <Route
              index
              element={<InfoAboutProject isLoggedIn={isAuthenticated} />}
            />
            <Route path="registration" element={<LoginPage />} />
            <Route path="user-has-registered" element={<AfterRegistration />} />
            <Route path="personal-page" element={<PersonalPage />} />
            <Route path="create-room" element={<RoomPage />} />
            <Route path="created-room" element={<InviteLinks />} />
            <Route path="entry" element={<EntryPage />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
