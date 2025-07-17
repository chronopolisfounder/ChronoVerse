// server/index.js
import express from "express";

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware to parse JSON bodies
app.use(express.json());

// Simple test route
app.get("/", (req, res) => {
  res.send("ChronoVerse Backend is up and running 🚀");
});

// Example API endpoint
app.get("/api/status", (req, res) => {
  res.json({ status: "OK", timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`ChronoVerse backend listening on port ${PORT}`);
});
