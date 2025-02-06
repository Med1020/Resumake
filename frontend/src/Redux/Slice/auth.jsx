import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  resumeId: null,
  user: null,
  token: null,
  resumeTemplate: "",
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
    setResumeTemplate: (state, action) => {
      state.resumeTemplate = action.payload;
    },
  },
});

export const {
  setLoginLogout,
  setResumeId,
  setCredentials,
  setResumeTemplate,
} = authSlice.actions;
export default authSlice.reducer;
