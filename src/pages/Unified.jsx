// File: pages/Unified.jsx
import React, { useContext } from "react";
import TaskBoard from "../components/TaskBoard";
import { TaskContext } from "../context/TaskContext";

export default function Unified() {
  const { tasks } = useContext(TaskContext);

  return (
    <TaskBoard
      title="Unified View"
      tasks={tasks} // pass the shared tasks, TaskBoard will filter/group
    />
  );
}


