import React from "react";
import { useSelector } from "react-redux";

const ResumeName = () => {
  return (
    <div className="flex justify-around border my-5 rounded-lg ">
      <input
        placeholder="Resume"
        className="mx-5 bg-transparent text-xl text-black-100 font-medium active:border-none focus:border-none focus:bg-white "
      ></input>

      <button className="m-2 p-2 border rounded-md bg-pink-500  text-white rounded-lg">
        Download
      </button>
    </div>
  );
};

export default ResumeName;
