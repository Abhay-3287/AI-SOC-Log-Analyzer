import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import DashboardCard from "../components/DashboardCard";
import LogTable from "../components/LogTable";

import {
  FaFileAlt,
  FaShieldAlt,
  FaBug,
  FaUpload,
} from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="flex bg-slate-900 min-h-screen">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1">

        {/* Navbar */}
        <Navbar />

        <div className="p-6">

          {/* Heading */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white">
              Dashboard
            </h1>

            <p className="text-gray-400 mt-2">
              Welcome to AI SOC Log Analyzer
            </p>
          </div>

          {/* Dashboard Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            <DashboardCard
              title="Total Logs"
              value="150"
              icon={<FaFileAlt />}
              color="border-blue-500"
            />

            <DashboardCard
              title="Threats Detected"
              value="23"
              icon={<FaBug />}
              color="border-red-500"
            />

            <DashboardCard
              title="Safe Logs"
              value="127"
              icon={<FaShieldAlt />}
              color="border-green-500"
            />

            <DashboardCard
              title="Uploads"
              value="35"
              icon={<FaUpload />}
              color="border-yellow-500"
            />

          </div>

          {/* Recent Logs */}
          <LogTable />

        </div>

      </div>
    </div>
  );
};

export default Dashboard;