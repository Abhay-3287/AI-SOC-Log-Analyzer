import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaShieldAlt, FaEnvelope, FaLock } from "react-icons/fa";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      // Backend API (Phase 2)
      // const res = await axios.post(
      //   "http://localhost:5000/api/auth/login",
      //   formData
      // );

      // localStorage.setItem("token", res.data.token);

      // Temporary Login
      localStorage.setItem("token", "demo_token");

      alert("Login Successful");

      navigate("/dashboard");
    } catch (error) {
      alert("Login Failed");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center px-5">

      <div className="w-full max-w-md bg-slate-800 rounded-2xl shadow-xl p-8">

        <div className="text-center mb-8">
          <FaShieldAlt className="text-6xl text-cyan-400 mx-auto mb-4" />

          <h1 className="text-3xl font-bold text-white">
            AI SOC Log Analyzer
          </h1>

          <p className="text-gray-400 mt-2">
            Login to your account
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Email */}
          <div>
            <label className="text-gray-300 block mb-2">
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
            <label className="text-gray-300 block mb-2">
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

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-cyan-600 hover:bg-cyan-700 transition text-white py-3 rounded-lg font-semibold"
          >
            {loading ? "Logging In..." : "Login"}
          </button>

        </form>

        <p className="text-center text-gray-400 mt-6">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-cyan-400 hover:underline"
          >
            Register
          </Link>
        </p>

      </div>

    </div>
  );
};

export default Login;