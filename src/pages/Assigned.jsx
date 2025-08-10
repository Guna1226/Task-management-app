import React from "react";
import TaskBoard from "../components/TaskBoard";
import { taskData } from "../data/tasks";

export default function Assigned() {
  return <TaskBoard title="Assigned to Me" tasks={taskData.assigned} />;
}

