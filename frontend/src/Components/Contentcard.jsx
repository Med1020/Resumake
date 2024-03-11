import React from "react";

const Contentcard = ({ content, handleCloseModal }) => {
  const handleCreateContent = (content) => {
    handleCloseModal();
  };
  return (
    <div
      className="p-2 m-2 rounded-md bg-gray-200 w-1/5"
      onClick={handleCreateContent}
    >
      <p className="font-bold">{content}</p>
    </div>
  );
};

export default Contentcard;
