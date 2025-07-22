import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full p-4 bg-black bg-opacity-80 text-center text-cyan-400 rounded-t-2xl shadow-2xl border-t border-cyan-400/30 font-orbitron tracking-wide">
      <span className="uppercase tracking-widest text-cyan-300 font-semibold drop-shadow-glow">
        ChronoVerse Labs
      </span>{" "}
      &copy; 2025. All rights reserved. |{" "}
      <Link to="/privacy" className="underline hover:text-cyan-200 transition">
        Privacy
      </Link>{" "}
      |{" "}
      <Link to="/contact" className="underline hover:text-cyan-200 transition">
        Contact
      </Link>
    </footer>
  );
}
