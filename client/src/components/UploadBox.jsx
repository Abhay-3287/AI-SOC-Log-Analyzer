import React, { useState } from "react";
import { FaCloudUploadAlt, FaFileAlt } from "react-icons/fa";

const UploadBox = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const allowedExtensions = [".log", ".txt", ".csv"];

    const isValid = allowedExtensions.some((ext) =>
      file.name.toLowerCase().endsWith(ext)
    );

    if (!isValid) {
      alert("Only .log, .txt and .csv files are allowed.");
      return;
    }

    setSelectedFile(file);
  };

  const handleUpload = () => {
    if (!selectedFile) {
      alert("Please select a file first.");
      return;
    }

    // Backend API yahan connect hogi
    console.log("Uploading:", selectedFile);

    alert("File selected successfully. Backend upload will be added next.");

    setSelectedFile(null);
  };

  return (
    <div className="bg-slate-800 rounded-xl shadow-lg p-8">

      <h2 className="text-2xl font-bold text-cyan-400 mb-6">
        Upload Security Logs
      </h2>

      <label
        htmlFor="fileInput"
        className="border-2 border-dashed border-cyan-500 rounded-xl p-10 flex flex-col items-center justify-center cursor-pointer hover:bg-slate-700 transition"
      >
        <FaCloudUploadAlt className="text-6xl text-cyan-400 mb-4" />

        <p className="text-white text-lg font-semibold">
          Click to Select Log File
        </p>

        <p className="text-gray-400 mt-2">
          Supported: .log .txt .csv
        </p>

        <input
          id="fileInput"
          type="file"
          accept=".log,.txt,.csv"
          className="hidden"
          onChange={handleFileChange}
        />
      </label>

      {selectedFile && (
        <div className="mt-6 bg-slate-700 rounded-lg p-4 flex justify-between items-center">

          <div className="flex items-center gap-3">
            <FaFileAlt className="text-cyan-400 text-2xl" />

            <div>
              <p className="text-white font-semibold">
                {selectedFile.name}
              </p>

              <p className="text-gray-400 text-sm">
                {(selectedFile.size / 1024).toFixed(2)} KB
              </p>
            </div>
          </div>

          <button
            onClick={handleUpload}
            className="bg-cyan-500 hover:bg-cyan-600 px-6 py-2 rounded-lg text-white font-semibold transition"
          >
            Upload
          </button>

        </div>
      )}
    </div>
  );
};

export default UploadBox;