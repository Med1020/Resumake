import { useDispatch, useSelector } from "react-redux";
import {
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
} from "../Redux/Slice/resumeContent";
import {
  setComponentInEditMode,
  setNewContent,
  setcomponentIsExpanded,
  toggleShowComponent,
} from "../Redux/Slice/displayComponent";
import { updateUserDetails } from "../Redux/Slice/userInfo";
import {
  deleteResumeContent,
  postResumeContent,
  sendResumeData,
} from "../Requests/resumeContentaxios";

const useCustomHooks = () => {
  const dispatch = useDispatch();
  const {
    educationList,
    experienceList,
    projectList,
    skillList,
    awardList,
    courseList,
    certificateList,
  } = useSelector((state) => state.resumeContent);
  // const { newContent } = useSelector((state) => state.showComponent);
  const resumeId = useSelector((state) => state.authSlice.resumeId);

  const handleDelete = (id, elementName) => {
    //education
    deleteResumeContent(elementName, resumeId, id);
    console.log(id)
    if (elementName === "education") {
      dispatch(removeeducationList(id));
      if (educationList.length === 1) {
        dispatch(setNewContent(""));
        dispatch(toggleShowComponent({ section: "education", toShow: false }));
      }
    }
    //experience
    else if (elementName === "experience") {
      dispatch(removeexperienceList(id));
      if (experienceList.length === 1) {
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
    //certificate
    else if (elementName === "certificate") {
      dispatch(removecertificateList(id));
      if (certificateList.length <= 1) {
        dispatch(setNewContent(""));
        dispatch(
          toggleShowComponent({ section: "certificate", toShow: false })
        );
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
    //certificate
    else if (elementName === "certificate") {
      const existingCertificate = certificateList.filter(
        (certificate) => certificate.id === id
      );
      if (existingCertificate.length > 0) {
        dispatch(updatecertificateList(updatedElement));
      } else {
        dispatch(addcertificateList(updatedElement));
      }
    }
  };

  const handleSave = ({ newState, elementName }) => {
    //education
    postResumeContent(resumeId, elementName, newState);
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
    //certificate
    else if (elementName === "certificate") {
      const existingCertificate = certificateList.filter(
        (cert) => cert.id === newState.id
      );
      if (!existingCertificate.length > 0) {
        dispatch(addcertificateList(newState));
      }
      dispatch(setComponentInEditMode(""));
      dispatch(setNewContent(""));
      dispatch(setcomponentIsExpanded("certificate"));
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
    //certificate
    else if (elementName === "certificate") {
      //first element
      if (certificateList.length <= 1 && !previousState) {
        dispatch(
          toggleShowComponent({ section: "certificate", toShow: false })
        );
        dispatch(removecertificateList(newState.id));
        dispatch(setNewContent(""));
        dispatch(setcomponentIsExpanded(""));
      } else if (previousState) {
        dispatch(updatecertificateList(previousState));
      } else {
        dispatch(removecertificateList(newState.id));
      }
      dispatch(setComponentInEditMode(""));
      dispatch(setcomponentIsExpanded("certificate"));
    }
  };
  const handleDragEnd = ({ result, elementName }) => {
    //education
    if (elementName === "education") {
      const { destination, source, draggableId } = result;

      if (!destination) {
        return;
      }
      if (destination.index === source.index) {
        return;
      }
      const newEducationList = [...educationList];
      const draggedItem = newEducationList[source.index];
      newEducationList.splice(source.index, 1)[0];
      newEducationList.splice(destination.index, 0, draggedItem);
      dispatch(seteducationList(newEducationList));
    }
    //experience
    else if (elementName === "experience") {
      const { destination, source, draggableId } = result;

      if (!destination) {
        return;
      }
      if (destination.index === source.index) {
        return;
      }
      const newExperienceList = [...experienceList];
      const draggedItem = newExperienceList[source.index];
      newExperienceList.splice(source.index, 1)[0];
      newExperienceList.splice(destination.index, 0, draggedItem);
      dispatch(setexperienceList(newExperienceList));
    }
    //project
    else if (elementName === "project") {
      const { destination, source, draggableId } = result;

      if (!destination) {
        return;
      }
      if (destination.index === source.index) {
        return;
      }
      const newProjectList = [...projectList];
      const draggedItem = newProjectList[source.index];
      newProjectList.splice(source.index, 1)[0];
      newProjectList.splice(destination.index, 0, draggedItem);
      dispatch(setprojectList(newProjectList));
    }
    //skill
    else if (elementName === "skill") {
      const { destination, source, draggableId } = result;

      if (!destination) {
        return;
      }
      if (destination.index === source.index) {
        return;
      }
      const newSkillList = [...skillList];
      const draggedItem = newSkillList[source.index];
      newSkillList.splice(source.index, 1)[0];
      newSkillList.splice(destination.index, 0, draggedItem);
      dispatch(setskillList(newSkillList));
    }
    //award
    else if (elementName === "award") {
      const { destination, source, draggableId } = result;

      if (!destination) {
        return;
      }
      if (destination.index === source.index) {
        return;
      }
      const newAwardList = [...awardList];
      const draggedItem = newAwardList[source.index];
      newAwardList.splice(source.index, 1)[0];
      newAwardList.splice(destination.index, 0, draggedItem);
      dispatch(setawardList(newAwardList));
    }
    //course
    else if (elementName === "course") {
      const { destination, source, draggableId } = result;

      if (!destination) {
        return;
      }
      if (destination.index === source.index) {
        return;
      }
      const newcourseList = [...courseList];
      const draggedItem = newcourseList[source.index];
      newcourseList.splice(source.index, 1)[0];
      newcourseList.splice(destination.index, 0, draggedItem);
      dispatch(setcourseList(newcourseList));
    }
    //course
    else if (elementName === "certificate") {
      const { destination, source, draggableId } = result;

      if (!destination) {
        return;
      }
      if (destination.index === source.index) {
        return;
      }
      const newcertificateList = [...certificateList];
      const draggedItem = newcertificateList[source.index];
      newcertificateList.splice(source.index, 1)[0];
      newcertificateList.splice(destination.index, 0, draggedItem);
      dispatch(setcertificateList(newcertificateList));
    }
  };
  const handleAddUserInfo = (info) => {
    dispatch(updateUserDetails(info));
  };

  return {
    handleDelete,
    handleChange,
    handleCancel,
    handleSave,
    handleDragEnd,
    handleAddUserInfo,
  };
};

export default useCustomHooks;
