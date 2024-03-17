import { createSlice } from "@reduxjs/toolkit";

const resumeContent = createSlice({
  name: "ResumeContent",
  initialState: {
    educationList: [],
    experienceList: [],
    projectList: [],
    profileSummary: "",
  },
  reducers: {
    addEducation: (state, action) => {
      state.educationList.push(action.payload);
    },
    updateEducation: (state, action) => {
      state.education = [
        ...state.educationList.filter((edu) => edu.id !== action.payload.id),
        action.payload,
      ];
    },
    removeEducation: (state, action) => {
      state.educationList = state.educationList.filter(
        (edu) => edu.id !== action.payload
      );
    },
    addExperience: (state, action) => {
      state.experienceList.push(action.payload);
    },
    updateExperience: (state, action) => {
      state.experienceList = [
        ...state.experienceList.filter((exp) => exp.id !== action.payload.id),
        action.payload,
      ];
    },
    removeExperience: (state, action) => {
      state.experienceList = state.experienceList.filter(
        (exp) => exp.id !== action.payload
      );
    },
    addProject: (state, action) => {
      state.projectList.push(action.payload);
    },
    updateProject: (state, action) => {
      state.projectList = [
        ...state.projectList.filter((proj) => poj.id !== action.payload.id),
        action.payload,
      ];
    },
    removeProject: (state, action) => {
      state.projectList = state.projectList.filter(
        (proj) => proj.id !== action.payload
      );
    },
    addProfileSummary: (state, action) => {
      state.profileSummary = action.payload;
    },
    updateProfileSummary: (state, action) => {
      state.profile = action.payload;
    },
    removeProfileSummary: (state, action) => {
      state.profileSummary = "";
    },
  },
});

export const {
  addEducation,
  updateEducation,
  removeEducation,
  addExperience,
  updateExperience,
  removeExperience,
  addProject,
  updateProject,
  removeProject,
  addProfileSummary,
  updateProfileSummary,
  removeProfileSummary,
} = resumeContent.actions;
export default resumeContent.reducer;
