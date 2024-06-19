import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setComponentInEditMode,
  setcomponentIsExpanded,
} from "../../Redux/Slice/displayComponent";
import CancelSave from "../CancelSaveBtns";
import { v4 as uuidv4 } from "uuid";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { MdOutlineDelete } from "react-icons/md";
import useCustomHooks from "../../customHooks/customHook";
import { RxDragHandleDots2 } from "react-icons/rx";
import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd";

const Experience = () => {
  const { componentInEditMode, newContent, componentIsExpanded } = useSelector(
    (state) => state.showComponent
  );
  const { experienceList } = useSelector((state) => state.resumeContent);

  const {
    handleDelete,
    handleChange,
    handleCancel,
    handleSave,
    handleDragEnd,
  } = useCustomHooks();

  const dispatch = useDispatch();

  const [newExperience, setNewExperience] = useState({
    id: uuidv4(),
    employer: "",
    jobTitle: "",
    city: "",
    country: "",
    startDate: "",
    endDate: "",
    description: "",
  });
  const [previousState, setPreviousState] = useState(null);

  const onSave = () => {
    handleSave({ newState: newExperience, elementName: "experience" });
    setNewExperience({
      id: uuidv4(),
      employer: "",
      jobTitle: "",
      city: "",
      country: "",
      startDate: "",
      endDate: "",
      description: "",
    });
    setPreviousState(null);
  };

  const onCancel = () => {
    handleCancel({
      previousState: previousState,
      newState: newExperience,
      elementName: "experience",
    });
    setNewExperience({
      id: uuidv4(),
      employer: "",
      jobTitle: "",
      city: "",
      country: "",
      startDate: "",
      endDate: "",
      description: "",
    });
  };
  const onDelete = (id) => {
    handleDelete(id, "experience");
  };
  const onChange = (e) => {
    const { name, value } = e.target;
    const updatedExperience = { ...newExperience, [name]: value };
    setNewExperience(updatedExperience);
    handleChange(newExperience.id, updatedExperience, "experience");
  };
  const onEdit = (id) => {
    const [elementToEdit] = experienceList.filter((exp) => exp._id === id);
    setNewExperience(elementToEdit);
    setPreviousState(elementToEdit);
    dispatch(setComponentInEditMode("experience"));
  };
  const onDragEnd = (result) => {
    handleDragEnd({ result: result, elementName: "experience" });
  };

  return (
    <div>
      {experienceList.length > 0 && componentInEditMode === "" && (
        <div className="bg-white my-3 p-5 w-full rounded-lg ">
          <div className=" flex items-center">
            <div className="cursor-move">
              <RxDragHandleDots2 />
            </div>
            <div
              className=" flex justify-between w-full cursor-pointer"
              onClick={() =>
                dispatch(
                  componentIsExpanded === "experience"
                    ? dispatch(setcomponentIsExpanded(""))
                    : dispatch(setcomponentIsExpanded("experience"))
                )
              }
            >
              <header className="p-1 text-xl font-bold text-neutral-700">
                Experience
              </header>
              <button className="px-5">
                {componentIsExpanded === "experience" ? (
                  <IoIosArrowUp />
                ) : (
                  <IoIosArrowDown />
                )}
              </button>
            </div>
          </div>
          <div>
            <DragDropContext onDragEnd={onDragEnd}>
              <Droppable droppableId="experience">
                {(droppableProvider) => (
                  <div
                    ref={droppableProvider.innerRef}
                    {...droppableProvider.droppableProps}
                  >
                    {componentIsExpanded === "experience" &&
                      experienceList.map(
                        (
                          {
                            _id,
                            employer,
                            jobTitle,
                            city,
                            country,
                            startDate,
                            endDate,
                          },
                          index
                        ) => (
                          <Draggable
                            draggableId={String(_id)}
                            index={index}
                            key={_id}
                          >
                            {(draggableProvider) => (
                              <div
                                className="p-5 w-full border-b-2 flex justify-between cursor-pointer"
                                ref={draggableProvider.innerRef}
                                {...draggableProvider.draggableProps}
                              >
                                <div
                                  className="flex justify-center items-center p-4 cursor-move "
                                  {...draggableProvider.dragHandleProps}
                                >
                                  <RxDragHandleDots2 />
                                </div>
                                <div
                                  className="w-full"
                                  onClick={() => onEdit(_id)}
                                >
                                  <span className="font-bold">
                                    {employer}
                                    <span>,</span>
                                  </span>
                                  <span className="font-italic">
                                    {jobTitle}
                                  </span>
                                  <p>
                                    {city}
                                    <span>|</span> {country}
                                    <span>|</span> {startDate}
                                    <span>|</span>
                                    {endDate}
                                  </p>
                                </div>
                                <div>
                                  <button
                                    className="bg-white hover:bg-gray-200 rounded-full p-4"
                                    onClick={() => onDelete(_id)}
                                  >
                                    <MdOutlineDelete />
                                  </button>
                                </div>
                              </div>
                            )}
                          </Draggable>
                        )
                      )}
                    {droppableProvider.placeholder}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
            {componentIsExpanded === "experience" && (
              <div className="flex justify-center">
                <button
                  className="rounded-2xl border-2 p-2 mt-4"
                  onClick={() => dispatch(setComponentInEditMode("experience"))}
                >
                  Add Experience
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {componentInEditMode === "experience" && (
        <>
          <div className="bg-white my-3 p-5 w-full rounded-lg shadow-lg ">
            <div className="p-1">
              <h1 className="text-xl font-bold mb-5">Create Experience</h1>
              <label htmlFor="employer" className="block py-2 font-semibold">
                Employer
              </label>
              <input
                id="employer"
                name="employer"
                placeholder="Enter company name"
                className="block border rounded-md border-gray-300 w-full p-2 mb-4 bg-gray-100"
                onChange={onChange}
                value={newExperience.employer}
              />
            </div>
            <div className="p-1">
              <label htmlFor="jobTitle" className="block py-2 font-semibold">
                Job Title
              </label>
              <input
                id="jobTitle"
                name="jobTitle"
                placeholder="Enter Job Title"
                className="block border rounded-md border-gray-300 w-full p-2 mb-4 bg-gray-100"
                onChange={onChange}
                value={newExperience.jobTitle}
              />
            </div>
            <div className="flex justify-between p-1">
              <div className="w-full mr-5">
                <label htmlFor="city" className="font-semibold">
                  City
                </label>
                <input
                  id="city"
                  name="city"
                  placeholder="Enter City"
                  className="block border rounded-md border-gray-300 w-full p-2 mb-4 bg-gray-100"
                  onChange={onChange}
                  value={newExperience.city}
                />
              </div>
              <div className="w-full">
                <label htmlFor="country" className="font-semibold">
                  Country
                </label>
                <input
                  id="country"
                  name="country"
                  placeholder="Enter Country"
                  className="block border rounded-md border-gray-300 w-full p-2 mb-4 bg-gray-100"
                  onChange={onChange}
                  value={newExperience.country}
                />
              </div>
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
                  value={newExperience.startDate}
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
                  value={newExperience.endDate}
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
                value={newExperience.description}
              />
            </div>
          </div>

          <CancelSave onCancel={onCancel} onSave={onSave} />
        </>
      )}
    </div>
  );
};

export default Experience;
