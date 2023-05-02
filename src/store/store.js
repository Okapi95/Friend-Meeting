import { configureStore } from "@reduxjs/toolkit";
import authorizationReducer from "./features/authorizationSlice";

const store = configureStore({
  reducer: {
    authorization: authorizationReducer,
  },
  devTools: true,
});

export default store;
