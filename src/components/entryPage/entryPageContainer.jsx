import React, { useState } from "react";

import { internalRequestAxios } from "../../API-request/internalRequestAxios";
import { useDispatch, useSelector } from "react-redux";
import { authorizationSlice } from "../../store/features/authorizationSlice";

import EntryPage from "./entryPage";

function EntryPageContainer() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorDate, setErrorDate] = useState(false);

  const [isVisiblePassword, setIsVisiblePassword] = useState(false);

  const { changeAuthStatusToTrue } = authorizationSlice.actions;
  const dispatch = useDispatch();
  const authStatus = useSelector((state) => state.authStatus);

  const sendLoginRequest = () => {
    internalRequestAxios
      .post("/login", {
        username: email,
        password: password,
      })
      .then(() => {
        dispatch(changeAuthStatusToTrue());
        console.log("ответ пришёл 200, пользователь залогинился");
      })
      .catch(() => {
        console.log(`вход не удался, состояние по прежнему: ${authStatus}`);
        setErrorDate(true);
      });
  };

  return (
    <EntryPage
      sendLoginRequest={sendLoginRequest}
      errorDate={errorDate}
      authStatus={authStatus}
      setPassword={setPassword}
      setEmail={setEmail}
      setIsVisiblePassword={setIsVisiblePassword}
      isVisiblePassword={isVisiblePassword}
      email={email}
      password={password}
    />
  );
}
export default EntryPageContainer;
