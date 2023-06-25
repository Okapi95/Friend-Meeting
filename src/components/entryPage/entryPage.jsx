import React from "react";
import classes from "./entryPage.module.less";

import Form from "../usefulElements/usefulElements__form/usefulElements__form";
import Button from "../usefulElements/button/button";
import Input from "../usefulElements/usefulElements__form/input";
import SimpleTextBlock from "../usefulElements/simpleTextBlock/simpleTextBlock";

import svghideeye from "../../images/iconhideeye.svg";
import svgopeneye from "../../images/iconopeneye.svg";

import { Navigate } from "react-router-dom";

function EntryPage({
  email,
  setEmail,
  password,
  setPassword,
  isVisiblePassword,
  setIsVisiblePassword,
  authStatus,
  errorDate,
  sendLoginRequest,
}) {
  return (
    <div className={classes.entryPage}>
      <Form headline="Вход">
        <Input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              sendLoginRequest();
            }
          }}
          name="email"
          type="email"
          placeHolder="Введите Email"
          required={true}
        />
        <div className={classes.entryPage__password}>
          <Input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                sendLoginRequest();
              }
            }}
            name="password"
            type={isVisiblePassword ? "text" : "password"}
            placeHolder="Введите пароль"
            required={true}
          >
            <div
              className={classes.entryPage__iconVisiblePassword}
              onClick={() =>
                setIsVisiblePassword((isVisiblePassword) => !isVisiblePassword)
              }
            >
              {isVisiblePassword ? (
                <img
                  src={svgopeneye}
                  alt="openeye"
                  style={{ width: "35px", height: "35px" }}
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
        {errorDate && (
          <SimpleTextBlock>Неверно введён логин или пароль</SimpleTextBlock>
        )}
      </Form>
      <div className={classes.entryPage__buttonShell}>
        <Button
          styleButton={classes.button_theme_rich}
          onClick={() => sendLoginRequest()}
        >
          Войти в личный кабинет
        </Button>
        {authStatus && <Navigate to={"/personal-page"} />}
      </div>
    </div>
  );
}

export default EntryPage;
