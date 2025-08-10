import { useTasks } from "../context/TaskContext";

export default function TaskCard({ task }) {
  const { deleteTask } = useTasks();

  return (
    <div className="bg-[#1c253b] rounded-lg p-4 flex justify-between items-center">
      <div>
        <h4 className="font-semibold">{task.title}</h4>
        <div className="flex items-center gap-2 mt-2">
          <span className="text-xs bg-pink-500 px-2 py-1 rounded-full">{task.tag}</span>
          <span className="text-xs text-gray-400">{task.date}</span>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <img src={task.avatar} alt="avatar" className="w-8 h-8 rounded-full" />
        <button
          onClick={() => deleteTask(task.id)}
          className="text-red-400 hover:text-red-500 text-sm"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
