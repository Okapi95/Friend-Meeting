import React, { useEffect } from "react";
import classes from "./App.module.less";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";

import ErrorPage from "./components/errorPage/errorPage";
import LoginPage from "./components/login-page/loginPage";
import InfoAboutProject from "./components/mainInfo/infoAboutProject";
import AfterRegistration from "./components/login-page/login-page__afterRegistration/login-page__afterRegistration";
import RoomPage from "./components/roomPage/roomPage";
import PersonalPage from "./components/personalPage/personalPage";
import InviteLinks from "./components/roomPage/roomPage__inviteLinks/roomPage__inviteLinks";
import EntryPage from "./components/entryPage/entryPage";
import ExitPage from "./components/exitPage/exitPage";

import { useDispatch } from "react-redux";
import { controlAuthorization } from "./API-request/controlAuthorization";
import {
  changeAuthStatusToFalse,
  changeAuthStatusToTrue,
} from "./store/features/authorizationSlice";

function App() {
  console.log("Перерисовалась SPA");
  const dispatch = useDispatch();

  const changeStartingStateAuthorization = async () => {
    try {
      if (await controlAuthorization()) {
        dispatch(changeAuthStatusToTrue());
        console.log(
          "true-условие срабтало в арр, состояние должно было поменяться на true"
        );
      } else {
        dispatch(changeAuthStatusToFalse());
        console.log(
          "провалилось в else, заничит толькователь не авторизован вообще, состояние должно быть false"
        );
      }
    } catch (error) {
      console.log("что-то совсем пошло не так");
    }
  };
  changeStartingStateAuthorization();

  return (
    <BrowserRouter>
      <div className={classes.app}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<InfoAboutProject />} />
            <Route path="registration" element={<LoginPage />} />
            <Route path="user-has-registered" element={<AfterRegistration />} />
            <Route path="personal-page" element={<PersonalPage />} />
            <Route path="create-room" element={<RoomPage />} />
            <Route path="created-room" element={<InviteLinks />} />
            <Route path="entry" element={<EntryPage />} />
            <Route path="exit-page" element={<ExitPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
