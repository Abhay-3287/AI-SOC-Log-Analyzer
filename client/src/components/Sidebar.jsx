import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaUpload,
  FaFileAlt,
  FaChartBar,
  FaUser,
  FaCog,
  FaShieldAlt,
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="w-64 min-h-screen bg-slate-900 border-r border-slate-700 text-white">

      {/* Logo */}
      <div className="p-6 border-b border-slate-700">
        <div className="flex items-center gap-3">
          <FaShieldAlt className="text-cyan-400 text-3xl" />
          <div>
            <h1 className="text-xl font-bold">AI SOC</h1>
            <p className="text-xs text-gray-400">Log Analyzer</p>
          </div>
        </div>
      </div>

      {/* Menu */}
      <div className="p-4 space-y-2">

        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `flex items-center gap-3 p-3 rounded-lg transition ${
              isActive
                ? "bg-cyan-600 text-white"
                : "hover:bg-slate-800 text-gray-300"
            }`
          }
        >
          <FaHome />
          Dashboard
        </NavLink>

        <NavLink
          to="/upload"
          className={({ isActive }) =>
            `flex items-center gap-3 p-3 rounded-lg transition ${
              isActive
                ? "bg-cyan-600 text-white"
                : "hover:bg-slate-800 text-gray-300"
            }`
          }
        >
          <FaUpload />
          Upload Logs
        </NavLink>

        <NavLink
          to="/logs"
          className={({ isActive }) =>
            `flex items-center gap-3 p-3 rounded-lg transition ${
              isActive
                ? "bg-cyan-600 text-white"
                : "hover:bg-slate-800 text-gray-300"
            }`
          }
        >
          <FaFileAlt />
          Log History
        </NavLink>

        <NavLink
          to="/reports"
          className={({ isActive }) =>
            `flex items-center gap-3 p-3 rounded-lg transition ${
              isActive
                ? "bg-cyan-600 text-white"
                : "hover:bg-slate-800 text-gray-300"
            }`
          }
        >
          <FaChartBar />
          Reports
        </NavLink>

        <NavLink
          to="/profile"
          className={({ isActive }) =>
            `flex items-center gap-3 p-3 rounded-lg transition ${
              isActive
                ? "bg-cyan-600 text-white"
                : "hover:bg-slate-800 text-gray-300"
            }`
          }
        >
          <FaUser />
          Profile
        </NavLink>

        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `flex items-center gap-3 p-3 rounded-lg transition ${
              isActive
                ? "bg-cyan-600 text-white"
                : "hover:bg-slate-800 text-gray-300"
            }`
          }
        >
          <FaCog />
          Settings
        </NavLink>

      </div>
    </div>
  );
};

export default Sidebar;