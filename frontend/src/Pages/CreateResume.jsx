import React, { useState } from "react";
import ResumeName from "../Components/ResumeName";
import UserDetails from "../Components/UserDetails";
import ResumeView from "../Components/ResumeView";
import ContentModal from "../Components/ContentModal";
import Education from "../Components/ResumeContents/Education";
import { useSelector } from "react-redux";

const CreateResume = () => {
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => {
    setShowModal(false);
  };

  const { education } = useSelector((state) => state.showComponent.education);
  return (
    <div className="flex justify-around">
      <div className="w-1/2">
        <ResumeName />
        <UserDetails />
        {education && <Education />}
        <button
          className="my-2 p-2 border rounded-md bg-pink-500 text-white rounded-lg"
          onClick={() => setShowModal(true)}
        >
          Add Content
        </button>
      </div>
      <div className="bg-white w-1/3 h-screen">
        <ResumeView />
      </div>

      {showModal && <ContentModal handleCloseModal={handleCloseModal} />}
    </div>
  );
};

export default CreateResume;
