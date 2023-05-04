import { internalRequestAxios } from "./axiosConfigBaseURL";

const controlAuthorization = async () => {
  try {
    await internalRequestAxios.get("/auth");
    console.log("тогда проходи дальше, access токен ещё жив ");
    return true;
  } catch (error) {
    console.log(
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
export { controlAuthorization };
