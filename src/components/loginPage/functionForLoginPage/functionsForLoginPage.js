const emailHandler = (event, setRegisterEmail, setEmailError) => {
  setRegisterEmail(event.target.value);
  const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (!re.test(String(event.target.value).toLowerCase())) {
    setEmailError("Неправильная почта");
  } else {
    setEmailError("");
  }
};

const passwordHandler = (event, setRegisterPassword, setPasswordError) => {
  setRegisterPassword(event.target.value);
  const re = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g; // /^(.{0,7}|[^0-9]|[^A-Z]|[^a-z]|[a-zA-Z0-9]).{6,}$/i;
  if (!re.test(String(event.target.value))) {
    setPasswordError(
      "Пароль должен содержать минимум 6 латинских символов, минимум одну цифру, минимум одну букву в большом и малом регистре"
    );
  } else {
    setPasswordError("");
  }
};

const passwordRepeatHandler = (
  event,
  setRegisterPasswordRepeat,
  setPasswordRepeatError,
  registerPassword
) => {
  setRegisterPasswordRepeat(event.target.value);
  if (event.target.value === registerPassword) {
    setPasswordRepeatError("");
  } else {
    setPasswordRepeatError("Пароль не совпадает");
  }
};

const blurHandler = (
  event,
  setEmailDirty,
  setPasswordDirty,
  setPasswordRepeatDirty
) => {
  switch (event.target.name) {
    case "email":
      setEmailDirty(true);
      break;
    case "password":
      setPasswordDirty(true);
      break;
    case "passwordRepeat":
      setPasswordRepeatDirty(true);
      break;
  }
};

export { emailHandler, passwordHandler, passwordRepeatHandler, blurHandler };
