import { createSlice } from "@reduxjs/toolkit";

const displayComponent = createSlice({
  name: "ShowComponent",
  initialState: {
    education: {
      education: false,
      isExpanded: false,
    },
    project: {
      project: false,
      isExpanded: false,
    },
    experience: {
      experience: false,
      isExpanded: false,
    },
    profile: {
      profile: false,
      isexpanded: false,
    },
    course: {
      course: false,
      isExpanded: false,
    },
    skill: {
      skill: false,
      isExpanded: false,
    },
    certificate: {
      certificate: false,
      isExpanded: false,
    },
  },
  reducers: {
    toggleShowComponent: (state, action) => {
      state[action.payload][action.payload] =
        !state[action.payload][action.payload];
    },
    toggleExpandComponent: (state, action) => {
      state[action.payload]["isExpanded"] =
        !state[action.payload]["isExpanded"];
    },
  },
});

export const { toggleShowComponent, toggleExpandComponent } =
  displayComponent.actions;
export default displayComponent.reducer;
