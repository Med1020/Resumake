import { Routes, Route } from "react-router-dom";
import CreateResume from "./Pages/CreateResume";

import Login from "./Pages/Login";
import LandingPage from "./Pages/LandingPage";

import Signup from "./Pages/Signup";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from "./Router/ProtectedRoute";
import NotFound from "./Pages/NotFound";
import DownloadResume from "./Pages/DownloadResume";

function App() {
  return (
    <div className="font-sans">
      <ToastContainer
        position="top-center"
        hideProgressBar={true}
        autoClose={2000}
        pauseOnFocusLoss={false}
        draggable={false}
      />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/resume" element={<CreateResume />} />
        </Route>
        <Route path="/resume/download/:resumeId" element={<DownloadResume />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
