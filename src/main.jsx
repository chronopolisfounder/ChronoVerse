import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";
import Homepage from "./pages/Homepage.jsx";
import SystemsPage from "./pages/SystemsPage.jsx";
import ResearcherPortal from "./pages/ResearcherPortal.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/systems" element={<SystemsPage />} />
        <Route path="/research" element={<ResearcherPortal />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
