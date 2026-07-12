const express = require("express");
const router = express.Router();

const {
  uploadLog,
  getLogs,
  getLogById,
  deleteLog,
} = require("../controllers/logController");

const protect = require("../middleware/authMiddleware");
const upload = require("../middleware/uploadMiddleware");

// Upload Log File
router.post(
  "/upload",
  protect,
  upload.single("logFile"),
  uploadLog
);

// Get All Logs
router.get("/", protect, getLogs);

// Get Single Log
router.get("/:id", protect, getLogById);

// Delete Log
router.delete("/:id", protect, deleteLog);

module.exports = router;