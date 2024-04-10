import { useDispatch, useSelector } from "react-redux";
import {
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
} from "../State/Slice/resumeContent";
import {
  setComponentInEditMode,
  setNewContent,
  setcomponentIsExpanded,
  toggleShowComponent,
} from "../State/Slice/displayComponent";

const useCustomHooks = () => {
  const dispatch = useDispatch();
  const {
    educationList,
    experienceList,
    projectList,
    skillList,
    awardList,
    courseList,
  } = useSelector((state) => state.resumeContent);
  // const { newContent } = useSelector((state) => state.showComponent);

  const handleDelete = (id, elementName) => {
    //education
    if (elementName === "education") {
      dispatch(removeeducationList(id));
      if (educationList.length <= 1) {
        dispatch(setNewContent(""));
        dispatch(toggleShowComponent({ section: "education", toShow: false }));
      }
    }
    //experience
    else if (elementName === "experience") {
      dispatch(removeexperienceList(id));
      if (experienceList.length <= 1) {
        dispatch(setNewContent(""));
        dispatch(toggleShowComponent({ section: "experience", toShow: false }));
      }
    }
    //project
    else if (elementName === "project") {
      dispatch(removeprojectList(id));
      if (projectList.length <= 1) {
        dispatch(setNewContent(""));
        dispatch(toggleShowComponent({ section: "project", toShow: false }));
      }
    }
    //skill
    else if (elementName === "skill") {
      dispatch(removeskillList(id));
      if (skillList.length <= 1) {
        dispatch(setNewContent(""));
        dispatch(toggleShowComponent({ section: "skill", toShow: false }));
      }
    }
    //course
    else if (elementName === "course") {
      dispatch(removecourseList(id));
      if (courseList.length <= 1) {
        dispatch(setNewContent(""));
        dispatch(toggleShowComponent({ section: "course", toShow: false }));
      }
    }
    //award
    else if (elementName === "award") {
      dispatch(removeawardList(id));
      if (awardList.length <= 1) {
        dispatch(setNewContent(""));
        dispatch(toggleShowComponent({ section: "award", toShow: false }));
      }
    }
  };
  const handleChange = (id, updatedElement, elementName) => {
    //education
    if (elementName === "education") {
      const existingEducation = educationList.filter((edu) => edu.id === id);
      if (existingEducation.length > 0) {
        dispatch(updateeducationList(updatedElement));
      } else {
        dispatch(addeducationList(updatedElement));
      }
    }
    //experience
    else if (elementName === "experience") {
      const existingExperience = experienceList.filter((exp) => exp.id === id);
      if (existingExperience.length > 0) {
        dispatch(updateexperienceList(updatedElement));
      } else {
        dispatch(addexperienceList(updatedElement));
      }
    }
    //project
    else if (elementName === "project") {
      const existingProject = projectList.filter((edu) => edu.id === id);
      if (existingProject.length > 0) {
        dispatch(updateprojectList(updatedElement));
      } else {
        dispatch(addprojectList(updatedElement));
      }
    }
    //skill
    else if (elementName === "skill") {
      const existingProject = skillList.filter((skill) => skill.id === id);
      if (existingProject.length > 0) {
        dispatch(updateskillList(updatedElement));
      } else {
        dispatch(addskillList(updatedElement));
      }
    }
    //award
    else if (elementName === "award") {
      const existingAward = awardList.filter((award) => award.id === id);
      if (existingAward.length > 0) {
        dispatch(updateawardList(updatedElement));
      } else {
        dispatch(addawardList(updatedElement));
      }
    }
    //course
    else if (elementName === "course") {
      const existingCourse = courseList.filter((course) => course.id === id);
      if (existingCourse.length > 0) {
        dispatch(updatecourseList(updatedElement));
      } else {
        dispatch(addcourseList(updatedElement));
      }
    }
  };

  const handleSave = ({ newState, elementName }) => {
    //education
    if (elementName === "education") {
      const existingEducation = educationList.filter(
        (edu) => edu.id === newState.id
      );
      if (!existingEducation.length > 0) {
        dispatch(addeducationList(newState));
      }
      dispatch(setComponentInEditMode(""));
      dispatch(setNewContent(""));
      dispatch(setcomponentIsExpanded("education"));
    }
    //experience
    else if (elementName === "experience") {
      const existingExperience = experienceList.filter(
        (edu) => edu.id === newState.id
      );
      if (!existingExperience.length > 0) {
        dispatch(addexperienceList(newState));
      }
      dispatch(setComponentInEditMode(""));
      dispatch(setNewContent(""));
      dispatch(setcomponentIsExpanded("experience"));
    }
    //project
    else if (elementName === "project") {
      const existingProject = projectList.filter(
        (proj) => proj.id === newState.id
      );
      if (!existingProject.length > 0) {
        dispatch(addprojectList(newState));
      }
      dispatch(setComponentInEditMode(""));
      dispatch(setNewContent(""));
      dispatch(setcomponentIsExpanded("project"));
    }
    //skill
    else if (elementName === "skill") {
      const existingSkill = skillList.filter(
        (skill) => skill.id === newState.id
      );
      if (!existingSkill.length > 0) {
        dispatch(addskillList(newState));
      }
      dispatch(setComponentInEditMode(""));
      dispatch(setNewContent(""));
      dispatch(setcomponentIsExpanded("skill"));
    }
    //course
    else if (elementName === "course") {
      const existingCourse = courseList.filter(
        (course) => course.id === newState.id
      );
      if (!existingCourse.length > 0) {
        dispatch(addcourseList(newState));
      }
      dispatch(setComponentInEditMode(""));
      dispatch(setNewContent(""));
      dispatch(setcomponentIsExpanded("course"));
    }
    //award
    else if (elementName === "award") {
      const existingAward = awardList.filter(
        (award) => award.id === newState.id
      );
      if (!existingAward.length > 0) {
        dispatch(addawardList(newState));
      }
      dispatch(setComponentInEditMode(""));
      dispatch(setNewContent(""));
      dispatch(setcomponentIsExpanded("award"));
    }
  };

  const handleCancel = ({ previousState, newState, elementName }) => {
    //education
    if (elementName === "education") {
      //first element
      if (educationList.length <= 1 && !previousState) {
        dispatch(toggleShowComponent({ section: "education", toShow: false }));
        dispatch(removeeducationList(newState.id));
        dispatch(setNewContent(""));
        dispatch(setcomponentIsExpanded(""));
      } else if (previousState) {
        // console.log(previousState);
        dispatch(updateeducationList(previousState));
      } else {
        dispatch(removeeducationList(newState.id));
      }
      dispatch(setComponentInEditMode(""));
      dispatch(setcomponentIsExpanded("education"));
    }
    //experience
    else if (elementName === "experience") {
      //first element
      if (experienceList.length <= 1 && !previousState) {
        dispatch(toggleShowComponent({ section: "experience", toShow: false }));
        dispatch(removeexperienceList(newState.id));
        dispatch(setNewContent(""));
        dispatch(setcomponentIsExpanded(""));
      } else if (previousState) {
        // console.log(previousState);
        dispatch(updateexperienceList(previousState));
      } else {
        dispatch(removeexperienceList(newState.id));
      }
      dispatch(setComponentInEditMode(""));
      dispatch(setcomponentIsExpanded("experience"));
    }
    //project
    else if (elementName === "project") {
      //first element
      if (projectList.length <= 1 && !previousState) {
        dispatch(toggleShowComponent({ section: "project", toShow: false }));
        dispatch(removeprojectList(newState.id));
        dispatch(setNewContent(""));
        dispatch(setcomponentIsExpanded(""));
      } else if (previousState) {
        console.log(previousState);
        dispatch(updateprojectList(previousState));
      } else {
        dispatch(removeprojectList(newState.id));
      }
      dispatch(setComponentInEditMode(""));
      dispatch(setcomponentIsExpanded("project"));
    }
    //skill
    else if (elementName === "skill") {
      //first element
      if (skillList.length <= 1 && !previousState) {
        dispatch(toggleShowComponent({ section: "skill", toShow: false }));
        dispatch(removeskillList(newState.id));
        dispatch(setNewContent(""));
        dispatch(setcomponentIsExpanded(""));
      } else if (previousState) {
        console.log(previousState);
        dispatch(updateskillList(previousState));
      } else {
        dispatch(removeskillList(newState.id));
      }
      dispatch(setComponentInEditMode(""));
      dispatch(setcomponentIsExpanded("skill"));
    }
    //award
    else if (elementName === "award") {
      //first element
      if (awardList.length <= 1 && !previousState) {
        dispatch(toggleShowComponent({ section: "award", toShow: false }));
        dispatch(removeawardList(newState.id));
        dispatch(setNewContent(""));
        dispatch(setcomponentIsExpanded(""));
      } else if (previousState) {
        console.log(previousState);
        dispatch(updateawardList(previousState));
      } else {
        dispatch(removeawardList(newState.id));
      }
      dispatch(setComponentInEditMode(""));
      dispatch(setcomponentIsExpanded("award"));
    }
    //course
    else if (elementName === "course") {
      //first element
      if (courseList.length <= 1 && !previousState) {
        dispatch(toggleShowComponent({ section: "course", toShow: false }));
        dispatch(removecourseList(newState.id));
        dispatch(setNewContent(""));
        dispatch(setcomponentIsExpanded(""));
      } else if (previousState) {
        console.log(previousState);
        dispatch(updatecourseList(previousState));
      } else {
        dispatch(removecourseList(newState.id));
      }
      dispatch(setComponentInEditMode(""));
      dispatch(setcomponentIsExpanded("course"));
    }
  };
  return { handleDelete, handleChange, handleCancel, handleSave };
};

export default useCustomHooks;
