// File: src/pages/Home.jsx
import React, { useEffect, useState } from "react";
import { Calendar, Paperclip, Clock } from "lucide-react";
import Header from "../components/Header";

const defaultTasks = [
  {
    id: 1,
    title: "Product Screenshots",
    status: "Delayed",
    badge: "Open",
    attachments: 3,
    assignee: "https://i.pravatar.cc/40?img=12",
    due: "2025-08-02",
  },
  {
    id: 2,
    title: "On boarding flow",
    status: "Delayed",
    badge: "To be reviewed",
    attachments: 1,
    assignee: "https://i.pravatar.cc/40?img=46",
    due: "2025-08-05",
  },
  {
    id: 3,
    title: "Ideas for Brand Campaign",
    status: "Today",
    badge: "In Progress",
    attachments: 0,
    assignee: "https://i.pravatar.cc/40?img=5",
    due: "2025-08-08",
  },
  {
    id: 4,
    title: "Draft Campaign Brief",
    status: "Upcoming",
    badge: "Planned",
    attachments: 2,
    assignee: "https://i.pravatar.cc/40?img=9",
    due: "2025-08-12",
  },
];

const columns = ["Delayed", "Today", "Upcoming"];

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [view, setView] = useState("board"); // 'board' or 'list'
  const [search, setSearch] = useState("");

  // load tasks from localStorage or default data
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("tasks_v2"));
    if (stored && Array.isArray(stored) && stored.length) {
      setTasks(stored);
    } else {
      setTasks(defaultTasks);
      localStorage.setItem("tasks_v2", JSON.stringify(defaultTasks));
    }
  }, []);

  // persist
  useEffect(() => {
    localStorage.setItem("tasks_v2", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    const title = prompt("New task title");
    if (!title) return;
    const newTask = {
      id: Date.now(),
      title,
      status: "Upcoming",
      badge: "Open",
      attachments: 0,
      assignee: "https://i.pravatar.cc/40",
      due: new Date().toISOString().slice(0, 10),
    };
    setTasks((t) => [newTask, ...t]);
  };

  const deleteTask = (id) => {
    if (!confirm("Delete this task?")) return;
    setTasks((t) => t.filter((x) => x.id !== id));
  };

  // filtered tasks by search
  const filtered = tasks.filter(
    (t) =>
      t.title.toLowerCase().includes(search.toLowerCase()) ||
      (t.badge && t.badge.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="flex-1 min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header onAddClick={addTask} searchValue={search} setSearchValue={setSearch} />

      <div className="p-6">
        {/* Board/List toggle and header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">Agenda</h2>
            <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 p-1 rounded">
              <button
                onClick={() => setView("board")}
                className={`px-3 py-1 rounded ${view === "board" ? "bg-white dark:bg-gray-700 shadow" : "text-gray-500"}`}
              >
                Board
              </button>
              <button
                onClick={() => setView("list")}
                className={`px-3 py-1 rounded ${view === "list" ? "bg-white dark:bg-gray-700 shadow" : "text-gray-500"}`}
              >
                List
              </button>
            </div>
          </div>

          <div className="flex items-center gap-3 text-sm">
            <span className="text-gray-500 hidden sm:inline">View: </span>
            <div className="flex items-center gap-2 text-gray-500">
              <Clock size={16} />
              <span className="hidden sm:inline">Tasks due soon</span>
            </div>
          </div>
        </div>

        {/* Board view */}
        {view === "board" ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {columns.map((col) => (
              <div key={col}>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200">{col}</h3>
                  <span className="text-sm text-gray-400">
                    {filtered.filter((t) => t.status === col).length}
                  </span>
                </div>

                <div className="space-y-3">
                  {filtered
                    .filter((t) => t.status === col)
                    .map((task) => (
                      <div key={task.id} className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border border-gray-200 dark:border-gray-700">
                        <div className="flex justify-between items-start">
                          <div className="max-w-[70%]">
                            <h4 className="font-medium text-gray-800 dark:text-white">{task.title}</h4>
                            <div className="flex items-center gap-2 mt-2">
                              <span className="text-xs bg-pink-100 text-pink-700 px-2 py-0.5 rounded">{task.badge}</span>
                              <div className="flex items-center gap-2 text-xs text-gray-500">
                                <Paperclip size={14} /> {task.attachments}
                              </div>
                              <div className="flex items-center gap-2 text-xs text-gray-500">
                                <Calendar size={14} /> <span>{task.due}</span>
                              </div>
                            </div>
                          </div>

                          <div className="flex flex-col items-end gap-2">
                            <img src={task.assignee} alt="assignee" className="w-8 h-8 rounded-full border" />
                            <div className="flex gap-2">
                              <button onClick={() => deleteTask(task.id)} className="text-xs text-red-500 hover:text-red-600">Delete</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          // List view
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
            <table className="w-full text-left">
              <thead>
                <tr className="text-sm text-gray-500">
                  <th className="p-2">Task</th>
                  <th className="p-2">Status</th>
                  <th className="p-2">Attachments</th>
                  <th className="p-2">Assignee</th>
                  <th className="p-2">Due</th>
                  <th className="p-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="p-4 text-center text-gray-500">No tasks found.</td>
                  </tr>
                ) : (
                  filtered.map((t) => (
                    <tr key={t.id} className="border-t border-gray-100 dark:border-gray-700">
                      <td className="p-2 align-top">{t.title}</td>
                      <td className="p-2"><span className="text-sm bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">{t.badge}</span></td>
                      <td className="p-2">{t.attachments}</td>
                      <td className="p-2"><img src={t.assignee} alt="a" className="w-6 h-6 rounded-full inline-block" /></td>
                      <td className="p-2">{t.due}</td>
                      <td className="p-2">
                        <button onClick={() => deleteTask(t.id)} className="text-red-500 text-sm">Delete</button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

