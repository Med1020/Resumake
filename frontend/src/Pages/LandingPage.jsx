import React, { useState } from "react";
import TopNav from "../Components/LandingPage/TopNav";
import { useNavigate } from "react-router-dom";
import TemplatesModal from "../Components/LandingPage/TemplatesModal";
import { YourResumes } from "../Components/LandingPage/YourResumes";
import { useSelector } from "react-redux";
import Typewriter from "typewriter-effect";
import Footer from "../Components/LandingPage/Footer";

const LandingPage = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const { isLoggedIn } = useSelector((state) => state.authSlice);
  const closeModal = () => {
    setIsOpen(false);
  };
  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <TopNav />

      {/* <div className="flex max-h-screen items-center justify-center ">
        <div className="absolute top-1/2 transform -translate-y-1/2 text-center"> */}
      <div className="flex justify-center text-center my-8 flex-1">
        <div>
          <p className="text-2xl">
            Get started with your first resume for the role of
          </p>
          <header className="text-5xl font-bold m-4">
            <span className="text-pink-500/[0.8]">
              <Typewriter
                options={{
                  cursor: "",
                  strings: [
                    "Software Developer",
                    "Aerospace Engineer",
                    "UI/UX Developer",
                    "Data Analyst",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </header>
          <p></p>
          <button
            className="mt-20 px-24 py-4 font-bold bg-black text-white uppercase hover:bg-pink-500"
            onClick={() => setIsOpen(true)}
          >
            <span>Get Started</span>
          </button>
        </div>
      </div>
      {isLoggedIn && (
        <div className="relative">
          <YourResumes openModal={openModal} />
        </div>
      )}
      <div onClick={closeModal}>
        {isOpen && <TemplatesModal closeModal={closeModal} />}
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
