import TaskCard from "../components/TaskCard";
import { useTasks } from "../context/TaskContext";

export default function BoardView() {
  const { tasks } = useTasks();

  const columns = ["Delayed", "Today", "Upcoming"];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Agenda</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {columns.map((col) => (
          <div key={col}>
            <h3 className="text-lg font-semibold mb-3">{col}</h3>
            <div className="space-y-4">
              {tasks.filter(t => t.status === col).map(task => (
                <TaskCard key={task.id} task={task} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
