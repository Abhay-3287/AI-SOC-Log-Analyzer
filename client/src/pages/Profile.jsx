import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import {
  FaUserCircle,
  FaEnvelope,
  FaShieldAlt,
  FaCalendarAlt,
} from "react-icons/fa";

const Profile = () => {
  return (
    <div className="flex min-h-screen bg-slate-900">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1">

        {/* Navbar */}
        <Navbar />

        <div className="p-8">

          <h1 className="text-3xl font-bold text-white mb-8">
            User Profile
          </h1>

          <div className="max-w-3xl mx-auto bg-slate-800 rounded-2xl shadow-lg p-8">

            {/* Profile Header */}
            <div className="flex flex-col md:flex-row items-center gap-6 mb-8">

              <FaUserCircle className="text-8xl text-cyan-400" />

              <div>
                <h2 className="text-3xl font-bold text-white">
                  Abhay
                </h2>

                <p className="text-gray-400">
                  Security Operations Center Analyst
                </p>
              </div>

            </div>

            {/* User Details */}
            <div className="grid md:grid-cols-2 gap-6">

              <div className="bg-slate-700 p-5 rounded-xl">
                <div className="flex items-center gap-3 mb-2">
                  <FaEnvelope className="text-cyan-400" />
                  <h3 className="text-white font-semibold">Email</h3>
                </div>

                <p className="text-gray-300">
                  abhay@example.com
                </p>
              </div>

              <div className="bg-slate-700 p-5 rounded-xl">
                <div className="flex items-center gap-3 mb-2">
                  <FaShieldAlt className="text-green-400" />
                  <h3 className="text-white font-semibold">Role</h3>
                </div>

                <p className="text-gray-300">
                  SOC Analyst
                </p>
              </div>

              <div className="bg-slate-700 p-5 rounded-xl">
                <div className="flex items-center gap-3 mb-2">
                  <FaCalendarAlt className="text-yellow-400" />
                  <h3 className="text-white font-semibold">
                    Joined
                  </h3>
                </div>

                <p className="text-gray-300">
                  July 2026
                </p>
              </div>

              <div className="bg-slate-700 p-5 rounded-xl">
                <div className="flex items-center gap-3 mb-2">
                  <FaShieldAlt className="text-red-400" />
                  <h3 className="text-white font-semibold">
                    Account Status
                  </h3>
                </div>

                <p className="text-green-400 font-semibold">
                  Active
                </p>
              </div>

            </div>

            {/* Statistics */}
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">

              <div className="bg-slate-700 rounded-xl p-4 text-center">
                <h2 className="text-3xl font-bold text-cyan-400">
                  150
                </h2>
                <p className="text-gray-400">
                  Logs
                </p>
              </div>

              <div className="bg-slate-700 rounded-xl p-4 text-center">
                <h2 className="text-3xl font-bold text-red-400">
                  23
                </h2>
                <p className="text-gray-400">
                  Threats
                </p>
              </div>

              <div className="bg-slate-700 rounded-xl p-4 text-center">
                <h2 className="text-3xl font-bold text-green-400">
                  127
                </h2>
                <p className="text-gray-400">
                  Safe
                </p>
              </div>

              <div className="bg-slate-700 rounded-xl p-4 text-center">
                <h2 className="text-3xl font-bold text-yellow-400">
                  35
                </h2>
                <p className="text-gray-400">
                  Uploads
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Profile;