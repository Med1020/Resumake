import { createSlice } from "@reduxjs/toolkit";

const displayComponent = createSlice({
  name: "ShowComponent",
  initialState: {
    componentInEditMode: "",
    newContent: "",
    componentIsExpanded: "",
    education: {
      education: false,
    },
    project: {
      project: false,
    },
    experience: {
      experience: false,
    },
    profile: {
      profile: false,
    },
    course: {
      course: false,
    },
    skill: {
      skill: false,
    },
    certificate: {
      certificate: false,
    },
    award: {
      award: false,
    },
  },
  reducers: {
    toggleShowComponent: (state, action) => {
      const { section, toShow } = action.payload;
      state[section][section] = toShow;
    },
    setcomponentIsExpanded: (state, action) => {
      state["componentIsExpanded"] = action.payload;
    },

    setComponentInEditMode: (state, action) => {
      state["componentInEditMode"] = action.payload;
    },
    setNewContent: (state, action) => {
      state["newContent"] = action.payload;
    },
  },
});

export const {
  toggleShowComponent,
  setcomponentIsExpanded,
  setComponentInEditMode,
  setNewContent,
} = displayComponent.actions;
export default displayComponent.reducer;
