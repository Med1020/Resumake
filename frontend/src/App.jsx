import { Routes, Route } from "react-router-dom";
import CreateResume from "./Pages/CreateResume";
import HardwareResume from "./Format/Harvard";
import Login from "./Pages/Login";
import LandingPage from "./Pages/LandingPage";

function App() {
  return (
    <div className="font-sans">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/resume" element={<CreateResume />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
