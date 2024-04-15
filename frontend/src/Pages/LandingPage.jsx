import React, { useState } from "react";
import TopNav from "../Components/TopNav";
import { useNavigate } from "react-router-dom";
import TemplatesModal from "../Components/TemplatesModal";

const LandingPage = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <TopNav />
      <div className="flex max-h-screen items-center justify-center ">
        <div className="absolute top-1/2 transform -translate-y-1/2 text-center">
          <header className="text-5xl font-bold">
            Get started with your first resume
          </header>
          <button
            className="mt-5 p-2 rounded-lg text-white bg-black"
            onClick={() => setIsOpen(true)}
          >
            Get Started
          </button>
        </div>
      </div>
      {isOpen && <TemplatesModal closeModal={closeModal} />}
    </div>
  );
};

export default LandingPage;
