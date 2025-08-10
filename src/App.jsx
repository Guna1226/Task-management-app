import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Unified from "./pages/Unified";
import Personal from "./pages/Personal";
import Assigned from "./pages/Assigned";
import Created from "./pages/Created";
import { taskData as initialData } from "./data/tasks";
import NewTaskModal from "./components/NewTaskModal";

export default function App() {
  const [tasks, setTasks] = useState(initialData);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addTask = (type, newTask) => {
    setTasks((prev) => {
      const updated = { ...prev };
      updated[type] = updated[type].map((col) =>
        col.status === newTask.status
          ? { ...col, items: [...col.items, { title: newTask.title, due: newTask.due }] }
          : col
      );
      return updated;
    });
  };

  return (
    <Router>
      <div className="flex h-screen bg-[#0e1525] text-white">
        <Sidebar onNewTaskClick={() => setIsModalOpen(true)} />
        <main className="flex-1 overflow-y-auto">
          <Header />
          <div className="p-6">
            <Routes>
              <Route path="/" element={<Home tasks={tasks.unified} />} />
              <Route path="/unified" element={<Unified tasks={tasks.unified} />} />
              <Route path="/personal" element={<Personal tasks={tasks.personal} />} />
              <Route path="/assigned" element={<Assigned tasks={tasks.assigned} />} />
              <Route path="/created" element={<Created tasks={tasks.created} />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </div>
        </main>
      </div>

      <NewTaskModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddTask={addTask}
      />
    </Router>
  );
}

