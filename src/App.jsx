import React from "react";
import classes from "./App.module.less";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";

import ErrorPage from "./components/errorPage/errorPage";
import LoginPageContainer from "./components/loginPage/loginPageСontainer";
import InfoAboutProject from "./components/mainInfo/infoAboutProject";
import AfterRegistration from "./components/loginPage/loginPage__afterRegistration/loginPage__afterRegistration";
import RoomPageContainer from "./components/roomPage/roomPageContainer";
import PersonalPageContainer from "./components/personalPage/personalPageContainer";
import InviteLinks from "./components/roomPage/roomPage__inviteLinks/roomPage__inviteLinks";
import EntryPageContainer from "./components/entryPage/entryPageContainer";
import ExitPageContainer from "./components/exitPage/exitPageContainer";

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
          "App: true-условие сработало, состояние должно было поменяться на true"
        );
      } else {
        dispatch(changeAuthStatusToFalse());
        console.log(
          "App: провалилось в else, значит пользователь не авторизован вообще, состояние должно быть false"
        );
      }
    } catch (error) {
      console.log("App: что-то совсем пошло не так");
    }
  };
  changeStartingStateAuthorization();

  return (
    <BrowserRouter>
      <div className={classes.app}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<InfoAboutProject />} />
            <Route path="registration" element={<LoginPageContainer />} />
            <Route path="user-has-registered" element={<AfterRegistration />} />
            <Route path="personal-page" element={<PersonalPageContainer />} />
            <Route path="create-room" element={<RoomPageContainer />} />
            <Route path="created-room" element={<InviteLinks />} />
            <Route path="entry" element={<EntryPageContainer />} />
            <Route path="exit-page" element={<ExitPageContainer />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
