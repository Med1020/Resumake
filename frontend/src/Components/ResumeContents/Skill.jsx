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

const Skill = () => {
  const { componentInEditMode, componentIsExpanded } = useSelector(
    (state) => state.showComponent
  );
  const { skillList } = useSelector((state) => state.resumeContent);

  const { handleDelete, handleChange, handleCancel, handleSave } =
    useCustomHooks();

  const dispatch = useDispatch();

  const [newSkill, setNewSkill] = useState({
    id: uuidv4(),

    title: "",
  });
  const [previousState, setPreviousState] = useState(null);

  const onSave = () => {
    handleSave({ newState: newSkill, elementName: "skill" });
    setNewSkill({
      id: uuidv4(),
      title: "",
    });
    setPreviousState(null);
  };

  const onCancel = () => {
    handleCancel({
      previousState: previousState,
      newState: newSkill,
      elementName: "skill",
    });
    setNewSkill({
      id: uuidv4(),
      title: "",
    });
  };
  const onDelete = (id) => {
    handleDelete(id, "skill");
  };
  const onChange = (e) => {
    const { name, value } = e.target;
    const updatedSkill = { ...newSkill, [name]: value };
    setNewSkill(updatedSkill);
    handleChange(newSkill.id, updatedSkill, "skill");
  };
  const onEdit = (id) => {
    const [elementToEdit] = skillList.filter((skill) => skill.id === id);
    setNewSkill(elementToEdit);
    setPreviousState(elementToEdit);
    dispatch(setComponentInEditMode("skill"));
  };

  return (
    <div>
      {skillList.length > 0 && componentInEditMode === "" && (
        <div className="bg-white my-3 p-5 w-full rounded-lg ">
          <div
            className=" flex justify-between cursor-pointer"
            onClick={() =>
              dispatch(
                componentIsExpanded === "skill"
                  ? dispatch(setcomponentIsExpanded(""))
                  : dispatch(setcomponentIsExpanded("skill"))
              )
            }
          >
            <header className="p-1 text-xl font-bold text-neutral-700">
              Skill
            </header>
            <button className="px-5">
              {componentIsExpanded === "skill" ? (
                <IoIosArrowUp />
              ) : (
                <IoIosArrowDown />
              )}
            </button>
          </div>
          <div>
            {componentIsExpanded === "skill" &&
              skillList.map(({ id, title }) => (
                <Draggable axis="y">
                  <div className="my-3 p-5 w-full border-y-2 flex justify-between cursor-pointer  ">
                    <div className="w-full" onClick={() => onEdit(id)}>
                      <span className="font-italic">{title}</span>
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
            {componentIsExpanded === "skill" && (
              <div className="flex justify-center">
                <button
                  className="border rounded-2xl border-2 p-2"
                  onClick={() => dispatch(setComponentInEditMode("skill"))}
                >
                  Add Skill
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {componentInEditMode === "skill" && (
        <>
          <div className="bg-white my-3 p-5 w-full rounded-lg shadow-lg ">
            <div className="p-1">
              <h1 className="text-xl font-bold mb-5">Add Skill</h1>
              <label htmlFor="title" className="block py-2 font-semibold">
                Title
              </label>
              <input
                id="title"
                name="title"
                placeholder="Enter skill"
                className="block border rounded-md border-gray-300 w-full p-2 mb-4 bg-gray-100"
                onChange={onChange}
                value={newSkill.title}
              />
            </div>
          </div>

          <CancelSave onCancel={onCancel} onSave={onSave} />
        </>
      )}
    </div>
  );
};

export default Skill;
