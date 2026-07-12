import React from "react";

const logs = [
  {
    id: 1,
    filename: "system.log",
    status: "Safe",
    uploaded: "12 Jul 2026",
  },
  {
    id: 2,
    filename: "apache.log",
    status: "Threat",
    uploaded: "12 Jul 2026",
  },
  {
    id: 3,
    filename: "security.log",
    status: "Safe",
    uploaded: "11 Jul 2026",
  },
  {
    id: 4,
    filename: "network.log",
    status: "Threat",
    uploaded: "10 Jul 2026",
  },
];

const LogTable = () => {
  return (
    <div className="bg-slate-800 rounded-xl shadow-lg p-6 mt-8">
      <h2 className="text-2xl font-semibold text-white mb-4">
        Recent Uploaded Logs
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-gray-300">
          <thead className="border-b border-slate-600">
            <tr>
              <th className="py-3">#</th>
              <th className="py-3">File Name</th>
              <th className="py-3">Status</th>
              <th className="py-3">Uploaded On</th>
            </tr>
          </thead>

          <tbody>
            {logs.map((log) => (
              <tr
                key={log.id}
                className="border-b border-slate-700 hover:bg-slate-700 transition"
              >
                <td className="py-4">{log.id}</td>

                <td className="py-4">{log.filename}</td>

                <td className="py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      log.status === "Threat"
                        ? "bg-red-600 text-white"
                        : "bg-green-600 text-white"
                    }`}
                  >
                    {log.status}
                  </span>
                </td>

                <td className="py-4">{log.uploaded}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LogTable;