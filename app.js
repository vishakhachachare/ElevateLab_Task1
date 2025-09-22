// app.js
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Root route
app.get("/", (req, res) => {
  res.send("🚀 Hello, CI/CD with Docker + GitHub Actions! Your app is live! 🌟");
});

// Health check route (optional, useful for monitoring)
app.get("/health", (req, res) => {
  res.json({ status: "OK", message: "App is running smoothly!" });
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
