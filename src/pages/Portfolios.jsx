// File: pages/Portfolios.jsx
import React from "react";

export default function Portfolios() {
  const portfolios = [
    { name: "Marketing Campaigns", projects: 5 },
    { name: "Product Development", projects: 8 },
    { name: "Client Projects", projects: 4 },
  ];

  return (
    <div className="text-white">
      <h1 className="text-2xl font-bold mb-4">Portfolios</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {portfolios.map((p, i) => (
          <div key={i} className="bg-gray-800 p-4 rounded shadow hover:shadow-lg transition">
            <h2 className="text-lg font-semibold">{p.name}</h2>
            <p className="text-gray-400">{p.projects} active projects</p>
          </div>
        ))}
      </div>
    </div>
  );
}
