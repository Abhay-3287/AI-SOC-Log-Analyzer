import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import UploadBox from "../components/UploadBox";

const UploadLogs = () => {
  return (
    <div className="flex bg-slate-900 min-h-screen">
      <Sidebar />

      <div className="flex-1">
        <Navbar />

        <div className="p-6">
          <UploadBox />
        </div>
      </div>
    </div>
  );
};

export default UploadLogs;