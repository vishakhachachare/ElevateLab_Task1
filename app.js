// app.js
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Root route
app.get("/", (req, res) => {
  res.send(`
    <h1>🚀 Hello, CI/CD with Docker + GitHub Actions!</h1>
    <p>✅ Your Node.js app is live and running inside a Docker container!</p>
    <p>Try the <a href="/health">/health</a> endpoint for a JSON response.</p>
    <p>Enjoy seamless CI/CD automation! 🔥</p>
  `);
});

// Health check route
app.get("/health", (req, res) => {
  res.json({
    status: "OK",
    message: "App is running smoothly!",
    port: PORT,
    timestamp: new Date()
  });
});

// Example API route
app.post("/api/greet", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ error: "Please provide a name!" });
  }
  res.json({ message: `Hello, ${name}! 🎉 Welcome to CI/CD with Docker + GitHub Actions!` });
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
