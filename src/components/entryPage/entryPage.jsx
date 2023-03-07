import React, { useEffect, useState } from "react";
import classes from "./entryPage.module.less";
import Form from "../usefulElements/form/form";
import Button from "../usefulElements/button/button";
import Input from "../usefulElements/form/input";

function EntryPage({ changeAuth }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // возможно этот код пригодиться
  // const blurHandler = (event) => {
  //   switch (event.target.name) {
  //     case "email":
  //       setEmailDirty(true);
  //       break;
  //     case "password":
  //       setPasswordDirty(true);
  //       break;
  //   }
  // };

  // useEffect(() => {
  //   if (emailError || passwordError) {
  //     setFormValid(false);
  //   } else {
  //     setFormValid(false);
  //   }
  // }, [emailError, passwordError]);

  return (
    <div>
      <div className={classes.entryPage}>
        <Form headline="Вход">
          <Input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            name="email"
            // onBlur={(event) => blurHandler(event)}
            type="email"
            placeHolder="Или введите Email"
            required={true}
          />
          <Input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            name="password"
            // onBlur={(event) => blurHandler(event)}
            type="password"
            placeHolder="Введите пароль"
            required={true}
          />
        </Form>
        <div className={classes.buttonShellEntry}>
          <Button
            link="/personal-page"
            styleButton={classes.richButton}
            buttonName="Войти в личный кабинет"
            onClick={() => changeAuth()}
          />
        </div>
      </div>
    </div>
  );
}

export default EntryPage;
