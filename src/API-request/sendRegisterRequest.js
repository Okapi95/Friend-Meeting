import { internalRequestAxios } from "./internalRequestAxios";

const sendRegisterRequest = async (
  registerEmail,
  registerPassword,
  registerPasswordRepeat,
  setIsRegistered,
  setEmailError,
  setPasswordError,
  setPasswordRepeatError
) => {
  try {
    await internalRequestAxios.post("/auth/register", {
      email: registerEmail,
      password: registerPassword,
      confirmPassword: registerPasswordRepeat,
    });
    setIsRegistered(true);
  } catch (error) {
    const errorMessage = error.response.data._embedded.errors[0].message;
    if (errorMessage === "Пользователь с таким адресом уже существует") {
      setEmailError("Пользователь с таким адресом уже существует");
    } else if (errorMessage === "Пароль не удовлетворяет условиям") {
      setPasswordError("Пароль не удовлетворяет условиям");
    } else {
      setPasswordRepeatError("Пароли не совпадают");
    }
  }
};

export { sendRegisterRequest };
