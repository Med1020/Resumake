import { Routes, Route } from "react-router-dom";
import CreateResume from "./Pages/CreateResume";
import HardwareResume from "./Format/Harvard";
import Login from "./Pages/Login";
import LandingPage from "./Pages/LandingPage";
import Harvard from "./Format/Harvard";
import ResumeView from "./Components/ResumeView";
import Signup from "./Pages/Signup";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="font-sans">
      <ToastContainer
        position="top-center"
        hideProgressBar={true}
        autoClose={3000}
      />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/resume" element={<CreateResume />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/resume/download" element={<ResumeView />} />
      </Routes>
    </div>
  );
}

export default App;
