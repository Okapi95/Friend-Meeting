import React, { useState } from "react";
import classes from "./entryPage.module.less";

import Form from "../usefulElements/usefulElements__form/usefulElements__form";
import Button from "../usefulElements/button/button";
import Input from "../usefulElements/usefulElements__form/input";

import svghideeye from "../../images/iconhideeye.svg";
import svgopeneye from "../../images/iconopeneye.svg";

import { internalRequestAxios } from "../../API-request/axiosConfigBaseURL";

import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authorizationSlice } from "../../store/features/authorizationSlice";

function EntryPage({ isVisiblePassword, setIsVisible }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorDate, setErrorDate] = useState(false);

  const { changeAuthStatusToTrue } = authorizationSlice.actions;
  const dispatch = useDispatch();
  const authStatus = useSelector((state) => {
    console.log(state);
    return state.authorization.authStatus;
  });
  console.log(authStatus);

  const sendLoginRequest = () => {
    internalRequestAxios
      .post("/login", {
        username: email,
        password: password,
      })
      .then((response) => {
        console.log(response);
        // dispatch({ type: "authentication/changeAuthenticatedStatusToTrue" });
        dispatch(changeAuthStatusToTrue());
        console.log("ответ пришёл 200, пользователь залогинился");
      })
      .catch((error) => {
        console.log(error);
        setErrorDate(true);
      });
  };

  return (
    <div>
      <div className={classes.entryPage}>
        <Form headline="Вход">
          <Input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            name="email"
            type="email"
            placeHolder="Введите Email"
            required={true}
          />
          <div className={classes.entryPage__password}>
            <Input
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              name="password"
              type={isVisiblePassword ? "text" : "password"}
              placeHolder="Введите пароль"
              required={true}
            >
              <div
                className={classes.entryPage__iconVisiblePassword}
                onClick={() => setIsVisible(!isVisiblePassword)}
              >
                {isVisiblePassword ? (
                  <img src={svgopeneye} />
                ) : (
                  <img src={svghideeye} />
                )}
              </div>
            </Input>
          </div>
          {errorDate && <div>Неправильно введен email или пароль</div>}
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
    </div>
  );
}
export default EntryPage;
