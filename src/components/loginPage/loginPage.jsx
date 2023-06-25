import React from "react";
import { Navigate } from "react-router-dom";
import classes from "./loginPage.module.less";

import Form from "../usefulElements/usefulElements__form/usefulElements__form";
import Button from "../usefulElements/button/button";
import Input from "../usefulElements/usefulElements__form/input";
import SimpleTextBlock from "../usefulElements/simpleTextBlock/simpleTextBlock";

import svghideeye from "../../images/iconhideeye.svg";
import svgopeneye from "../../images/iconopeneye.svg";

function LoginPage({
  emailHandler,
  passwordHandler,
  passwordRepeatHandler,
  blurHandler,
  sendRegisterRequest,

  emailError,
  setEmailError,
  registerEmail,
  setRegisterEmail,
  passwordDirty,
  emailDirty,
  setEmailDirty,
  setPasswordDirty,

  registerPassword,
  setRegisterPassword,
  passwordError,
  setPasswordError,
  passwordRepeatDirty,
  passwordRepeatError,
  setPasswordRepeatDirty,
  isVisiblePassword,
  setIsVisiblePassword,
  setRegisterPasswordRepeat,
  setPasswordRepeatError,
  registerPasswordRepeat,
  setIsRegistered,
  isRegistered,
}) {
  return (
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
                setIsVisiblePassword((isVisiblePassword) => !isVisiblePassword)
              }
            >
              {isVisiblePassword ? (
                <img
                  src={svgopeneye}
                  alt="openeye"
                  style={{
                    width: "35px",
                    height: "35px",
                  }}
                />
              ) : (
                <img
                  src={svghideeye}
                  alt="hideeye"
                  style={{ width: "35px", height: "35px" }}
                />
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

        {isRegistered && <Navigate to="/user-has-registered" replace={true} />}
      </div>
    </div>
  );
}

export default LoginPage;
