import { internalRequestAxios } from "../../../API-request/internalRequestAxios";
import {
  sendRegisterRequest,
  emailHandler,
  passwordHandler,
} from "./functionsForLoginPage";

describe("sendRegisterRequest", () => {
  it("should post-method with given parameters", async () => {
    const spy = jest.spyOn(internalRequestAxios, "post");
    await sendRegisterRequest(
      "test@mail.ru",
      "testpwd123",
      "testpwd123",
      jest.fn(),
      jest.fn(),
      jest.fn(),
      jest.fn()
    );
    expect(spy).toBeCalledWith("/auth/register", {
      email: "test@mail.ru",
      password: "testpwd123",
      confirmPassword: "testpwd123",
    });
  });

  it("should setIsRegistered with true given correct data", async () => {
    jest.spyOn(internalRequestAxios, "post").mockResolvedValueOnce();
    const setIsRegisteredSpy = jest.fn();
    await sendRegisterRequest(
      "test@mail.ru",
      "testpwd123",
      "testpwd123",
      setIsRegisteredSpy,
      jest.fn(),
      jest.fn(),
      jest.fn()
    );
    expect(setIsRegisteredSpy).toBeCalledWith(true);
  });

  it("should setEmailError given email already exists", async () => {
    jest.spyOn(internalRequestAxios, "post").mockRejectedValue({
      response: {
        data: {
          _embedded: {
            errors: [
              { message: "Пользователь с таким адресом уже существует" },
            ],
          },
        },
      },
    });
    const setEmailErrorSpy = jest.fn();
    await sendRegisterRequest(
      "test@mail.ru",
      "testpwd123",
      "testpwd123",
      jest.fn(),
      setEmailErrorSpy,
      jest.fn(),
      jest.fn()
    );
    expect(setEmailErrorSpy).toBeCalledWith(
      "Пользователь с таким адресом уже существует"
    );
  });

  it("should setPasswordError given weak password", async () => {
    jest.spyOn(internalRequestAxios, "post").mockRejectedValue({
      response: {
        data: {
          _embedded: {
            errors: [{ message: "Пароль не удовлетворяет условиям" }],
          },
        },
      },
    });
    const setPasswordErrorSpy = jest.fn();
    await sendRegisterRequest(
      "test@mail.ru",
      "testpwd123",
      "testpwd123",
      jest.fn(),
      jest.fn(),
      setPasswordErrorSpy,
      jest.fn()
    );
    expect(setPasswordErrorSpy).toBeCalledWith(
      "Пароль не удовлетворяет условиям"
    );
  });

  it("should setPasswordRepeatError given mismathed password", async () => {
    jest.spyOn(internalRequestAxios, "post").mockRejectedValue({
      response: {
        data: {
          _embedded: {
            errors: [{ message: "Пароли не совпадают" }],
          },
        },
      },
    });
    const setPasswordRepeatErrorSpy = jest.fn();
    await sendRegisterRequest(
      "test@mail.ru",
      "testpwd123",
      "testpwd123",
      jest.fn(),
      jest.fn(),
      jest.fn(),
      setPasswordRepeatErrorSpy
    );
    expect(setPasswordRepeatErrorSpy).toBeCalledWith("Пароли не совпадают");
  });
});

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

// describe("blurHandler function from LoginPage", () => {
//   it("should invoke setEmailDirty with true", () => {});
// });
