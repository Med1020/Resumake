import { createSlice } from "@reduxjs/toolkit";

const createListReducer = (listName) => ({
  [`add${listName}`]: (state, action) => {
    state[listName].push(action.payload);
  },
  [`update${listName}`]: (state, action) => {
    const { id, ...updatedItem } = action.payload;
    const existingItem = state[listName].find((item) => item.id === id);
    if (existingItem) {
      Object.assign(existingItem, updatedItem);
    }
  },
  [`remove${listName}`]: (state, action) => {
    state[listName] = state[listName].filter(
      (item) => item.id !== action.payload
    );
  },
  [`set${listName}`]: (state, action) => {
    state[listName] = action.payload;
  },
});

const resumeContent = createSlice({
  name: "ResumeContent",
  initialState: {
    educationList: [],
    experienceList: [],
    projectList: [],
    skillList: [],
    awardList: [],
    courseList: [],
    certificateList: [],
    profileSummary: "",
  },
  reducers: {
    ...createListReducer("educationList"),
    ...createListReducer("experienceList"),
    ...createListReducer("projectList"),
    ...createListReducer("skillList"),
    ...createListReducer("awardList"),
    ...createListReducer("courseList"),
    ...createListReducer("certificateList"),
    // addEducation: (state, action) => {
    //   state.educationList.push(action.payload);
    // },
    // updateEducation: (state, action) => {
    //   const { id, ...updatedEducation } = action.payload;
    //   const existingEducation = state.educationList.find(
    //     (edu) => edu.id === id
    //   );
    //   if (existingEducation) {
    //     Object.assign(existingEducation, updatedEducation);
    //   }
    // },
    // removeEducation: (state, action) => {
    //   state.educationList = state.educationList.filter(
    //     (edu) => edu.id !== action.payload
    //   );
    // },
    // addExperience: (state, action) => {
    //   state.experienceList.push(action.payload);
    // },
    // updateExperience: (state, action) => {
    //   const { id, ...updatedExperience } = action.payload;
    //   const existingExperience = state.experienceList.find(
    //     (edu) => edu.id === id
    //   );
    //   if (existingExperience) {
    //     Object.assign(existingExperience, updatedExperience);
    //   }
    // },
    // removeExperience: (state, action) => {
    //   state.experienceList = state.experienceList.filter(
    //     (exp) => exp.id !== action.payload
    //   );
    // },
  },
});

export const {
  addeducationList,
  updateeducationList,
  removeeducationList,
  seteducationList,
  addexperienceList,
  updateexperienceList,
  removeexperienceList,
  setexperienceList,
  addprojectList,
  updateprojectList,
  removeprojectList,
  setprojectList,
  addskillList,
  updateskillList,
  removeskillList,
  setskillList,
  addawardList,
  updateawardList,
  removeawardList,
  setawardList,
  addcourseList,
  updatecourseList,
  removecourseList,
  setcourseList,
  addcertificateList,
  updatecertificateList,
  removecertificateList,
  setcertificateList,
} = resumeContent.actions;
export default resumeContent.reducer;
