import { useState, useEffect } from "react";
import NoteCard from "./components/NoteCard";
import NoteForm from "./components/NoteForm";

function App() {
  const [notes, setNotes] = useState([]);
  const [editNote, setEditNote] = useState(null);

  const [isLoaded, setIsLoaded] = useState(false);

  // Load from localStorage
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("my-notes")) || [];
    setNotes(savedNotes);
    setIsLoaded(true);
  }, []);

  // Save to localStorage
  useEffect(() => {
    if (!isLoaded) return; // Only save if data is loaded
    localStorage.setItem("my-notes", JSON.stringify(notes));
  }, [notes, isLoaded]);

  const addNote = (note) => {
    setNotes((prevNotes) => [...prevNotes, note]);
    setEditNote(null); // clear editNote after adding
  };

  const updateNote = (updatedNote) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) => (note.id === updatedNote.id ? updatedNote : note))
    );
    setEditNote(null); // clear editNote after updating
  };

  const deleteNote = (id) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  const startEditNote = (note) => {
    setEditNote(note);
  };

  return (
    <div className="min-h-screen bg-gray-200 p-4">
      <div className="flex flex-col items-center max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center mb-6"> 📝 Note App</h1>
        <NoteForm
          onAddNote={addNote}
          onUpdateNote={updateNote}
          editNote={editNote} // pass editNote prop
        />
      </div>
      <div className="grid gap-4 mt-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {notes.map((note) => (
          <NoteCard
            key={note.id}
            note={note}
            onDelete={deleteNote}
            onEdit={() => startEditNote(note)} // pass note here!
          />
        ))}
      </div>
    </div>
  );
}

export default App;
