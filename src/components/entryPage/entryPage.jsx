import React from "react";
import classes from "./entryPage.module.less";
import Form from "../usefulElements/form/form";
import Button from "../usefulElements/button/button";
import Input from "../usefulElements/form/input";

function EntryPage() {
  return (
    <div>
      <div className={classes.entryPage}>
        <Form headline="Вход">
          <Input
            name="name"
            type="text"
            placeHolder="Введите имя"
            required={true}
            autofocus={true}
          />
          <Input
            name="email"
            type="email"
            placeHolder="Или введите Email"
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
        </Form>
        <div className={classes.buttonShellEntry}>
          <Button
            link="/personal-page"
            styleButton={classes.richButton}
            buttonName="Войти в личный кабинет"
          />
        </div>
      </div>
    </div>
  );
}

export default EntryPage;
