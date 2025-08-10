// File: pages/MyTasks.jsx
import React, { useState, useEffect } from "react";

export default function MyTasks() {
  const [tasks, setTasks] = useState([]);
  const [form, setForm] = useState({ title: "", description: "" });

  // Load tasks from localStorage on page load
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("myTasks")) || [];
    setTasks(saved);
  }, []);

  // Save tasks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("myTasks", JSON.stringify(tasks));
  }, [tasks]);

  // Handle form input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title.trim()) return;
    const newTask = {
      id: Date.now(),
      title: form.title,
      description: form.description,
    };
    setTasks([...tasks, newTask]);
    setForm({ title: "", description: "" });
  };

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  return (
    <div className="text-white">
      <h1 className="text-2xl font-bold mb-4">My Tasks</h1>

      {/* Task Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-4 rounded mb-6 shadow space-y-4"
      >
        <div>
          <label className="block mb-1 text-sm">Task Title</label>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            className="w-full p-2 rounded bg-gray-700 border border-gray-600 text-white"
            placeholder="Enter task title"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm">Description</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            className="w-full p-2 rounded bg-gray-700 border border-gray-600 text-white"
            placeholder="Enter task description"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded font-semibold"
        >
          Add Task
        </button>
      </form>

      {/* Tasks Table */}
      {tasks.length === 0 ? (
        <p className="text-gray-400">No tasks yet. Add one above.</p>
      ) : (
        <table className="w-full border border-gray-700 rounded overflow-hidden">
          <thead className="bg-gray-800">
            <tr>
              <th className="px-4 py-2 text-left">Title</th>
              <th className="px-4 py-2 text-left">Description</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr
                key={task.id}
                className="border-t border-gray-700 hover:bg-gray-800"
              >
                <td className="px-4 py-2">{task.title}</td>
                <td className="px-4 py-2">{task.description}</td>
                <td className="px-4 py-2 text-center">
                  <button
                    onClick={() => deleteTask(task.id)}
                    className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded text-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

