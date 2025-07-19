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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
