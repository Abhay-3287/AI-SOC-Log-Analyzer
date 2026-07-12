import React from "react";
import Navbar from "../components/Navbar";
const DashboardCard = ({
  title,
  value,
  icon,
  color = "border-cyan-500",
}) => {
  return (
    <div
      className={`bg-slate-800 border-l-4 ${color} rounded-xl shadow-lg p-5 hover:scale-105 transition duration-300`}
    >
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-gray-400 text-sm">{title}</h3>

          <p className="text-3xl font-bold text-white mt-2">
            {value}
          </p>
        </div>

        <div className="text-4xl text-cyan-400">
          {icon}
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;