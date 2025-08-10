import { createContext, useContext, useEffect, useState } from "react";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState(() => {
    const stored = localStorage.getItem("tasks");
    return stored ? JSON.parse(stored) : [
      { id: 1, title: "Product Screenshots", status: "Delayed", tag: "Open", date: "2025-08-02", avatar: "/avatar1.png" },
      { id: 2, title: "On boarding flow", status: "Delayed", tag: "To be reviewed", date: "2025-08-05", avatar: "/avatar2.png" },
      { id: 3, title: "Ideas for Brand Campaign", status: "Today", tag: "In Progress", date: "2025-08-08", avatar: "/avatar3.png" },
      { id: 4, title: "Draft Campaign Brief", status: "Upcoming", tag: "Planned", date: "2025-08-12", avatar: "/avatar4.png" }
    ];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => setTasks([...tasks, { ...task, id: Date.now() }]);
  const deleteTask = (id) => setTasks(tasks.filter(t => t.id !== id));

  return (
    <TaskContext.Provider value={{ tasks, addTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => useContext(TaskContext);
