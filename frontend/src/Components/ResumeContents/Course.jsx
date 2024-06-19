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

const Course = () => {
  const { componentInEditMode, componentIsExpanded } = useSelector(
    (state) => state.showComponent
  );
  const { courseList } = useSelector((state) => state.resumeContent);

  const {
    handleDelete,
    handleChange,
    handleCancel,
    handleSave,
    handleDragEnd,
  } = useCustomHooks();

  const dispatch = useDispatch();

  const [newCourse, setNewCourse] = useState({
    id: uuidv4(),
    courseTitle: "",
    institution: "",
    city: "",
    country: "",
    startDate: "",
    endDate: "",
    description: "",
  });
  const [previousState, setPreviousState] = useState(null);

  const onSave = () => {
    handleSave({ newState: newCourse, elementName: "course" });
    setNewCourse({
      id: uuidv4(),
      courseTitle: "",
      institution: "",
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
      newState: newCourse,
      elementName: "course",
    });
    setNewCourse({
      id: uuidv4(),
      courseTitle: "",
      institution: "",
      city: "",
      country: "",
      startDate: "",
      endDate: "",
      description: "",
    });
  };
  const onDelete = (id) => {
    handleDelete(id, "course");
  };
  const onChange = (e) => {
    const { name, value } = e.target;
    const updatedCourse = { ...newCourse, [name]: value };
    setNewCourse(updatedCourse);
    handleChange(newCourse.id, updatedCourse, "course");
  };
  const onEdit = (id) => {
    const [elementToEdit] = courseList.filter((course) => course.id === id);
    setNewCourse(elementToEdit);
    setPreviousState(elementToEdit);
    dispatch(setComponentInEditMode("course"));
  };
  const onDragEnd = (result) => {
    handleDragEnd({ result: result, elementName: "course" });
  };
  return (
    <div>
      {courseList.length > 0 && componentInEditMode === "" && (
        <div className="bg-white my-3 p-5 w-full rounded-lg ">
          <div className=" flex items-center">
            <div className="cursor-move">
              <RxDragHandleDots2 />
            </div>
            <div
              className=" flex justify-between w-full cursor-pointer"
              onClick={() =>
                dispatch(
                  componentIsExpanded === "course"
                    ? dispatch(setcomponentIsExpanded(""))
                    : dispatch(setcomponentIsExpanded("course"))
                )
              }
            >
              <header className="p-1 text-xl font-bold text-neutral-700">
                Course
              </header>
              <button className="px-5">
                {componentIsExpanded === "course" ? (
                  <IoIosArrowUp />
                ) : (
                  <IoIosArrowDown />
                )}
              </button>
            </div>
          </div>
          <div>
            <DragDropContext onDragEnd={onDragEnd}>
              <Droppable droppableId="course">
                {(droppableProvider) => (
                  <div
                    ref={droppableProvider.innerRef}
                    {...droppableProvider.droppableProps}
                  >
                    {componentIsExpanded === "course" &&
                      courseList.map(
                        ({
                          id,
                          courseTitle,
                          institution,
                          city,
                          country,
                          startDate,
                          endDate,
                        }) => (
                          <Draggable
                            draggableId={String(id)}
                            index={index}
                            key={id}
                          >
                            {(draggableProvider) => (
                              <div
                                className="my-3 p-5 w-full border-y-2 flex justify-between cursor-pointer"
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
                                    {courseTitle}
                                    <span>,</span>
                                  </span>
                                  <span className="font-italic">
                                    {institution}
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
            {componentIsExpanded === "course" && (
              <div className="flex justify-center">
                <button
                  className="border rounded-2xl border-2 p-2 m-3"
                  onClick={() => dispatch(setComponentInEditMode("course"))}
                >
                  Add Course
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {componentInEditMode === "course" && (
        <>
          <div className="bg-white my-3 p-5 w-full rounded-lg shadow-lg ">
            <div className="p-1">
              <h1 className="text-xl font-bold mb-5">Create Course</h1>
              <label htmlFor="courseTitle" className="block py-2 font-semibold">
                Course Title
              </label>
              <input
                id="courseTitle"
                name="courseTitle"
                placeholder="Enter course title"
                className="block border rounded-md border-gray-300 w-full p-2 mb-4 bg-gray-100"
                onChange={onChange}
                value={newCourse.courseTitle}
              />
            </div>
            <div className="p-1">
              <label htmlFor="institution" className="block py-2 font-semibold">
                Institution
              </label>
              <input
                id="institution"
                name="institution"
                placeholder="Enter insitution"
                className="block border rounded-md border-gray-300 w-full p-2 mb-4 bg-gray-100"
                onChange={onChange}
                value={newCourse.institution}
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
                  value={newCourse.city}
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
                  value={newCourse.country}
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
                  value={newCourse.startDate}
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
                  value={newCourse.endDate}
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
                value={newCourse.description}
              />
            </div>
          </div>

          <CancelSave onCancel={onCancel} onSave={onSave} />
        </>
      )}
    </div>
  );
};

export default Course;
