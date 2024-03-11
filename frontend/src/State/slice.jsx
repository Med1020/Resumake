import { createSlice } from "@reduxjs/toolkit";

const userDetailsSlice = createSlice({
  name: "user_Details",
  initialState: {
    fullName: "",
    email: "",
    jobTitle: "",
    phone: "",
    address: "",
  },
  reducers: {
    setName: (state, action) => {
      state.fullName = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setJobTitle: (state, action) => {
      state.jobTitle = action.payload;
    },
    setPhone: (state, action) => {
      state.phone = action.payload;
    },
    setAddress: (state, action) => {
      state.address = action.payload;
    },
  },
});

export const { setName, setEmail, setJobTitle, setPhone, setAddress } =
  userDetailsSlice.actions;
export default userDetailsSlice.reducer;
