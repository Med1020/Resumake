import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setComponentInEditMode,
  setcomponentIsExpanded,
} from "../../State/Slice/displayComponent";
import CancelSave from "../CancelSaveBtns";
import Draggable from "react-draggable";
import { v4 as uuidv4 } from "uuid";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { MdOutlineDelete } from "react-icons/md";
import useCustomHooks from "../../customHooks/customHook";

const Project = () => {
  const { componentInEditMode, componentIsExpanded } = useSelector(
    (state) => state.showComponent
  );
  const { projectList } = useSelector((state) => state.resumeContent);

  const { handleDelete, handleChange, handleCancel, handleSave } =
    useCustomHooks();

  const dispatch = useDispatch();

  const [newProject, setNewProject] = useState({
    id: uuidv4(),
    title: "",
    subTitle: "",
    startDate: "",
    endDate: "",
    description: "",
  });
  const [previousState, setPreviousState] = useState(null);

  const onSave = () => {
    handleSave({ newState: newProject, elementName: "project" });
    setNewProject({
      id: uuidv4(),
      title: "",
      subTitle: "",
      startDate: "",
      endDate: "",
      description: "",
    });
    setPreviousState(null);
  };

  const onCancel = () => {
    handleCancel({
      previousState: previousState,
      newState: newProject,
      elementName: "project",
    });
    setNewProject({
      id: uuidv4(),
      title: "",
      subTitle: "",
      startDate: "",
      endDate: "",
      description: "",
    });
  };
  const onDelete = (id) => {
    handleDelete(id, "project");
  };
  const onChange = (e) => {
    const { name, value } = e.target;
    const updatedProject = { ...newProject, [name]: value };
    setNewProject(updatedProject);
    handleChange(newProject.id, updatedProject, "project");
  };
  const onEdit = (id) => {
    const [elementToEdit] = projectList.filter((exp) => exp.id === id);
    setNewProject(elementToEdit);
    setPreviousState(elementToEdit);
    dispatch(setComponentInEditMode("project"));
  };

  return (
    <div>
      {projectList.length > 0 && componentInEditMode === "" && (
        <div className="bg-white my-3 p-5 w-full rounded-lg ">
          <div
            className=" flex justify-between cursor-pointer"
            onClick={() =>
              dispatch(
                componentIsExpanded === "project"
                  ? dispatch(setcomponentIsExpanded(""))
                  : dispatch(setcomponentIsExpanded("project"))
              )
            }
          >
            <header className="p-1 text-xl font-bold text-neutral-700">
              Project
            </header>
            <button className="px-5">
              {componentIsExpanded === "project" ? (
                <IoIosArrowUp />
              ) : (
                <IoIosArrowDown />
              )}
            </button>
          </div>
          <div>
            {componentIsExpanded === "project" &&
              projectList.map(({ id, title, subTitle, startDate, endDate }) => (
                <Draggable axis="y">
                  <div className="my-3 p-5 w-full border-y-2 flex justify-between cursor-pointer  ">
                    <div className="w-full" onClick={() => onEdit(id)}>
                      <span className="font-bold">
                        {title}
                        <span>,</span>
                      </span>
                      <span className="font-italic">{subTitle}</span>
                      <p>
                        <span>{startDate}</span>
                        <span>|</span>
                        <span>{endDate}</span>
                      </p>
                    </div>
                    <div>
                      <button
                        className="bg-white hover:bg-gray-200 rounded-full p-4"
                        onClick={() => onDelete(id)}
                      >
                        <MdOutlineDelete />
                      </button>
                    </div>
                  </div>
                </Draggable>
              ))}
            {componentIsExpanded === "project" && (
              <div className="flex justify-center">
                <button
                  className="border rounded-2xl border-2 p-2"
                  onClick={() => dispatch(setComponentInEditMode("project"))}
                >
                  Add Project
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {componentInEditMode === "project" && (
        <>
          <div className="bg-white my-3 p-5 w-full rounded-lg shadow-lg ">
            <div className="p-1">
              <h1 className="text-xl font-bold mb-5">Create Project</h1>
              <label htmlFor="title" className="block py-2 font-semibold">
                Title
              </label>
              <input
                id="title"
                name="title"
                placeholder="Enter project Title"
                className="block border rounded-md border-gray-300 w-full p-2 mb-4 bg-gray-100"
                onChange={onChange}
                value={newProject.title}
              />
            </div>
            <div className="p-1">
              <label htmlFor="subTitle" className="block py-2 font-semibold">
                Sub Title
              </label>
              <input
                id="subTitle"
                name="subTitle"
                placeholder="Enter sub Title"
                className="block border rounded-md border-gray-300 w-full p-2 mb-4 bg-gray-100"
                onChange={onChange}
                value={newProject.subTitle}
              />
            </div>

            <div className="flex justify-between p-1">
              <div className="w-full mr-5">
                <label htmlFor="startDate" className="font-semibold">
                  Start Date
                </label>
                <input
                  id="startDate"
                  name="startDate"
                  // type="month"
                  className="block border rounded-md border-gray-300 w-full p-2 mb-4 bg-gray-100"
                  onChange={onChange}
                  value={newProject.startDate}
                />
              </div>
              <div className="w-full ">
                <label htmlFor="endDate" className="font-semibold">
                  End Date
                </label>
                <input
                  id="endDate"
                  name="endDate"
                  // type="month"
                  className="block border rounded-md border-gray-300 w-full p-2 mb-4 bg-gray-100"
                  onChange={onChange}
                  value={newProject.endDate}
                />
              </div>
            </div>
            {/* <div className="p-1 flex">
              <input type="checkbox" className="mr-2" />
              <label>Present</label>
            </div> */}
            <div className="p-1">
              <label htmlFor="description" className="font-semibold">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                className="block border rounded-md border-gray-300 w-full p-2 mb-4 bg-gray-100"
                onChange={onChange}
                value={newProject.description}
              />
            </div>
          </div>

          <CancelSave onCancel={onCancel} onSave={onSave} />
        </>
      )}
    </div>
  );
};

export default Project;
