import React, { useState } from "react";
import { useSelector } from "react-redux";
import Harvard from "../Format/Harvard";

const ResumeView = () => {
  return (
    <div className="bg-white h-full" id="resume">
      <Harvard />
    </div>
  );
};

export default ResumeView;
