// File: pages/Goals.jsx
import React from "react";

export default function Goals() {
  const goals = [
    { title: "Launch New Website", progress: "80%" },
    { title: "Increase Sales by 20%", progress: "65%" },
    { title: "Expand Marketing Outreach", progress: "50%" },
  ];

  return (
    <div className="text-white">
      <h1 className="text-2xl font-bold mb-4">Goals</h1>
      <div className="space-y-4">
        {goals.map((g, i) => (
          <div key={i}>
            <div className="flex justify-between mb-1">
              <span>{g.title}</span>
              <span className="text-gray-400">{g.progress}</span>
            </div>
            <div className="w-full bg-gray-700 rounded h-3">
              <div
                className="bg-green-500 h-3 rounded"
                style={{ width: g.progress }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
