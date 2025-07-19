// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChronoNav from "./components/ChronoNav";
import SystemsPage from "./pages/SystemsPage";

function App() {
  return (
    <Router>
      <div className="bg-black min-h-screen text-white">
        <ChronoNav />
        <Routes>
          <Route path="/" element={<SystemsPage />} />
          {/* Placeholder routes — we'll add real pages soon */}
          <Route path="/researcher" element={<div className="p-10">Research Portal</div>} />
          <Route path="/avatar" element={<div className="p-10">Avatar Protocol Engine</div>} />
          <Route path="/diagnostic" element={<div className="p-10">Symptom Diagnostic</div>} />
          <Route path="/rewards" element={<div className="p-10">ChronoCoin Rewards</div>} />
          <Route path="/memory" element={<div className="p-10">Memory Engine</div>} />
          <Route path="/dream" element={<div className="p-10">Dream System</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
