import React from "react";
import classes from "./exitPage.module.less";

import NotificationTemplate from "../usefulElements/usefulElements__notificationTemplate/usefulElements__notificationTemplate";
import Button from "../usefulElements/button/button";

import { authorizationSlice } from "../../store/features/authorizationSlice";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

import { internalRequestAxios } from "../../API-request/axiosConfigBaseURL";

function ExitPage() {
  const { changeAuthStatusToFalse } = authorizationSlice.actions;
  const dispatch = useDispatch();
  const authStatus = useSelector((state) => state.authStatus);
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <div className={classes.exitPage}>
      <div className={classes.exitPage__exitText}>
        <NotificationTemplate
          fontsize="32"
          text="Вы хотите выйти из личного кабинета?"
        />
      </div>
      <div className={classes.exitPage__buttonsShell}>
        <div className={classes.exitPage__shellButton}>
          <Button
            styleButton={classes.button_theme_light}
            onClick={async () => {
              await internalRequestAxios
                .get("/logout")
                .then(() => {
                  dispatch(changeAuthStatusToFalse());
                  console.log(authStatus);
                })
                .catch(() => {
                  console.log("ошибка запроса разлогина");
                });
            }}
          >
            Да
          </Button>
          {!authStatus && <Navigate to={"/"} />}
        </div>
        <div className={classes.exitPage__shellButton}>
          <Button
            styleButton={classes.button_theme_rich}
            onClick={() => {
              goBack();
            }}
          >
            Нет
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ExitPage;
