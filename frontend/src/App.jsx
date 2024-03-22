import { Routes, Route } from "react-router-dom";
import CreateResume from "./Pages/CreateResume";
import HardwareResume from "./Format/Harvard";
import Login from "./Pages/Login";

function App() {
  return (
    <div className="font-sans">
      <Routes>
        <Route path="/" element={<CreateResume />} />
        <Route path="/format" element={<HardwareResume />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
