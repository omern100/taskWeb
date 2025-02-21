import { Task } from "../interfaces";

interface TaskItemProps {
  task: Task;
  onToggleComplete: (id: string) => void;
  onDelete: (id: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({
  task,
  onToggleComplete,
  onDelete,
}) => {
  return (
    <li
      className={`flex items-center justify-between bg-white p-4 rounded-lg shadow-md mb-4 transition-all duration-300 ${
        task.completed
          ? "bg-gray-100 line-through text-gray-500"
          : "hover:shadow-lg"
      }`}
    >
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggleComplete(task.id)}
          className="h-5 w-5 text-indigo-600 rounded focus:ring-indigo-500"
        />
        <div>
          <span className="text-lg font-medium">{task.title}</span>
          {task.description && (
            <p className="text-sm text-gray-600">{task.description}</p>
          )}
        </div>
      </div>
      <button
        onClick={() => onDelete(task.id)}
        className="text-red-500 hover:text-red-700 transition-colors duration-200"
      >
        Delete
      </button>
    </li>
  );
};

export default TaskItem;