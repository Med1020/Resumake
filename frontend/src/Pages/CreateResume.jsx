import React, { useEffect, useState } from "react";
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

const CreateResume = () => {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const {
    education: { education },
    experience: { experience },
    project: { project },
    skill: { skill },
    course: { course },
    award: { award },
    certificate: { certificate },
  } = useSelector((state) => state.showComponent);

  const { componentInEditMode } = useSelector((state) => state.showComponent);

  return (
    <div className="flex justify-between">
      <div>
        <SideNavBar />
      </div>
      <div className="w-1/2 mx-10">
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
            className="my-2 p-2 border rounded-md bg-pink-500 text-white rounded-lg"
            onClick={() => setShowModal(true)}
          >
            Add Content
          </button>
        )}
      </div>
      <div className=" w-1/2 mx-10">
        <div className="bg-white shadow-md m-8 min-h-screen">
          <ResumeView />
        </div>
      </div>

      {showModal && <ContentModal handleCloseModal={handleCloseModal} />}
    </div>
  );
};

export default CreateResume;
