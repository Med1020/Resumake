import { createSlice } from "@reduxjs/toolkit";

const userInfo = createSlice({
  name: "userInfo",
  initialState: {
    fullName: "",
    email: "",
    jobTitle: "",
    phone: "",
    address: "",
  },
  reducers: {
    updateUserDetails: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateUserDetails } = userInfo.actions;
export default userInfo.reducer;
