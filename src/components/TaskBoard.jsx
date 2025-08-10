// File: src/components/TaskBoard.jsx
import React from "react";
import TaskCard from "./TaskCard";

export default function TaskBoard({ title, tasks }) {
  // Group tasks by status
  const columns = {
    delayed: tasks.filter(t => t.status === "Delayed"),
    today: tasks.filter(t => t.status === "Today"),
    upcoming: tasks.filter(t => t.status === "Upcoming"),
  };

  return (
    <div className="p-4 text-white">
      <h1 className="text-2xl font-bold mb-6">{title}</h1>
      <div className="flex gap-6">
        {Object.entries(columns).map(([colName, colTasks]) => (
          <div key={colName} className="flex-1">
            <h2 className="text-lg font-semibold mb-4 capitalize">{colName}</h2>
            {colTasks.length > 0 ? (
              colTasks.map(task => (
                <TaskCard key={task.id} task={task} />
              ))
            ) : (
              <p className="text-gray-400 text-sm">No tasks</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

