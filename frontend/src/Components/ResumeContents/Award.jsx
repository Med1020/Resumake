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

const Award = () => {
  const { componentInEditMode, componentIsExpanded } = useSelector(
    (state) => state.showComponent
  );
  const { awardList } = useSelector((state) => state.resumeContent);

  const { handleDelete, handleChange, handleCancel, handleSave } =
    useCustomHooks();

  const dispatch = useDispatch();

  const [newAward, setNewAward] = useState({
    id: uuidv4(),
    award: "",
    issuer: "",
    date: "",
    description: "",
  });
  const [previousState, setPreviousState] = useState(null);

  const onSave = () => {
    handleSave({ newState: newAward, elementName: "award" });
    setNewAward({
      id: uuidv4(),
      award: "",
      issuer: "",
      date: "",
      description: "",
    });
    setPreviousState(null);
  };

  const onCancel = () => {
    handleCancel({
      previousState: previousState,
      newState: newAward,
      elementName: "award",
    });
    setNewAward({
      id: uuidv4(),
      award: "",
      issuer: "",
      date: "",
      description: "",
    });
  };
  const onDelete = (id) => {
    handleDelete(id, "award");
  };
  const onChange = (e) => {
    const { name, value } = e.target;
    const updatedAward = { ...newAward, [name]: value };
    setNewAward(updatedAward);
    handleChange(newAward.id, updatedAward, "award");
  };
  const onEdit = (id) => {
    const [elementToEdit] = awardList.filter((exp) => exp.id === id);
    setNewAward(elementToEdit);
    setPreviousState(elementToEdit);
    dispatch(setComponentInEditMode("award"));
  };
  const onDragEnd = (result) => {
    handleDragEnd({ result: result, elementName: "award" });
  };

  return (
    <div>
      {awardList.length > 0 && componentInEditMode === "" && (
        <div className="bg-white my-3 p-5 w-full rounded-lg ">
          <div className=" flex items-center">
            <div className="cursor-move">
              <RxDragHandleDots2 />
            </div>
            <div
              className=" flex justify-between w-full  cursor-pointer"
              onClick={() =>
                dispatch(
                  componentIsExpanded === "award"
                    ? dispatch(setcomponentIsExpanded(""))
                    : dispatch(setcomponentIsExpanded("award"))
                )
              }
            >
              <header className="p-1 text-xl font-bold text-neutral-700">
                Award
              </header>
              <button className="px-5">
                {componentIsExpanded === "award" ? (
                  <IoIosArrowUp />
                ) : (
                  <IoIosArrowDown />
                )}
              </button>
            </div>
            <div>
              <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="award">
                  {(droppableProvider) => (
                    <div
                      ref={droppableProvider.innerRef}
                      {...droppableProvider.droppableProps}
                    >
                      {componentIsExpanded === "award" &&
                        awardList.map(({ id, award, issuer, date }, index) => (
                          <Draggable
                            draggableId={String(id)}
                            index={index}
                            key={id}
                          >
                            {(draggableProvider) => (
                              <div
                                className="p-5 w-full border-b-2 flex justify-between cursor-pointer bg-white"
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
                                    {award}
                                    <span>,</span>
                                  </span>
                                  <span className="font-italic">{issuer}</span>
                                  <p>
                                    <span>{date}</span>
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
                        ))}
                      {droppableProvider.placeholder}
                    </div>
                  )}
                </Droppable>
              </DragDropContext>
              {componentIsExpanded === "award" && (
                <div className="flex justify-center">
                  <button
                    className="border rounded-2xl border-2 p-2"
                    onClick={() => dispatch(setComponentInEditMode("award"))}
                  >
                    Add Award
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {componentInEditMode === "award" && (
        <>
          <div className="bg-white my-3 p-5 w-full rounded-lg shadow-lg ">
            <div className="p-1">
              <h1 className="text-xl font-bold mb-5">Create Award</h1>
              <label htmlFor="award" className="block py-2 font-semibold">
                Award
              </label>
              <input
                id="award"
                name="award"
                placeholder="Enter award"
                className="block border rounded-md border-gray-300 w-full p-2 mb-4 bg-gray-100"
                onChange={onChange}
                value={newAward.award}
              />
            </div>
            <div className="p-1">
              <label htmlFor="issuer" className="block py-2 font-semibold">
                Issuer
              </label>
              <input
                id="issuer"
                name="issuer"
                placeholder="Enter Issuer"
                className="block border rounded-md border-gray-300 w-full p-2 mb-4 bg-gray-100"
                onChange={onChange}
                value={newAward.issuer}
              />
            </div>
            <div className="flex justify-between p-1">
              <div className="w-full mr-5">
                <label htmlFor="date" className="font-semibold">
                  Date
                </label>
                <input
                  id="date"
                  name="date"
                  placeholder="Enter Date"
                  className="block border rounded-md border-gray-300 w-full p-2 mb-4 bg-gray-100"
                  onChange={onChange}
                  value={newAward.date}
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
                value={newAward.description}
              />
            </div>
          </div>

          <CancelSave onCancel={onCancel} onSave={onSave} />
        </>
      )}
    </div>
  );
};

export default Award;
