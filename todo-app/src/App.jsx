import React, { useState } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

const App = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const addList = () => {
    if (input.trim() === "") return;
    setTodos([...todos, { text: input, completed: false }]);
    setInput("");
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center p-4">
      <div className="w-full max-w-md sm:max-w-lg md:max-w-3xl bg-white/20 backdrop-blur p-6 rounded-xl shadow-xl">
        <h1 className="text-3xl text-white font-bold text-center mb-4">
          To-Do List
        </h1>
        <AddTodo addList={addList} input={input} setInput={setInput} />
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
};

export default App;
