import { internalRequestAxios } from "../../API-request/internalRequestAxios";
import { sendRegisterRequest } from "./functionsForLoginPage";

describe("sendRegisterRequest function in LoginPage", () => {
  it("should invoke post method", async () => {
    const spy = jest
      .spyOn(internalRequestAxios, "post")
      .mockImplementationOnce(() => Promise.resolve());
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

    expect(spy).toHaveBeenCalledWith("/auth/register", {
      email: "test@mail.ru",
      password: "testpwd123",
      confirmPassword: "testpwd123",
    });
    expect(setIsRegisteredSpy).toBeCalledWith(true);
  });

  it("should invoke setEmailError", async () => {
    const spy = jest
      .spyOn(internalRequestAxios, "post")
      .mockImplementationOnce(() =>
        Promise.reject({
          response: {
            data: {
              _embedded: {
                errors: [
                  { message: "Пользователь с таким адресом уже существует" },
                ],
              },
            },
          },
        })
      );
    const setEmailErrorSpy = jest.fn();
    await await sendRegisterRequest(
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
});
