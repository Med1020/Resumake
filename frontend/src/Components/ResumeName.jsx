import React from "react";

import axios from "axios";

const ResumeName = () => {
  const handleDownloadPDF = async () => {
    try {
      const response = await axios.get(
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
    <div className="flex justify-between bg-white border my-5 px-3 py-3 rounded-2xl sticky z-1">
      <input
        placeholder="Resume"
        className="mx-5 text-xl placeholder:text-black font-bold outline-none cursor-pointer "
      ></input>

      <button
        className="m-2 p-2 border  bg-pink-500 text-white rounded-lg"
        onClick={handleDownloadPDF}
      >
        Download
      </button>
    </div>
  );
};

export default ResumeName;
