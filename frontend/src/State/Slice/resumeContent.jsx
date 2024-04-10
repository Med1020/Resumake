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
    profileSummary: "",
  },
  reducers: {
    ...createListReducer("educationList"),
    ...createListReducer("experienceList"),
    ...createListReducer("projectList"),
    ...createListReducer("skillList"),
    ...createListReducer("awardList"),
    ...createListReducer("courseList"),
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
  addexperienceList,
  updateexperienceList,
  removeexperienceList,
  addprojectList,
  updateprojectList,
  removeprojectList,
  addskillList,
  updateskillList,
  removeskillList,
  addawardList,
  updateawardList,
  removeawardList,
  addcourseList,
  updatecourseList,
  removecourseList,
} = resumeContent.actions;
export default resumeContent.reducer;
