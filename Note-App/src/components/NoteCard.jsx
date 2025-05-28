import React from "react";

const NoteCard = ({ note, onDelete, onEdit }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md relative">
      <span className="absolute top-2 right-2 text-xs bg-gray-300 text-gray-800 px-2 py-1 rounded">
        {note.category}
      </span>
      <h2 className="text-xl font-semibold">{note.title}</h2>
      <p className="text-gray-700 mt-2">{note.content}</p>
      <p className="text-sm text-gray-400 mt-2">
        {new Date(note.createdAt).toLocaleString()}
      </p>
      <div className="flex gap-2 mt-4">
        <button
          onClick={onEdit} // already passed note properly in App.jsx
          className="text-sm px-3 py-1 bg-yellow-300 text-white rounded hover:bg-yellow-400"
        >
          ✏️ Edit
        </button>
        <button
          onClick={() => onDelete(note.id)}
          className="text-sm px-3 py-1 bg-red-400 text-white rounded hover:bg-red-500"
        >
          🗑 Delete
        </button>
      </div>
    </div>
  );
};

export default NoteCard;
