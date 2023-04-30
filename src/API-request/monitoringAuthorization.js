import { internalRequestAxios } from "./axiosConfigBaseURL";

const monitoringAuthorization = async () => {
  try {
    await internalRequestAxios.get("/auth");
    console.log("тогда проходи дальше в поздравление с созданием комнаты  ");
    return true;
  } catch (error) {
    console.log(
      error +
        "   пользователь не аутенцифицирован или аксес-токен протух (надо зарефрешить аксес и рефреш токены)..."
    );
    return await internalRequestAxios
      .get("/oauth/access_token")
      .then(() => {
        return true;
      })
      .catch(() => {
        console.log("сработала ошибка запроса рефреш-токена, return false");
        return false;
      });
  }
};
export { monitoringAuthorization };
