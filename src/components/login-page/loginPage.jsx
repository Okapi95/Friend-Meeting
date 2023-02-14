import React from "react";
import Button from "../usefulElements/button/button";
import classes from "./loginPage.module.less";
import Form from "../usefulElements/form/form";
import Input from "../usefulElements/form/input";
import NotificationTemplate from "../usefulElements/notificationTemplate/notificationTemplate";

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
            link=""
            styleButton={classes.richButton}
            buttonName="Зарегистрироваться"
          />
        </div>

        <div className={classes.inviteToPersonalPage}>
          <NotificationTemplate
            fontsize="28"
            text="Вы зарегистрировались! Теперь у вас есть доступ в Личный кабинет"
          />
          <div className={classes.buttonShellPersonal}>
            <Button
              buttonName="Личный кабинет"
              link=""
              styleButton={classes.richButton}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
