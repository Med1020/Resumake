import { createSlice } from "@reduxjs/toolkit";

const componentModal = createSlice({
  name: "Modal",
  initialState: {
    displayModal: false,
  },
  reducers: {
    toggleModal: (state) => {
      state.displayModal = !state.displayModal;
    },
  },
});

export const { toggleModal } = componentModal.actions;
export default componentModal.reducer;
