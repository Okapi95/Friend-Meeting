import React from "react";
import { Navigate } from "react-router-dom";
import classes from "./loginPage.module.less";

import Form from "../usefulElements/usefulElements__form/usefulElements__form";
import Button from "../usefulElements/button/button";
import Input from "../usefulElements/usefulElements__form/input";
import SimpleTextBlock from "../usefulElements/simpleTextBlock/simpleTextBlock";

import svghideeye from "../../images/iconhideeye.svg";
import svgopeneye from "../../images/iconopeneye.svg";

import {
  emailHandler,
  passwordHandler,
  passwordRepeatHandler,
  blurHandler,
} from "./functionForLoginPage/functionsForLoginPage";

import { sendRegisterRequest } from "../../API-request/sendRegisterRequest";

function LoginPage({
  inputValueProps,
  allErrorProps,
  dirtyProps,
  visiblePasswordProps,
  isRegisteredProps,
}) {
  return (
    <div className={classes.loginPage}>
      <Form headline="Регистрация">
        {dirtyProps.emailDirty && allErrorProps.emailError && (
          <SimpleTextBlock>{allErrorProps.emailError}</SimpleTextBlock>
        )}
        <Input
          value={inputValueProps.registerEmail}
          onChange={(event) =>
            emailHandler(
              event,
              inputValueProps.setRegisterEmail,
              allErrorProps.setEmailError
            )
          }
          name="email"
          onBlur={(event) =>
            blurHandler(
              event,
              dirtyProps.setEmailDirty,
              dirtyProps.setPasswordDirty,
              dirtyProps.setPasswordRepeatDirty
            )
          }
          type="email"
          placeHolder="Ваш Email"
          required={true}
          autofocus={false}
        />
        {dirtyProps.passwordDirty && allErrorProps.passwordError && (
          <SimpleTextBlock>{allErrorProps.passwordError}</SimpleTextBlock>
        )}
        <div className={classes.loginPage__password}>
          <Input
            value={inputValueProps.registerPassword}
            onChange={(event) =>
              passwordHandler(
                event,
                inputValueProps.setRegisterPassword,
                allErrorProps.setPasswordError
              )
            }
            name="password"
            onBlur={(event) =>
              blurHandler(
                event,
                dirtyProps.setEmailDirty,
                dirtyProps.setPasswordDirty,
                dirtyProps.setPasswordRepeatDirty
              )
            }
            type={visiblePasswordProps.isVisiblePassword ? "text" : "password"}
            placeHolder="Введите пароль"
            required={true}
            autofocus={false}
          >
            <div
              className={classes.loginPage__visiblePassword}
              onClick={() =>
                visiblePasswordProps.setIsVisiblePassword(
                  (isVisiblePassword) => !isVisiblePassword
                )
              }
            >
              {visiblePasswordProps.isVisiblePassword ? (
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
        {dirtyProps.passwordRepeatDirty &&
          allErrorProps.passwordRepeatError && (
            <SimpleTextBlock>
              {allErrorProps.passwordRepeatError}
            </SimpleTextBlock>
          )}
        <Input
          onChange={(event) =>
            passwordRepeatHandler(
              event,
              inputValueProps.setRegisterPasswordRepeat,
              allErrorProps.setPasswordRepeatError,
              inputValueProps.registerPassword
            )
          }
          value={inputValueProps.registerPasswordRepeat}
          name="passwordRepeat"
          onBlur={(event) =>
            blurHandler(
              event,
              dirtyProps.setEmailDirty,
              dirtyProps.setPasswordDirty,
              dirtyProps.setPasswordRepeatDirty
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
              inputValueProps.registerEmail,
              inputValueProps.registerPassword,
              inputValueProps.registerPasswordRepeat,
              isRegisteredProps.setIsRegistered,
              allErrorProps.setEmailError,
              allErrorProps.setPasswordError,
              allErrorProps.setPasswordRepeatError
            )
          }
        >
          Зарегистрироваться
        </Button>

        {isRegisteredProps.isRegistered && (
          <Navigate to="/user-has-registered" replace={true} />
        )}
      </div>
    </div>
  );
}

export default LoginPage;
