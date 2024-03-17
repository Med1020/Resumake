import React from "react";
import { useDispatch } from "react-redux";
import { toggleShowComponent } from "../State/Slice/displayComponent";

const Contentcard = ({ content, handleCloseModal }) => {
  const dispatch = useDispatch();
  const handleCreateContent = () => {
    dispatch(toggleShowComponent(content.toLowerCase()));
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
