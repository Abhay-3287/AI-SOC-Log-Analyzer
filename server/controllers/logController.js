const Log = require("../models/Log");

// ===============================
// Upload Log
// ===============================
const uploadLog = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No log file uploaded",
      });
    }

    const log = await Log.create({
      fileName: req.file.originalname,
      filePath: req.file.path,
      uploadedBy: req.user.id,
      status: "Pending",
    });

    res.status(201).json({
      success: true,
      message: "Log uploaded successfully",
      log,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// ===============================
// Get All Logs
// ===============================
const getLogs = async (req, res) => {
  try {

    const logs = await Log.find()
      .populate("uploadedBy", "name email")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: logs.length,
      logs,
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });

  }
};

// ===============================
// Get Single Log
// ===============================
const getLogById = async (req, res) => {
  try {

    const log = await Log.findById(req.params.id)
      .populate("uploadedBy", "name email");

    if (!log) {
      return res.status(404).json({
        success: false,
        message: "Log not found",
      });
    }

    res.status(200).json({
      success: true,
      log,
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });

  }
};

// ===============================
// Delete Log
// ===============================
const deleteLog = async (req, res) => {
  try {

    const log = await Log.findById(req.params.id);

    if (!log) {
      return res.status(404).json({
        success: false,
        message: "Log not found",
      });
    }

    await Log.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Log deleted successfully",
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });

  }
};

module.exports = {
  uploadLog,
  getLogs,
  getLogById,
  deleteLog,
};