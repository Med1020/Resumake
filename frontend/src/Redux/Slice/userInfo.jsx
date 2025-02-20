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
      let { fullName, email, jobTitle, phone, address } = action.payload;
      state.fullName = fullName;
      state.email = email;
      state.jobTitle = jobTitle;
      state.phone = phone;
      state.address = address;
    },
    cancelUpdate: (state) => {
      return state;
    },
  },
});

export const { updateUserDetails, cancelUpdate } = userInfo.actions;
export default userInfo.reducer;
