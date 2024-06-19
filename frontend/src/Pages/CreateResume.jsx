import React, { useEffect, useState } from "react";
import ResumeName from "../Components/ResumeName";
import UserDetails from "../Components/UserDetails";
import ResumeView from "../Components/ResumeView";
import ContentModal from "../Components/ContentModal";
import Education from "../Components/ResumeContents/Education";
import Experience from "../Components/ResumeContents/Experience";
import { useDispatch, useSelector } from "react-redux";
import Project from "../Components/ResumeContents/Project";
import Skill from "../Components/ResumeContents/Skill";
import Course from "../Components/ResumeContents/Course";
import Award from "../Components/ResumeContents/Award";
import SideNavBar from "../Components/SideNavBar";
import Certificate from "../Components/ResumeContents/Certificate";
import { getResumeData, getResumes } from "../Requests/resumeContentaxios";
import { updateUserDetails } from "../Redux/Slice/userInfo";
import {
  setcertificateList,
  setcourseList,
  seteducationList,
  setexperienceList,
  setskillList,
} from "../Redux/Slice/resumeContent";
import { toggleShowComponent } from "../Redux/Slice/displayComponent";

const CreateResume = () => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  // const [resumes, setResumes] = useState([]);
  const resumeId = useSelector((state) => state.authSlice.resumeId);
  const educationList = useSelector((state) => state.resumeContent);
  const { componentInEditMode } = useSelector((state) => state.showComponent);

  const {
    education: { education },
    experience: { experience },
    project: { project },
    skill: { skill },
    course: { course },
    award: { award },
    certificate: { certificate },
  } = useSelector((state) => state.showComponent);

  // console.log(education);
  const handleCloseModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    const r = async () => {
      try {
        const response = await getResumes();
        // console.log(response.data);
        // setResumes(response.data);

        let resumeList = response.data;
        let [
          {
            education,
            skill,
            course,
            certificate,
            award,
            project,
            experience,
            ...rest
          },
        ] = resumeList.filter((resume) => resume._id === resumeId);

        if (education && education.length > 0) {
          dispatch(toggleShowComponent({ section: "education", toShow: true }));
          dispatch(seteducationList(education));
        }
        if (experience && experience.length > 0) {
          dispatch(
            toggleShowComponent({ section: "experience", toShow: true })
          );
          dispatch(setexperienceList(experience));
        }
        if (skill && skill.length > 0) {
          dispatch(toggleShowComponent({ section: "skill", toShow: true }));
          dispatch(setskillList(skill));
        }
        if (course && course.length > 0) {
          dispatch(toggleShowComponent({ section: "course", toShow: true }));
          dispatch(setcourseList(course));
        }
        if (certificate && certificate.length > 0) {
          dispatch(
            toggleShowComponent({ section: "certificate", toShow: true })
          );
          dispatch(setcertificateList(certificate));
        }

        // award?.map((award) => handleChange(award._id, award, "award"));
        // project?.map((project) =>
        //   handleChange(project._id, project, "project")
        // );

        dispatch(updateUserDetails(rest));
      } catch (e) {
        console.log(e);
      }
    };
    r();
  }, []);

  return (
    <div className="flex max-w-full min-h-screen scrollbar-hide relative">
      <div>
        <SideNavBar />
      </div>
      <div className="mx-5 w-1/3">
        <ResumeName />
        <UserDetails />

        {education && <Education />}
        {experience && <Experience />}
        {project && <Project />}
        {skill && <Skill />}
        {course && <Course />}
        {award && <Award />}
        {certificate && <Certificate />}

        {!componentInEditMode && (
          <button
            className="my-2 p-2 border  bg-pink-500 text-white rounded-lg"
            onClick={() => setShowModal(true)}
          >
            Add Content
          </button>
        )}
      </div>

      <div className="mr-5 z-10 w-1/2 fixed right-0">
        <div className="bg-white shadow-md my-5 min-h-screen">
          <ResumeView />
        </div>
      </div>

      {showModal && <ContentModal handleCloseModal={handleCloseModal} />}
    </div>
  );
};

export default CreateResume;
