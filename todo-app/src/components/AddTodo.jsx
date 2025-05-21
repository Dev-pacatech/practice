import React from "react";

const AddTodo = ({ addList, input, setInput }) => {
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  return (
    <div className="flex flex-wrap gap-2 mb-4">
      <input
        type="text"
        value={input}
        onChange={handleChange}
        className="min-w-0 rounded bg-white/60 placeholder-grey-500 flex-1 p-2 focus:outline-none"
        placeholder="Enter a task..."
      />
      <button
        onClick={addList}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Add
      </button>
    </div>
  );
};

export default AddTodo;
