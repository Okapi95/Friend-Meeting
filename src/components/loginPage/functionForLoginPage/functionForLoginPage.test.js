import { emailHandler, passwordHandler } from "./functionsForLoginPage";

describe("emailHandler", () => {
  it("should setRegisterEmail and setEmailError with empty string given correct email", () => {
    //дано
    const correctEmail = {
      target: {
        value: "my@gmail.com",
      },
    };
    const setRegisterEmailSpy = jest.fn();
    const setEmailErrorSpy = jest.fn();

    // вызов функции
    emailHandler(correctEmail, setRegisterEmailSpy, setEmailErrorSpy);

    // результат
    expect(setRegisterEmailSpy).toBeCalledWith(correctEmail.target.value);
    expect(setEmailErrorSpy).toBeCalledWith("");
  });

  it("должна вызываться функция setEmailError should invoke setEmailError with string", () => {
    const wrongEmail = {
      target: {
        value: "invalid-.email.@mail.ru",
      },
    };
    const setEmailErrorSpy = jest.fn();
    emailHandler(wrongEmail, jest.fn(), setEmailErrorSpy);
    expect(setEmailErrorSpy).toBeCalledWith("Неправильная почта");
  });
});

describe("passwordHandler function from LoginPage", () => {
  it("should invoke setRegisterPassword and setPasswordError with empty string", () => {
    const correctPassword = {
      target: {
        value: "Pass1wor!d",
      },
    };
    const setRegisterPasswordSpy = jest.fn();
    const setPasswordErrorSpy = jest.fn();
    passwordHandler(
      correctPassword,
      setRegisterPasswordSpy,
      setPasswordErrorSpy
    );
    expect(setRegisterPasswordSpy).toBeCalledWith(correctPassword.target.value);
    expect(setPasswordErrorSpy).toBeCalledWith("");
  });

  it("should invoke setPasswordError with string", () => {
    const wrongPassword = {
      target: {
        value: "noNumbertHH",
      },
    };
    const setPasswordErrorSpy = jest.fn();
    passwordHandler(wrongPassword, jest.fn(), setPasswordErrorSpy);
    expect(setPasswordErrorSpy).toBeCalledWith(
      "Пароль должен содержать минимум 6 латинских символов, минимум одну цифру, минимум одну букву в большом и малом регистре"
    );
  });
});
