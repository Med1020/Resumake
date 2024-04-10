import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setNewContent,
  setComponentInEditMode,
  toggleShowComponent,
  setcomponentIsExpanded,
} from "../State/Slice/displayComponent";

const Contentcard = ({ content, handleCloseModal }) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.showComponent);
  const handleCreateContent = () => {
    const lowerCaseContent = content.toLowerCase();
    if (!state[lowerCaseContent][lowerCaseContent]) {
      dispatch(setComponentInEditMode(lowerCaseContent));
      dispatch(setNewContent(lowerCaseContent));
    }
    dispatch(toggleShowComponent({ section: lowerCaseContent, toShow: true }));
    dispatch(setcomponentIsExpanded(lowerCaseContent));
    handleCloseModal();
  };
  return (
    <div
      className="p-2 m-2 rounded-md bg-gray-200 w-1/5 cursor-pointer"
      onClick={handleCreateContent}
    >
      <p className="font-bold">{content}</p>
    </div>
  );
};

export default Contentcard;
