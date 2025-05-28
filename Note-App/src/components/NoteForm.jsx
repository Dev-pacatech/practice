import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const NoteForm = ({ onAddNote, onUpdateNote, editNote }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("personal");

  // Populate form when editNote changes
  useEffect(() => {
    if (editNote) {
      setTitle(editNote.title);
      setContent(editNote.content);
      setCategory(editNote.category || "personal");
    } else {
      // Clear form when no editNote
      setTitle("");
      setContent("");
      setCategory("personal");
    }
  }, [editNote]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newNote = {
      id: editNote ? editNote.id : uuidv4(),
      title,
      content,
      category,
      createdAt: editNote ? editNote.createdAt : new Date().toISOString(),
    };

    if (editNote) {
      onUpdateNote(newNote);
    } else {
      onAddNote(newNote);
    }
    setTitle("");
    setContent("");
    setCategory("personal");
  };

  return (
    <form
      className="bg-white p-4 rounded-lg shadow-md max-w-xl"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        className="w-full border p-2 mb-2 rounded"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        placeholder="Note Title"
      />
      <textarea
        className="w-full border p-2 mb-2 rounded"
        rows={4}
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
        placeholder="Note Content..."
      ></textarea>
      <select
        className="w-full border rounded p-2 mb-2"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="personal">Personal</option>
        <option value="work">Work</option>
        <option value="ideas">Ideas</option>
        <option value="urgent">Urgent</option>
      </select>
      <button
        type="submit"
        className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
      >
        {editNote ? "Update Note" : "Add Note"}
      </button>
    </form>
  );
};

export default NoteForm;
