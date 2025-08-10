import React from "react";
import TaskBoard from "../components/TaskBoard";
import { taskData } from "../data/tasks";

export default function Personal() {
  return <TaskBoard title="Personal Tasks" tasks={taskData.personal} />;
}
