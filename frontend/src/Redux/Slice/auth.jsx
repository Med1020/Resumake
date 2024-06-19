import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const initialState = {
  isLoggedIn: false,
  resumeId: null,
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setLoginLogout: (state, action) => {
      state.isLoggedIn = action.payload;
      if (action.payload === false) {
        state.user = null;
        state.token = null;
      }
    },
    setResumeId: (state, action) => {
      state.resumeId = action.payload;
    },
    setCredentials: (state, action) => {
      const { user, accessToken } = action.payload;
      state.user = user;
      state.token = accessToken;
    },
  },
});

export const { setLoginLogout, setResumeId, setCredentials } =
  authSlice.actions;
export default authSlice.reducer;
