import { Routes, Route } from "react-router-dom";
import CreateResume from "./Pages/CreateResume";
import { useEffect } from "react";

function App() {
  return (
    <div className="font-sans">
      <Routes>
        <Route path="/" element={<CreateResume />} />
      </Routes>
    </div>
  );
}

export default App;
