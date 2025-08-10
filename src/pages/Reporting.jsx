// File: pages/Reporting.jsx
import React from "react";

export default function Reporting() {
  const reports = [
    { name: "Weekly Progress", status: "Completed", date: "2025-08-05" },
    { name: "Team Performance", status: "In Progress", date: "2025-08-07" },
    { name: "Project Budget", status: "Pending", date: "2025-08-09" },
  ];

  return (
    <div className="text-white">
      <h1 className="text-2xl font-bold mb-4">Reporting</h1>
      <table className="w-full border border-gray-700 rounded overflow-hidden">
        <thead className="bg-gray-800">
          <tr>
            <th className="px-4 py-2 text-left">Report Name</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Date</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((r, i) => (
            <tr key={i} className="border-t border-gray-700 hover:bg-gray-800">
              <td className="px-4 py-2">{r.name}</td>
              <td className="px-4 py-2">{r.status}</td>
              <td className="px-4 py-2">{r.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
