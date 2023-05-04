import { configureStore } from "@reduxjs/toolkit";
import authorizationReducer from "./features/authorizationSlice";

import storage from "redux-persist/lib/storage";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  // не получается правильно задать значение, что бы состояние авторизации прекратило сохраняться в локал сторадж. P.s. при тестировании лучше закоментить функцию changeStartingStateAuthorization в APP
  blacklist: ["?"],
};
const persistedReducer = persistReducer(persistConfig, authorizationReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV !== "production",
});

export const persistor = persistStore(store);
export default store;
