import React, { useState } from "react";
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
import { DragDropContext, Droppable } from "react-beautiful-dnd";

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
  } = useSelector((state) => state.showComponent);

  const { componentInEditMode } = useSelector((state) => state.showComponent);
  const onDragEnd = () => {};

  return (
    <div className="flex justify-between">
      <div className="w-1/2 mx-10">
        <ResumeName />
        <UserDetails />
        <DragDropContext onDragEnd={onDragEnd}>
          {education && (
            <Droppable droppableId="edu">
              {(provided) => {
                <Education
                  innerRef={provided.innerRef}
                  {...provided.droppableProps}
                >
                  {provided.placeholder}
                </Education>;
              }}
            </Droppable>
          )}
          {experience && (
            <Droppable droppableId="exp">
              {(provided) => {
                <Experience
                  innerRef={provided.innerRef}
                  {...provided.droppableProps}
                >
                  {provided.placeholder}
                </Experience>;
              }}
            </Droppable>
          )}
          {project && <Project />}
          {skill && <Skill />}
          {course && <Course />}
          {award && <Award />}
        </DragDropContext>
        {!componentInEditMode && (
          <button
            className="my-2 p-2 border rounded-md bg-pink-500 text-white rounded-lg"
            onClick={() => setShowModal(true)}
          >
            Add Content
          </button>
        )}
      </div>
      <div className="bg-white w-1/2 my-5 mx-10 shadow-md min-h-screen">
        <ResumeView />
      </div>

      {showModal && <ContentModal handleCloseModal={handleCloseModal} />}
    </div>
  );
};

export default CreateResume;
