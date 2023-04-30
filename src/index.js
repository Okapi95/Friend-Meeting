import React from "react";
import ReactDOM from "react-dom/client";
import { legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const initialState = {
  authStatus: false,
};

const authenticationReducer = (state = initialState, action) => {
  switch (action.type) {
    case "authentication/changeAuthenticatedStatusToTrue":
      return {
        ...state,
        authStatus: true,
      };
    case "authentication/changeAuthenticatedStatusToFalse":
      return {
        ...state,
        authStatus: false,
      };

    default:
      return state;
  }
};

const store = createStore(authenticationReducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
