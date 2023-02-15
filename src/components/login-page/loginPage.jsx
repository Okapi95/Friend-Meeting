import React from "react";
import Button from "../usefulElements/button/button";
import classes from "./loginPage.module.less";
import Form from "../usefulElements/form/form";
import Input from "../usefulElements/form/input";
import AfterRegistration from "./afterRegistration/afterRegistration";
import { Outlet } from "react-router-dom";

function LoginPage() {
  return (
    <div>
      <div className={classes.loginPage}>
        <Form headline="Регистрация">
          <Input
            name="name"
            type="text"
            placeHolder="Ваше имя"
            required={true}
            autofocus={true}
          />
          <Input
            name="email"
            type="email"
            placeHolder="Ваш Email"
            required={true}
            autofocus={false}
          />
          <Input
            name="passwordRepeat"
            type="password"
            placeHolder="Введите пароль"
            required={true}
            autofocus={false}
          />
          <Input
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
