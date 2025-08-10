import React, { useState, useEffect } from "react";

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState("");
  const [dueDate, setDueDate] = useState("");

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskName.trim() || !dueDate) return;
    const newTask = { id: Date.now(), name: taskName, due: dueDate };
    setTasks([...tasks, newTask]);
    setTaskName("");
    setDueDate("");
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  return (
    <div className="text-white">
      <h1 className="text-2xl font-bold mb-4">Home</h1>

      {/* Task Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-4 rounded-lg shadow-md flex flex-col gap-4 max-w-lg"
      >
        <input
          type="text"
          placeholder="Task name"
          className="p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <input
          type="date"
          className="p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
        >
          Add Task
        </button>
      </form>

      {/* Tasks Table */}
      <div className="mt-8 overflow-x-auto">
        <table className="min-w-full border border-gray-700 rounded-lg">
          <thead>
            <tr className="bg-gray-800 text-left">
              <th className="p-3 border-b border-gray-700">Task</th>
              <th className="p-3 border-b border-gray-700">Due Date</th>
              <th className="p-3 border-b border-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.length === 0 ? (
              <tr>
                <td colSpan="3" className="p-4 text-center text-gray-400">
                  No tasks yet.
                </td>
              </tr>
            ) : (
              tasks.map((task) => (
                <tr key={task.id} className="hover:bg-gray-800 transition">
                  <td className="p-3 border-b border-gray-700">{task.name}</td>
                  <td className="p-3 border-b border-gray-700">{task.due}</td>
                  <td className="p-3 border-b border-gray-700">
                    <button
                      onClick={() => handleDelete(task.id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
