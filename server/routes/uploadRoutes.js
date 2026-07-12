const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

const { uploadLog } = require("../controllers/uploadController");

// Storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },

  filename: (req, file, cb) => {
    cb(
      null,
      Date.now() + path.extname(file.originalname)
    );
  },
});

// File Filter
const fileFilter = (req, file, cb) => {
  const allowed = [".log", ".txt", ".csv"];

  const ext = path.extname(file.originalname).toLowerCase();

  if (allowed.includes(ext)) {
    cb(null, true);
  } else {
    cb(new Error("Only .log .txt .csv files are allowed"));
  }
};

const upload = multer({
  storage,
  fileFilter,
});

router.post(
  "/",
  upload.single("logFile"),
  uploadLog
);

module.exports = router;