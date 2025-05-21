import React from "react";

const TodoList = ({ todos, setTodos }) => {
  const toggleComplete = (index) => {
    const updated = [...todos];
    updated[index].completed = !updated[index].completed;
    setTodos(updated);
  };

  const deleteTask = (index) => {
    const updated = todos.filter((_, i) => i !== index);
    setTodos(updated);
  };

  return (
    <div className="overflow-x-auto">
      <ul className="space-y-2 min-w-full">
        {todos.map((todo, index) => (
          <li
            key={index}
            className={`p-3 rounded ${
              todo.completed ? "bg-green-100/60" : "bg-white/60"
            }`}
          >
            <div className="w-full max-w-3xl mx-auto flex flex-wrap flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              {/* Task Text */}
              <span
                className={`min-w-0 break-words break-all word-break-break-word ${
                  todo.completed ? "line-through text-gray-500" : "text-black"
                }`}
              >
                {todo.text}
              </span>

              {/* Buttons */}
              <div className="flex gap-3 shrink-0 flex-shrink-0">
                <button
                  onClick={() => toggleComplete(index)}
                  className="text-sm text-green-700 underline whitespace-nowrap"
                >
                  {todo.completed ? "Undo" : "Done"}
                </button>
                <button
                  onClick={() => deleteTask(index)}
                  className="text-sm text-red-700 underline whitespace-nowrap"
                >
                  Delete
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
