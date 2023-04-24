import React, {useState} from "react";
import classes from "./entryPage.module.less";
import Form from "../usefulElements/usefulElements__form/usefulElements__form";
import Button from "../usefulElements/button/button";
import Input from "../usefulElements/usefulElements__form/input";
import svghideeye from "../../images/iconhideeye.svg";
import svgopeneye from "../../images/iconopeneye.svg";
import {Navigate} from "react-router-dom";
import {instance} from "../../axiosConfig";

function EntryPage({
  changeAuth,
  isLoggedIn,
  isVisiblePassword,
  setIsVisible,
}) {
  // const [isVisible, setIsVisible] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorDate, setErrorDate] = useState(false);

  const sendLoginRequest = () => {
    instance
      .post("/login", {
        username: email,
        password: password,
      })
      .then((response) => {
        console.log(response);
        changeAuth(true);
      })
      .catch((error) => {
        console.log(error);
        setErrorDate(true);
      });
  };

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
            placeHolder="Введите Email"
            required={true}
          />
          <div className={classes.entryPage__password}>
            <Input
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              name="password"
              // onBlur={(event) => blurHandler(event)}
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
          {isLoggedIn && <Navigate to={"/personal-page"} />}
        </div>
      </div>
    </div>
  );
}

export default EntryPage;
