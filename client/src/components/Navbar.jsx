import React from "react";
import {
  FaBell,
  FaSearch,
  FaUserCircle,
  FaSignOutAlt,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="bg-slate-800 shadow-md px-6 py-4 flex items-center justify-between">

      {/* Left Section */}
      <div>
        <h1 className="text-2xl font-bold text-cyan-400">
          AI SOC Log Analyzer
        </h1>

        <p className="text-gray-400 text-sm">
          Security Operations Center Dashboard
        </p>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-6">

        {/* Search */}
        <div className="hidden md:flex items-center bg-slate-700 rounded-lg px-3 py-2">
          <FaSearch className="text-gray-400 mr-2" />

          <input
            type="text"
            placeholder="Search logs..."
            className="bg-transparent outline-none text-white placeholder-gray-400"
          />
        </div>

        {/* Notification */}
        <button className="relative text-gray-300 hover:text-cyan-400 transition">
          <FaBell size={22} />

          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
            3
          </span>
        </button>

        {/* User */}
        <div className="flex items-center gap-2">
          <FaUserCircle size={34} className="text-cyan-400" />

          <div className="hidden md:block">
            <p className="text-white font-semibold">Abhay</p>
            <p className="text-gray-400 text-sm">SOC Analyst</p>
          </div>
        </div>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg text-white transition"
        >
          <FaSignOutAlt />
          Logout
        </button>

      </div>
    </nav>
  );
};

export default Navbar;