import React from "react";
import ResumeView from "../Components/ResumeView";
import { getResumeData } from "../Requests/resumeContentaxios";
import { useSelector } from "react-redux";
import CreateResume from "./CreateResume";

const DownloadResume = () => {
  return (
    <div>
      <CreateResume />
    </div>
  );
};

export default DownloadResume;
