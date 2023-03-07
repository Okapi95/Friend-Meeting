import React, { useEffect, useState } from "react";
import Button from "../usefulElements/button/button";
import classes from "./loginPage.module.less";
import Form from "../usefulElements/form/form";
import Input from "../usefulElements/form/input";

function LoginPage({ changeAuth }) {
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

  const emailHandler = (event) => {
    setRegisterEmail(event.target.value);
    const re =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!re.test(String(event.target.value).toLowerCase())) {
      setEmailError("Неправильная почта");
    } else {
      setEmailError("Правильно!");
    }
  };

  const passwordHandler = (event) => {
    setRegisterPassword(event.target.value);
    if (event.target.value.length < 6 || event.target.value.length > 16) {
      setPasswordError("Пароль должен содержать от 5 до 15 символов");
    } else {
      setPasswordError("Пароль введён верно");
    }
  };

  const passwordRepeatHandler = (event) => {
    setRegisterPasswordRepeat(event.target.value);
    if (event.target.value === registerPassword) {
      setPasswordRepeatError("Пароль совпадает");
    } else {
      setPasswordRepeatError("Пароль не совпадает");
    }
  };

  const blurHandler = (event) => {
    switch (event.target.name) {
      case "email":
        setEmailDirty(true);
        break;
      case "password":
        setPasswordDirty(true);
        break;
      case "passwordRepeat":
        setPasswordRepeatDirty(true);
        break;
    }
  };
  // код про проверку валидности на кнопку сабмит с импользованием useEffect?
  return (
    <div>
      <div className={classes.loginPage}>
        <Form headline="Регистрация">
          {emailDirty && emailError && <div>{emailError}</div>}
          <Input
            value={registerEmail}
            onChange={(event) => emailHandler(event)}
            name="email"
            onBlur={(event) => blurHandler(event)}
            type="email"
            placeHolder="Ваш Email"
            required={true}
            autofocus={false}
          />
          {passwordDirty && passwordError && <div>{passwordError}</div>}
          <Input
            value={registerPassword}
            onChange={(event) => passwordHandler(event)}
            name="password"
            onBlur={(event) => blurHandler(event)}
            type="password"
            placeHolder="Введите пароль"
            required={true}
            autofocus={false}
          />
          {passwordRepeatDirty && passwordRepeatError && (
            <div>{passwordRepeatError}</div>
          )}
          <Input
            onChange={(event) => passwordRepeatHandler(event)}
            value={registerPasswordRepeat}
            name="passwordRepeat"
            onBlur={(event) => blurHandler(event)}
            type="password"
            placeHolder="Повторите пароль"
            required={true}
            autofocus={false}
          />
        </Form>
        <div className={classes.buttonShellCheckin}>
          <Button
            link="/user-has-registered"
            styleButton={classes.richButton}
            buttonName="Зарегистрироваться"
            onClick={() => {
              changeAuth();
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
