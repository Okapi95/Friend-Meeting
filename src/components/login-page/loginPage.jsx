import React, { useState } from "react";
import Button from "../usefulElements/button/button";
import classes from "./loginPage.module.less";
import Form from "../usefulElements/form/form";
import Input from "../usefulElements/form/input";

function LoginPage() {
  const [registerName, setRegisterName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerPasswordRepeat, setRegisterPasswordRepeat] = useState("");

  return (
    <div>
      <div className={classes.loginPage}>
        <Form headline="Регистрация">
          <Input
            value={registerName}
            onChange={(event) => {
              setRegisterName(event.target.value);
            }}
            name="name"
            type="text"
            placeHolder="Ваше имя"
            required={true}
            autofocus={true}
          />
          <Input
            value={registerEmail}
            onChange={(event) => {
              setRegisterEmail(event.target.value);
            }}
            name="email"
            type="email"
            placeHolder="Ваш Email"
            required={true}
            autofocus={false}
          />
          <Input
            value={registerPassword}
            onChange={(event) => {
              setRegisterPassword(event.target.value);
            }}
            name="password"
            type="password"
            placeHolder="Введите пароль"
            required={true}
            autofocus={false}
          />
          <Input
            onChange={(event) => {
              setRegisterPasswordRepeat(event.target.value);
            }}
            value={registerPasswordRepeat}
            name="passwordRepeat"
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
          />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
