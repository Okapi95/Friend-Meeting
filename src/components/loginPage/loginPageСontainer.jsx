import React, { useState } from "react";

import LoginPage from "./loginPage";

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

  const inputValueProps = {
    registerEmail,
    setRegisterEmail,
    registerPassword,
    setRegisterPassword,
    registerPasswordRepeat,
    setRegisterPasswordRepeat,
  };
  const allErrorProps = {
    emailError,
    setEmailError,
    passwordError,
    setPasswordError,
    passwordRepeatError,
    setPasswordRepeatError,
  };
  const dirtyProps = {
    passwordDirty,
    emailDirty,
    setEmailDirty,
    setPasswordDirty,
    passwordRepeatDirty,
    setPasswordRepeatDirty,
  };
  const visiblePasswordProps = {
    isVisiblePassword,
    setIsVisiblePassword,
  };
  const isRegisteredProps = {
    setIsRegistered,
    isRegistered,
  };

  return (
    <LoginPage
      inputValueProps={inputValueProps}
      allErrorProps={allErrorProps}
      dirtyProps={dirtyProps}
      visiblePasswordProps={visiblePasswordProps}
      isRegisteredProps={isRegisteredProps}
    />
  );
}

export default LoginPageСontainer;
