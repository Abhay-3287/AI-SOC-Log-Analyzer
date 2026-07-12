import React from "react";
import { Link } from "react-router-dom";
import { FaShieldAlt, FaUpload, FaRobot } from "react-icons/fa";

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-10 py-6 border-b border-slate-700">
        <div className="flex items-center gap-3">
          <FaShieldAlt className="text-cyan-400 text-3xl" />
          <h1 className="text-2xl font-bold text-cyan-400">
            AI SOC Log Analyzer
          </h1>
        </div>

        <div className="flex gap-4">
          <Link
            to="/login"
            className="px-5 py-2 rounded-lg bg-cyan-600 hover:bg-cyan-700 transition"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="px-5 py-2 rounded-lg border border-cyan-500 hover:bg-cyan-500 transition"
          >
            Register
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-20">

        <FaShieldAlt className="text-cyan-400 text-7xl mb-6" />

        <h1 className="text-5xl font-bold mb-6">
          AI Powered SOC Log Analyzer
        </h1>

        <p className="text-gray-400 max-w-3xl text-lg leading-8">
          Upload security logs and let Artificial Intelligence detect
          suspicious activities, cyber threats, and anomalies in seconds.
        </p>

        <div className="mt-10 flex gap-5">

          <Link
            to="/login"
            className="bg-cyan-600 hover:bg-cyan-700 px-8 py-3 rounded-lg font-semibold transition"
          >
            Get Started
          </Link>

          <Link
            to="/register"
            className="border border-cyan-500 hover:bg-cyan-500 px-8 py-3 rounded-lg font-semibold transition"
          >
            Create Account
          </Link>

        </div>

      </section>

      {/* Features */}
      <section className="grid md:grid-cols-3 gap-8 px-10 pb-20">

        <div className="bg-slate-800 p-8 rounded-xl text-center">
          <FaUpload className="text-cyan-400 text-5xl mx-auto mb-4" />

          <h2 className="text-2xl font-semibold mb-3">
            Upload Logs
          </h2>

          <p className="text-gray-400">
            Upload .log, .txt and .csv security log files securely.
          </p>
        </div>

        <div className="bg-slate-800 p-8 rounded-xl text-center">
          <FaRobot className="text-cyan-400 text-5xl mx-auto mb-4" />

          <h2 className="text-2xl font-semibold mb-3">
            AI Analysis
          </h2>

          <p className="text-gray-400">
            Detect malware, attacks, anomalies and suspicious patterns using AI.
          </p>
        </div>

        <div className="bg-slate-800 p-8 rounded-xl text-center">
          <FaShieldAlt className="text-cyan-400 text-5xl mx-auto mb-4" />

          <h2 className="text-2xl font-semibold mb-3">
            Threat Reports
          </h2>

          <p className="text-gray-400">
            View complete threat reports with severity levels and recommendations.
          </p>
        </div>

      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700 text-center py-6 text-gray-400">
        © 2026 AI SOC Log Analyzer | MERN + AI Project
      </footer>

    </div>
  );
};

export default Home;