import React, { useState } from "react";
import classes from "./loginPage.module.less";

import Button from "../usefulElements/button/button";
import Form from "../usefulElements/usefulElements__form/usefulElements__form";
import Input from "../usefulElements/usefulElements__form/input";
import SimpleTextBlock from "../usefulElements/simpleTextBlock/simpleTextBlock";

import svghideeye from "../../images/iconhideeye.svg";
import svgopeneye from "../../images/iconopeneye.svg";

import { Navigate } from "react-router-dom";
import { internalRequestAxios } from "../../API-request/axiosConfigBaseURL";

function LoginPage({ isVisiblePassword, setIsVisiblePassword }) {
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

  const emailHandler = (event) => {
    setRegisterEmail(event.target.value);
    const re =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!re.test(String(event.target.value).toLowerCase())) {
      setEmailError("Неправильная почта");
    } else {
      setEmailError("");
    }
  };

  const passwordHandler = (event) => {
    setRegisterPassword(event.target.value);
    const re = /^(.{0,7}|[^0-9]|[^A-Z]|[^a-z]|[a-zA-Z0-9]).{6,}$/i;
    if (!re.test(String(event.target.value))) {
      setPasswordError(
        "Пароль должен содержать минимум 6 латинских символов, минимум одну цифру, минимум одну букву в большом и малом регистре"
      );
    } else {
      setPasswordError("");
    }
  };

  const passwordRepeatHandler = (event) => {
    setRegisterPasswordRepeat(event.target.value);
    if (event.target.value === registerPassword) {
      setPasswordRepeatError("");
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
  const sendRegisterRequest = () => {
    internalRequestAxios
      .post("/auth/register", {
        email: registerEmail,
        password: registerPassword,
        confirmPassword: registerPasswordRepeat,
      })
      .then((response) => {
        console.log(response);
        setIsRegistered(true);
      })
      .catch((error) => {
        console.log(error);
        const errorMessage = error.response.data._embedded.errors[0].message;
        if (errorMessage === "Пользователь с таким адресом уже существует") {
          setEmailError("Пользователь с таким адресом уже существует");
        } else if (errorMessage === "Пароль не удовлетворяет условиям") {
          setPasswordError("Пароль не удовлетворяет условиям");
        } else {
          setPasswordRepeatError("Пароли не совпадают");
        }
      });
  };
  return (
    <div>
      <div className={classes.loginPage}>
        <Form headline="Регистрация">
          {emailDirty && emailError && (
            <SimpleTextBlock>{emailError}</SimpleTextBlock>
          )}
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
          {passwordDirty && passwordError && (
            <SimpleTextBlock>{passwordError}</SimpleTextBlock>
          )}
          <div className={classes.loginPage__password}>
            <Input
              value={registerPassword}
              onChange={(event) => passwordHandler(event)}
              name="password"
              onBlur={(event) => blurHandler(event)}
              type={isVisiblePassword ? "text" : "password"}
              placeHolder="Введите пароль"
              required={true}
              autofocus={false}
            >
              <div
                className={classes.loginPage__visiblePassword}
                onClick={() => setIsVisiblePassword(!isVisiblePassword)}
              >
                {isVisiblePassword ? (
                  <img src={svgopeneye} />
                ) : (
                  <img src={svghideeye} />
                )}
              </div>
            </Input>
          </div>
          {passwordRepeatDirty && passwordRepeatError && (
            <SimpleTextBlock>{passwordRepeatError}</SimpleTextBlock>
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
            styleButton={classes.button_theme_rich}
            onClick={() => sendRegisterRequest()}
          >
            Зарегистрироваться
          </Button>

          {isRegistered && (
            <Navigate to="/user-has-registered" replace={true} />
          )}
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
