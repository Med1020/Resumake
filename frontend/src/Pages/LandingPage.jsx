import { useState } from "react";
import TopNav from "../Components/LandingPage/TopNav";

import TemplatesModal from "../Components/LandingPage/TemplatesModal";
import { YourResumes } from "../Components/LandingPage/YourResumes";
import { useSelector } from "react-redux";
import Footer from "../Components/LandingPage/Footer";
import FadeInResumes from "../Components/LandingPage/FadeInResumes";
import HowItWorks from "../Components/LandingPage/HowItWorks";
import TemplatesView from "../Components/LandingPage/TemplatesView";

const LandingPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isLoggedIn } = useSelector((state) => state.authSlice);
  const closeModal = () => {
    setIsOpen(false);
  };
  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <div className="flex flex-col min-h-screen ">
      <div className="mx-10">
        <TopNav />

        <div className="flex justify-between items-center mb-4 rounded-lg flex-1 bg-[#FFDBE3] bg-opacity-50 text-gray-800">
          <div className="flex-1">
            <FadeInResumes />
          </div>
          <div className="p-4">
            <header>Create a job ready resume in minutes</header>
            <p className="text-gray-400 text-lg">
              Create your resume easily with our free builder and professional
              templates
            </p>
            <button
              className="mt-4 px-24 py-4 font-bold rounded-lg bg-black text-white uppercase hover:bg-pink-500"
              onClick={() => setIsOpen(true)}
            >
              <span>Get Started</span>
            </button>
          </div>
        </div>
        {isLoggedIn ? (
          <div className="relative">
            <YourResumes openModal={openModal} />
          </div>
        ) : (
          <div>
            <HowItWorks />
            <header>Templates</header>
            <TemplatesView />
          </div>
        )}
      </div>
      <div onClick={closeModal}>
        {isOpen && <TemplatesModal closeModal={closeModal} />}
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
