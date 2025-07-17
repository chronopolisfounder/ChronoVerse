import React from "react";

export default function App() {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        backgroundColor: "#000",
        color: "#0ff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Segoe UI, sans-serif",
        textAlign: "center",
        overflow: "hidden",
        padding: "1rem",
      }}
    >
      {/* Title */}
      <h1
        style={{
          fontSize: "2.5rem",
          marginBottom: "2rem",
          textShadow: "0 0 8px #0ff, 0 0 12px #00f0ff",
        }}
      >
        ChronoVerse
      </h1>

      {/* Description */}
      <p
        style={{
          maxWidth: "700px",
          fontSize: "1rem",
          lineHeight: "1.5",
          marginBottom: "2rem",
          color: "#aef",
        }}
      >
        A timeline-powered web experience across dimensions. Travel across timelines,
        interact with evolving AI memory systems, visualize temporal analytics, and
        secure your multiversal journey with paradox firewalls.
      </p>

      {/* Horizontal button row */}
      <div
        style={{
          display: "flex",
          gap: "1rem",
          flexWrap: "wrap",
          justifyContent: "center",
          marginBottom: "1.5rem",
        }}
      >
        <button style={buttonStyle}>📊 Timeline Analytics</button>
        <button
          style={{
            ...buttonStyle,
            backgroundColor: "#a94fff",
            boxShadow: "0 0 8px #a94fff",
          }}
        >
          🧠 Memory Engine
        </button>
      </div>

      {/* Lower button */}
      <button
        style={{
          ...buttonStyle,
          backgroundColor: "#3b82f6",
          boxShadow: "0 0 8px #3b82f6",
          width: "220px",
        }}
      >
        🌀 ChronoSIM Layer
      </button>
    </div>
  );
}

const buttonStyle = {
  padding: "0.5rem 1.25rem",
  fontSize: "0.9rem",
  fontWeight: "600",
  backgroundColor: "#00ffff",
  color: "#000",
  border: "none",
  borderRadius: "20px",
  cursor: "pointer",
  boxShadow: "0 0 6px #00ffff",
  transition: "all 0.2s ease-in-out",
};
