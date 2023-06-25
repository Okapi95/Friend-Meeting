import React, { useState } from "react";

import LoginPage from "./loginPage";

import {
  emailHandler,
  passwordHandler,
  passwordRepeatHandler,
  blurHandler,
  sendRegisterRequest,
} from "./functionForLoginPage/functionsForLoginPage";

function LoginPageСontainer() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerPasswordRepeat, setRegisterPasswordRepeat] = useState("");

  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [passwordRepeatDirty, setPasswordRepeatDirty] = useState(false);

  const [emailError, setEmailError] = useState("Почта не должна быть пустой");
  const [passwordError, setPasswordError] = useState(
    "Пароль не должен быть пустым"
  );
  const [passwordRepeatError, setPasswordRepeatError] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);

  const [isVisiblePassword, setIsVisiblePassword] = useState(false);

  return (
    <LoginPage
      emailHandler={emailHandler}
      passwordHandler={passwordHandler}
      passwordRepeatHandler={passwordRepeatHandler}
      blurHandler={blurHandler}
      sendRegisterRequest={sendRegisterRequest}
      emailError={emailError}
      setEmailError={setEmailError}
      registerEmail={registerEmail}
      setRegisterEmail={setRegisterEmail}
      passwordDirty={passwordDirty}
      emailDirty={emailDirty}
      setEmailDirty={setEmailDirty}
      setPasswordDirty={setPasswordDirty}
      registerPassword={registerPassword}
      setRegisterPassword={setRegisterPassword}
      passwordError={passwordError}
      setPasswordError={setPasswordError}
      passwordRepeatDirty={passwordRepeatDirty}
      passwordRepeatError={passwordRepeatError}
      setPasswordRepeatDirty={setPasswordRepeatDirty}
      isVisiblePassword={isVisiblePassword}
      setIsVisiblePassword={setIsVisiblePassword}
      setRegisterPasswordRepeat={setRegisterPasswordRepeat}
      setPasswordRepeatError={setPasswordRepeatError}
      registerPasswordRepeat={registerPasswordRepeat}
      setIsRegistered={setIsRegistered}
      isRegistered={isRegistered}
    />
  );
}

export default LoginPageСontainer;
