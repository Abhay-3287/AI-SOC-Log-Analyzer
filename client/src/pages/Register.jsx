import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaShieldAlt,
  FaUser,
  FaEnvelope,
  FaLock,
} from "react-icons/fa";

import API from "../services/api";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle Register
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check Password Match
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      setLoading(true);

      const response = await API.post("/auth/register", {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });

      alert(response.data.message);

      // Clear Form
      setFormData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });

      // Redirect to Login
    //   navigate("/login");
    window.location.href = "/login";
    } catch (error) {
      console.error(error);

      alert(
        error.response?.data?.message ||
          "Registration Failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center px-5">
      <div className="w-full max-w-md bg-slate-800 rounded-2xl shadow-xl p-8">

        {/* Header */}
        <div className="text-center mb-8">
          <FaShieldAlt className="text-6xl text-cyan-400 mx-auto mb-4" />

          <h1 className="text-3xl font-bold text-white">
            Create Account
          </h1>

          <p className="text-gray-400 mt-2">
            Register to AI SOC Log Analyzer
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Name */}
          <div>
            <label className="block text-gray-300 mb-2">
              Full Name
            </label>

            <div className="flex items-center bg-slate-700 rounded-lg px-3">
              <FaUser className="text-gray-400" />

              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                className="w-full bg-transparent outline-none p-3 text-white"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-300 mb-2">
              Email
            </label>

            <div className="flex items-center bg-slate-700 rounded-lg px-3">
              <FaEnvelope className="text-gray-400" />

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full bg-transparent outline-none p-3 text-white"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-300 mb-2">
              Password
            </label>

            <div className="flex items-center bg-slate-700 rounded-lg px-3">
              <FaLock className="text-gray-400" />

              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="w-full bg-transparent outline-none p-3 text-white"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-gray-300 mb-2">
              Confirm Password
            </label>

            <div className="flex items-center bg-slate-700 rounded-lg px-3">
              <FaLock className="text-gray-400" />

              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm your password"
                className="w-full bg-transparent outline-none p-3 text-white"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Register Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-cyan-600 hover:bg-cyan-700 disabled:bg-gray-600 py-3 rounded-lg text-white font-semibold transition"
          >
            {loading ? "Creating Account..." : "Register"}
          </button>

        </form>

        {/* Login Link */}
        <p className="text-center text-gray-400 mt-6">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-cyan-400 hover:underline"
          >
            Login
          </Link>
        </p>

      </div>
    </div>
  );
};

export default Register;