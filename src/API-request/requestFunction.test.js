import { internalRequestAxios } from "./internalRequestAxios";
import { sendRegisterRequest } from "./sendRegisterRequest";

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
