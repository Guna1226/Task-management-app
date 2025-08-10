import React, { useState } from "react";

export default function NewTaskModal({ isOpen, onClose, onAddTask }) {
  const [title, setTitle] = useState("");
  const [due, setDue] = useState("");
  const [type, setType] = useState("unified");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    onAddTask(type, { title, due, status: "To Do" });
    setTitle("");
    setDue("");
    setType("unified");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-[#1c253b] p-6 rounded-md w-96 shadow-lg">
        <h2 className="text-xl font-semibold mb-4">New Task</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Title</label>
            <input
              type="text"
              className="w-full p-2 rounded bg-[#2a3550] text-white"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Due Date</label>
            <input
              type="date"
              className="w-full p-2 rounded bg-[#2a3550] text-white"
              value={due}
              onChange={(e) => setDue(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Task Category</label>
            <select
              className="w-full p-2 rounded bg-[#2a3550] text-white"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option value="unified">Unified</option>
              <option value="personal">Personal</option>
              <option value="assigned">Assigned</option>
              <option value="created">Created</option>
            </select>
          </div>
          <div className="flex justify-end gap-3">
            <button
              type="button"
              className="px-4 py-2 bg-gray-500 hover:bg-gray-600 rounded text-white"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-pink-500 hover:bg-pink-600 rounded text-white"
            >
              Add Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
