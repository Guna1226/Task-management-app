// File: src/pages/Dashboard.jsx
import React from "react";
import { BadgeCheck, Clock, Star } from "lucide-react";

const tasksDueSoon = [
  { id: 1, title: "Access to new product features", labels: ["Advance", "Customer"], due: "Today" },
  { id: 2, title: "Ideas for a Brand Campaign", labels: ["Project"], due: "Saturday" },
  { id: 3, title: "Draft Campaign Brief", labels: ["Seasonal"], due: "Sunday" },
  { id: 4, title: "Create weekly status and comms for stakeholders", labels: ["Team Work"], due: "Sunday" },
  { id: 5, title: "Hungary Logistics Executive Meeting", labels: ["Logistics"], due: "Tuesday" },
  { id: 6, title: "Share assets for Shared Services", labels: ["Increase", "Customer"], due: "Tuesday" },
];

const favorites = [
  { id: 1, name: "Seasonal Marketing Campaign", color: "bg-orange-500", category: "Marketing NA" },
  { id: 2, name: "Advanced Support", color: "bg-yellow-400", category: "Sales" },
  { id: 3, name: "Customer Appreciation Event", color: "bg-green-500", category: "Sales" },
  { id: 4, name: "Global Marketing Roadmap", color: "bg-pink-500", category: "1 project - 10 portfolios" },
  { id: 5, name: "Marketing Current Roadmap", color: "bg-indigo-500", category: "13 projects" },
];

export default function Dashboard() {
  return (
    <div className="p-6 space-y-10 bg-gray-900 min-h-screen text-white">
      {/* Tasks Due Soon */}
      <section>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <Clock size={18} />
            Tasks Due Soon
          </h2>
          <a href="#" className="text-sm text-blue-400 hover:underline">See all my tasks</a>
        </div>
        <div className="bg-gray-800 rounded-lg p-4 shadow">
          {tasksDueSoon.map((task) => (
            <div key={task.id} className="border-b border-gray-700 py-2 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <BadgeCheck className="text-gray-400" size={18} />
                <span className="text-sm">{task.title}</span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                {task.labels.map((label, index) => (
                  <span key={index} className="bg-gray-700 text-white px-2 py-0.5 rounded-full">
                    {label}
                  </span>
                ))}
                <span className="text-gray-400">{task.due}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Favorites */}
      <section>
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Star size={18} />
          Favorites
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {favorites.map((fav) => (
            <div key={fav.id} className={`rounded-xl p-4 shadow text-white ${fav.color}`}>
              <h3 className="text-lg font-bold mb-1">{fav.name}</h3>
              <p className="text-sm text-white/70">{fav.category}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
