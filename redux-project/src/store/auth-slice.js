import { createSlice } from "@reduxjs/toolkit";

const initAuthState = {
  isAuth: false,
  emailValue: "",
  passwordValue: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState: initAuthState,
  reducers: {
    login(state) {
      state.isAuth = true;
    },
    logout(state) {
      state.isAuth = false;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
