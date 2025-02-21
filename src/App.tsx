import { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskItem from "./components/TaskItem";
import { Task } from "./interfaces";

type FilterType = "all" | "completed" | "incomplete";

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [filter, setFilter] = useState<FilterType>("all");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task: Task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  };

  const toggleComplete = (id: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id: string) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "incomplete") return !task.completed;
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <div className="max-w-2xl w-full space-y-8">
        <div className="flex justify-center">
          <img
            src="/photo-task.png"
            alt="Task Manager Logo"
            className="w-32 h-48 object-contain shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
          />
        </div>
        <h1 className="text-4xl font-bold text-center text-gray-800">Task Manager</h1>
        <TaskForm onAddTask={addTask} />
        <div className="flex justify-center gap-4">
          {["all", "completed", "incomplete"].map((type) => (
            <button
              key={type}
              className={`px-4 py-2 rounded-lg shadow-md font-medium transition-all duration-200 transform hover:scale-105 ${filter === type
                ? "bg-indigo-600 text-white"
                : "bg-white text-indigo-600 hover:bg-indigo-50"
                }`}
              onClick={() => setFilter(type as FilterType)}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>
        <ul className="space-y-4">
          {filteredTasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onToggleComplete={toggleComplete}
              onDelete={deleteTask}
            />
          ))}
        </ul>
      </div>

      <footer className="mt-12 text-center space-y-4">
        <img
          src="/photo.png"
          alt="Omer's Photo"
          className="mx-auto w-32 h-32 rounded-full shadow-lg animate-spin-slow"
        />
        <p className="text-lg font-semibold text-gray-800">Omer Nagar</p>
        <p className="text-md text-gray-600 italic">
          ,פרויקט כל כך מסובך <br />!שכמעט קראתי לו משימה בלתי אפשרית
        </p>
      </footer>
    </div>
  );
};

export default App;