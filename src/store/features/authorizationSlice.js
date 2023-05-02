import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authStatus: false,
};

export const authorizationSlice = createSlice({
  name: "authorization",
  initialState,
  reducers: {
    changeAuthStatusToTrue(state) {
      state.authStatus = true;
    },
    changeAuthStatusToFalse(state) {
      state.authStatus = false;
    },
  },
});

export const { changeAuthStatusToTrue, changeAuthStatusToFalse } =
  authorizationSlice.actions;
export default authorizationSlice.reducer;
