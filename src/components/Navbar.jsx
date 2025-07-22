import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-6 py-3 bg-black bg-opacity-90 border-b border-cyan-400 shadow-xl backdrop-blur-md">
      <div className="flex items-center gap-3">
        {/* Logo and site name, both clickable to home */}
        <Link to="/" className="flex items-center gap-2 hover:underline">
          <img
            src="/logo.svg"
            alt="ChronoVerse Logo"
            className="w-9 h-9 drop-shadow-glow"
          />
          <span className="text-2xl font-bold text-cyan-400 drop-shadow-glow">
            ChronoVerse
          </span>
        </Link>
      </div>
      <div>
        <Link to="/" className="text-cyan-400 hover:underline mx-2">
          Home
        </Link>
        <Link to="/dashboard" className="text-cyan-400 hover:underline mx-2">
          Dashboard
        </Link>
        <Link to="/profile" className="text-cyan-400 hover:underline mx-2">
          Profile
        </Link>
        <Link
          to="/researcher-portal"
          className="text-cyan-400 hover:underline mx-2"
        >
          Researcher Portal
        </Link>
        <Link to="/privacy" className="text-cyan-400 hover:underline mx-2">
          Privacy
        </Link>
        <Link to="/contact" className="text-cyan-400 hover:underline mx-2">
          Contact
        </Link>
      </div>
    </nav>
  );
}
