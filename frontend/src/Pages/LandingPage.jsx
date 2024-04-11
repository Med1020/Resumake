import React from "react";
import TopNav from "../Components/TopNav";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div className="overflow-hidden">
      <TopNav />
      <div className="flex min-h-screen items-center justify-center ">
        <div className="absolute top-1/2 transform -translate-y-1/2 text-center ">
          <header className="text-5xl font-bold">
            Get started with your first resume
          </header>
          <button
            className="mt-5 p-2 rounded-lg text-white bg-black"
            onClick={() => navigate("/resume")}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
