import React from "react";
import { useDispatch } from "react-redux";
import { toggleExpandComponent } from "../State/Slice/displayComponent";

const CancelSave = ({ component }) => {
  const dispatch = useDispatch();
  const handleSave = () => {
    console.log(component);
    //check if that existing object is being edited or new object is created
    //if existing object dispatch to update<componentname> else to create<componentname>
    dispatch(toggleExpandComponent(component));
  };

  return (
    <div className="bg-white mt-3 p-3 rounded-lg sticky relative bottom-0 shadow-lg ">
      <button
        className="my-2 p-2 w-24 border border-slate-300 rounded-md bg-grey-300 text-grey font-bold rounded-lg"
        onClick={() => dispatch(toggleExpandComponent(component))}
      >
        Cancel
      </button>
      <button
        className="ml-3 p-2 w-24 border rounded-md bg-pink-500 text-white font-bold rounded-lg"
        // onClick={handleSave}
      >
        Save
      </button>
    </div>
  );
};

export default CancelSave;
