import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fullName: "",
  email: "",
  jobTitle: "",
  phone: "",
  address: "",
};
const userInfo = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    updateUserDetails: (state, action) => {
      return { ...state, ...action.payload };
    },
    cancelUpdate: (state, action) => {
      return { ...action.payload };
    },
  },
});

export const { updateUserDetails, cancelUpdate } = userInfo.actions;
export default userInfo.reducer;
