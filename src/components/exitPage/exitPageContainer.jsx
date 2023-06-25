import React from "react";

import ExitPage from "./exitPage";

import { authorizationSlice } from "../../store/features/authorizationSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { internalRequestAxios } from "../../API-request/internalRequestAxios";

function ExitPageContainer() {
  const { changeAuthStatusToFalse } = authorizationSlice.actions;
  const dispatch = useDispatch();
  const authStatus = useSelector((state) => state.authStatus);

  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  const logOutRequest = () => {
    internalRequestAxios
      .get("/logout")
      .then(() => {
        dispatch(changeAuthStatusToFalse());
        console.log(authStatus);
      })
      .catch(() => {
        console.log("ошибка запроса разлогина в ExitPage");
      });
  };

  return (
    <ExitPage
      logOutRequest={logOutRequest}
      authStatus={authStatus}
      goBack={goBack}
    />
  );
}

export default ExitPageContainer;
