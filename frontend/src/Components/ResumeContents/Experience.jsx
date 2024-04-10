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

const Experience = () => {
  const { componentInEditMode, newContent, componentIsExpanded } = useSelector(
    (state) => state.showComponent
  );
  const { experienceList } = useSelector((state) => state.resumeContent);

  const { handleDelete, handleChange, handleCancel, handleSave } =
    useCustomHooks();

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
    const [elementToEdit] = experienceList.filter((exp) => exp.id === id);
    setNewExperience(elementToEdit);
    setPreviousState(elementToEdit);
    dispatch(setComponentInEditMode("experience"));
  };

  return (
    <div>
      {experienceList.length > 0 && componentInEditMode === "" && (
        <div className="bg-white my-3 p-5 w-full rounded-lg ">
          <div
            className=" flex justify-between cursor-pointer"
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
          <div>
            {componentIsExpanded === "experience" &&
              experienceList.map(
                ({
                  id,
                  employer,
                  jobTitle,
                  city,
                  country,
                  startDate,
                  endDate,
                }) => (
                  <Draggable axis="y">
                    <div className="my-3 p-5 w-full border-y-2 flex justify-between cursor-pointer  ">
                      <div className="w-full" onClick={() => onEdit(id)}>
                        <span className="font-bold">
                          {employer}
                          <span>,</span>
                        </span>
                        <span className="font-italic">{jobTitle}</span>
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
                          onClick={() => onDelete(id)}
                        >
                          <MdOutlineDelete />
                        </button>
                      </div>
                    </div>
                  </Draggable>
                )
              )}
            {componentIsExpanded === "experience" && (
              <div className="flex justify-center">
                <button
                  className="border rounded-2xl border-2 p-2"
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
                placeholder="Enter school/university"
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
                placeholder="Enter Enter Job Title"
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
