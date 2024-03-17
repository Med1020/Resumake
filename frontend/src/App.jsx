import { Routes, Route } from "react-router-dom";
import CreateResume from "./Pages/CreateResume";

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
