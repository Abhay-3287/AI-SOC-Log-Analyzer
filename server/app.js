const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");
const uploadRoutes = require("./routes/uploadRoutes");
// Load Environment Variables
dotenv.config();

// Database Connection
const connectDB = require("./config/db");
connectDB();

// Routes
const authRoutes = require("./routes/authRoutes");
const logRoutes = require("./routes/logRoutes");
app.use("/api/upload", uploadRoutes);

// Initialize Express
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static Folder (Uploaded Files)
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/logs", logRoutes);

// Test Route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "🚀 AI SOC Log Analyzer Backend Running...",
  });
});

// Handle Unknown Routes
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route Not Found",
  });
});

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});