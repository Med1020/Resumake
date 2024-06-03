import React from "react";
import { useSelector } from "react-redux";
import Harvard from "../Format/Harvard";
import axios from "axios";

const ResumeName = () => {
  const handleDownloadPDF = async () => {
    // const resumeData = <Harvard />;
    try {
      const response = await axios.post(
        "http://localhost:5000/generate-pdf/",
        // resumeData,
        {
          responseType: "blob",
        }
      );
      const blob = new Blob([response.data], { type: "application/pdf" });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "resume.pdf");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error generating PDF:", error);
    }
  };
  return (
    <div className="flex justify-around border my-5 rounded-lg sticky">
      <input
        placeholder="Resume"
        className="mx-5 bg-transparent text-xl text-black-100 font-medium active:border-none focus:border-none focus:bg-white "
      ></input>

      <button
        className="m-2 p-2 border rounded-md bg-pink-500  text-white rounded-lg"
        onClick={handleDownloadPDF}
      >
        Download
      </button>
    </div>
  );
};

export default ResumeName;
