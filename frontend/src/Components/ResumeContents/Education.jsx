import React, { useRef, useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { MdOutlineDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  setComponentInEditMode,
  setcomponentIsExpanded,
  toggleShowComponent,
} from "../../State/Slice/displayComponent";
import CancelSave from "../CancelSaveBtns";
import { v4 as uuidv4 } from "uuid";
import useCustomHooks from "../../customHooks/customHook";
import { RxDragHandleDots2 } from "react-icons/rx";
import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd";

const Education = () => {
  const { componentInEditMode, componentIsExpanded } = useSelector(
    (state) => state.showComponent
  );
  const { educationList } = useSelector((state) => state.resumeContent);

  const {
    handleDelete,
    handleChange,
    handleCancel,
    handleSave,
    handleDragEnd,
  } = useCustomHooks();

  const dispatch = useDispatch();

  const [newEducation, setNewEducation] = useState({
    id: uuidv4(),
    school: "",
    degree: "",
    city: "",
    country: "",
    startDate: "",
    endDate: "",
    description: "",
  });
  const [previousState, setPreviousState] = useState(null);

  const onSave = () => {
    handleSave({ newState: newEducation, elementName: "education" });
    setNewEducation({
      id: uuidv4(),
      school: "",
      degree: "",
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
      newState: newEducation,
      elementName: "education",
    });
    setNewEducation({
      id: uuidv4(),
      school: "",
      degree: "",
      city: "",
      country: "",
      startDate: "",
      endDate: "",
      description: "",
    });
  };

  const onDelete = (id) => {
    handleDelete(id, "education");
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    const updatedEducation = { ...newEducation, [name]: value };
    setNewEducation(updatedEducation);
    handleChange(newEducation.id, updatedEducation, "education");
  };

  const onEdit = (id) => {
    const [elementToEdit] = educationList.filter((edu) => edu.id === id);
    setNewEducation(elementToEdit);
    setPreviousState(elementToEdit);
    dispatch(setComponentInEditMode("education"));
  };

  const onDragEnd = (result) => {
    handleDragEnd({ result: result, elementName: "education" });
  };

  return (
    <div>
      {educationList.length > 0 && componentInEditMode === "" && (
        <div className="bg-white my-3 p-5 w-full rounded-lg ">
          <div className=" flex items-center">
            <div className="cursor-move">
              <RxDragHandleDots2 />
            </div>
            <div
              className=" flex justify-between w-full cursor-pointer"
              onClick={() =>
                componentIsExpanded === "education"
                  ? dispatch(setcomponentIsExpanded(""))
                  : dispatch(setcomponentIsExpanded("education"))
              }
            >
              <header className="p-1 text-lg font-bold text-neutral-700">
                Education
              </header>
              <button className="px-5">
                {componentIsExpanded === "education" ? (
                  <IoIosArrowUp />
                ) : (
                  <IoIosArrowDown />
                )}
              </button>
            </div>
          </div>
          <div>
            <DragDropContext onDragEnd={onDragEnd}>
              <Droppable droppableId="education">
                {(droppableProvider) => (
                  <div
                    ref={droppableProvider.innerRef}
                    {...droppableProvider.droppableProps}
                  >
                    {componentIsExpanded === "education" &&
                      educationList.map(
                        (
                          {
                            id,
                            school,
                            degree,
                            city,
                            country,
                            startDate,
                            endDate,
                          },
                          index
                        ) => (
                          <Draggable
                            draggableId={String(id)}
                            index={index}
                            key={id}
                          >
                            {(draggableProvider) => (
                              <div
                                className=" p-5 w-full border-b-2 flex justify-between cursor-pointer bg-white"
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
                                  onClick={() => onEdit(id)}
                                >
                                  <span className="font-bold">
                                    {school}
                                    <span>,</span>
                                  </span>
                                  <span className="font-italic">{degree}</span>
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
                            )}
                          </Draggable>
                        )
                      )}
                    {droppableProvider.placeholder}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
            {componentIsExpanded === "education" && (
              <div className="flex justify-center">
                <button
                  className="border rounded-2xl border-2 p-2 m-3"
                  onClick={() => dispatch(setComponentInEditMode("education"))}
                >
                  Add Education
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {componentInEditMode === "education" && (
        <>
          <div className="bg-white my-3 p-5 w-full rounded-lg shadow-lg ">
            <div className="p-1">
              <h1 className="text-xl font-bold mb-5">Create Education</h1>
              <label htmlFor="school" className="block py-2 font-semibold">
                School
              </label>
              <input
                id="school"
                name="school"
                placeholder="Enter school/university"
                className="block border rounded-md border-gray-300 w-full p-2 mb-4 bg-gray-100"
                onChange={onChange}
                value={newEducation.school}
              />
            </div>
            <div className="p-1">
              <label htmlFor="degree" className="block py-2 font-semibold">
                Degree
              </label>
              <input
                id="degree"
                name="degree"
                placeholder="Enter Degree"
                className="block border rounded-md border-gray-300 w-full p-2 mb-4 bg-gray-100"
                onChange={onChange}
                value={newEducation.degree}
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
                  value={newEducation.city}
                />
              </div>
              <div className="w-full">
                <label htmlFor="degree" className="font-semibold">
                  Country
                </label>
                <input
                  id="country"
                  name="country"
                  placeholder="Enter Country"
                  className="block border rounded-md border-gray-300 w-full p-2 mb-4 bg-gray-100"
                  onChange={onChange}
                  value={newEducation.country}
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
                  value={newEducation.startDate}
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
                  value={newEducation.endDate}
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
                value={newEducation.description}
              />
            </div>
          </div>

          <CancelSave onCancel={onCancel} onSave={onSave} />
        </>
      )}
    </div>
  );
};

export default Education;
