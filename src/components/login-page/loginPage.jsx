import React, { useState } from "react";
import classes from "./loginPage.module.less";

import Button from "../usefulElements/button/button";
import Form from "../usefulElements/usefulElements__form/usefulElements__form";
import Input from "../usefulElements/usefulElements__form/input";
import SimpleTextBlock from "../usefulElements/simpleTextBlock/simpleTextBlock";

import svghideeye from "../../images/iconhideeye.svg";
import svgopeneye from "../../images/iconopeneye.svg";

import { Navigate } from "react-router-dom";
import {
  emailHandler,
  passwordHandler,
  passwordRepeatHandler,
  blurHandler,
  sendRegisterRequest,
} from "./functionsForLoginPage";

function LoginPage() {
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
    <div>
      <div className={classes.loginPage}>
        <Form headline="Регистрация">
          {emailDirty && emailError && (
            <SimpleTextBlock>{emailError}</SimpleTextBlock>
          )}
          <Input
            value={registerEmail}
            onChange={(event) =>
              emailHandler(event, setRegisterEmail, setEmailError)
            }
            name="email"
            onBlur={(event) =>
              blurHandler(
                event,
                setEmailDirty,
                setPasswordDirty,
                setPasswordRepeatDirty
              )
            }
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
              onChange={(event) =>
                passwordHandler(event, setRegisterPassword, setPasswordError)
              }
              name="password"
              onBlur={(event) =>
                blurHandler(
                  event,
                  setEmailDirty,
                  setPasswordDirty,
                  setPasswordRepeatDirty
                )
              }
              type={isVisiblePassword ? "text" : "password"}
              placeHolder="Введите пароль"
              required={true}
              autofocus={false}
            >
              <div
                className={classes.loginPage__visiblePassword}
                onClick={() =>
                  setIsVisiblePassword(
                    (isVisiblePassword) => !isVisiblePassword
                  )
                }
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
            onChange={(event) =>
              passwordRepeatHandler(
                event,
                setRegisterPasswordRepeat,
                setPasswordRepeatError,
                registerPassword
              )
            }
            value={registerPasswordRepeat}
            name="passwordRepeat"
            onBlur={(event) =>
              blurHandler(
                event,
                setEmailDirty,
                setPasswordDirty,
                setPasswordRepeatDirty
              )
            }
            type="password"
            placeHolder="Повторите пароль"
            required={true}
            autofocus={false}
          />
        </Form>
        <div className={classes.buttonShellCheckin}>
          <Button
            styleButton={classes.button_theme_rich}
            onClick={() =>
              sendRegisterRequest(
                registerEmail,
                registerPassword,
                registerPasswordRepeat,
                setIsRegistered,
                setEmailError,
                setPasswordError,
                setPasswordRepeatError
              )
            }
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
