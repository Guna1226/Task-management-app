import React from "react";
import TaskBoard from "../components/TaskBoard";
import { taskData } from "../data/tasks";

export default function Created() {
  return <TaskBoard title="Created by Me" tasks={taskData.created} />;
}

