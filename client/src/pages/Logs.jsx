import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import LogTable from "../components/LogTable";

const Logs = () => {
  return (
    <div className="flex min-h-screen bg-slate-900">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1">

        {/* Navbar */}
        <Navbar />

        <div className="p-6">

          {/* Page Heading */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white">
              Log History
            </h1>

            <p className="text-gray-400 mt-2">
              View all uploaded log files and their AI analysis results.
            </p>
          </div>

          {/* Search & Filter */}
          <div className="bg-slate-800 rounded-xl p-4 mb-6 flex flex-col md:flex-row gap-4 justify-between">

            <input
              type="text"
              placeholder="Search by file name..."
              className="bg-slate-700 text-white px-4 py-2 rounded-lg outline-none md:w-80"
            />

            <select className="bg-slate-700 text-white px-4 py-2 rounded-lg outline-none">
              <option>All Status</option>
              <option>Safe</option>
              <option>Threat</option>
            </select>

          </div>

          {/* Log Table */}
          <LogTable />

        </div>

      </div>

    </div>
  );
};

export default Logs;