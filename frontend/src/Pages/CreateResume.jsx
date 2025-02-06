import { useState } from "react";
import ResumeName from "../Components/ResumeName";
import UserDetails from "../Components/UserDetails";
import ResumeView from "../Components/ResumeView";
import ContentModal from "../Components/ContentModal";
import Education from "../Components/ResumeContents/Education";
import Experience from "../Components/ResumeContents/Experience";
import { useSelector } from "react-redux";
import Project from "../Components/ResumeContents/Project";
import Skill from "../Components/ResumeContents/Skill";
import Course from "../Components/ResumeContents/Course";
import Award from "../Components/ResumeContents/Award";
import SideNavBar from "../Components/SideNavBar";
import Certificate from "../Components/ResumeContents/Certificate";

import UseResumeData from "../customHooks/UseResumeData";

const CreateResume = () => {
  const [showModal, setShowModal] = useState(false);
  // const [resumes, setResumes] = useState([]);
  const resumeId = useSelector((state) => state.authSlice.resumeId);
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

  UseResumeData(resumeId);
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="flex max-w-full bg-gray-100 h-screen relative overflow-hidden">
      <div>
        <SideNavBar />
      </div>
      <div className="mx-5 w-[40%] h-screen overflow-auto scrollbar-hidden no-scrollbar">
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
            className="my-2 p-2 border bg-pink-500 text-white rounded-lg "
            onClick={() => setShowModal(true)}
          >
            Add Content
          </button>
        )}
      </div>

      <div className="mr-5 mb-5 w-[40%] h-screen box-border absolute right-0 overflow-auto no-scrollbar">
        <div className="bg-white shadow-md my-5 h-full">
          <ResumeView />
        </div>
      </div>

      {showModal && <ContentModal handleCloseModal={handleCloseModal} />}
 
        
  
    </div>
  );
};

export default CreateResume;

