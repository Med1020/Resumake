import React from "react";
import { useDispatch } from "react-redux";

const CancelSave = ({ onSave, onCancel }) => {
  return (
    <div className="bg-white mt-3 p-3 rounded-lg sticky relative bottom-0 shadow-lg ">
      <button
        className="my-2 p-2 w-24 border border-slate-300 rounded-md bg-grey-300 text-grey font-bold rounded-lg"
        onClick={() => onCancel()}
      >
        Cancel
      </button>
      <button
        className="ml-3 p-2 w-24 border rounded-md bg-pink-500 text-white font-bold rounded-lg"
        onClick={() => onSave()}
      >
        Save
      </button>
    </div>
  );
};

export default CancelSave;
