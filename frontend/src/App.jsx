import { Routes, Route } from "react-router-dom";
import CreateResume from "./Pages/CreateResume";
import HardwareResume from "./Format/Harvard";

function App() {
  return (
    <div className="font-sans">
      <Routes>
        <Route path="/" element={<CreateResume />} />
        <Route path="/format" element={<HardwareResume />} />
      </Routes>
    </div>
  );
}

export default App;
