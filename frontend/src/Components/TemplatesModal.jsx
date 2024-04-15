import React, { useState } from "react";
import Executive from "../assets/templates/Executive.jpg";
import Harvard from "../assets/templates/Harvard.jpg";
import Harvard_2 from "../assets/templates/Harvard_2.jpg";
import green from "../assets/templates/green.jpg";
import { Navigate, useNavigate } from "react-router-dom";

const TemplatesModal = ({ closeModal }) => {
  const navigate = useNavigate();
  const handleClick = (templateName) => {
    navigate("/resume");
  };
  return (
    <div className="fixed inset-0 z-10 overflow-y-auto">
      <div className="flex items-start justify-center min-h-screen">
        <div className="fixed inset-0 bg-black opacity-80"></div>
        <div className="w-full h-full relative bg-gray-200 rounded-lg m-5 p-10 ">
          <div className="flex justify-between p-4">
            <h1 className="text-2xl font-bold">Templates</h1>
            <button
              className="text-2xl font-bold p-2 rounded-sm"
              onClick={() => closeModal()}
            >
              X
            </button>
          </div>
          <div className="flex">
            <div
              className="m-2 cursor-pointer"
              onClick={() => handleClick("harvard")}
            >
              <img src={Harvard} alt="Harvard" width="300px" />
            </div>
            <div
              className="m-2 cursor-pointer"
              onClick={() => handleClick("Harvard_2")}
            >
              <img src={Harvard_2} alt="Harvard_2" width="300px" />
            </div>
            <div
              className="m-2 cursor-pointer"
              onClick={() => handleClick("executive")}
            >
              <img src={Executive} alt="executive" width="300px" />
            </div>
            <div
              className="m-2 cursor-pointer"
              onClick={() => handleClick("green")}
            >
              <img src={green} alt="green" width="300px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplatesModal;
