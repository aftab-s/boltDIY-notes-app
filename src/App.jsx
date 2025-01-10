import React, { useState, useEffect } from 'react';
    import { v4 as uuidv4 } from 'uuid';
    import NoteEditor from './components/NoteEditor';

    function App() {
      const [notes, setNotes] = useState(() => {
        const savedNotes = localStorage.getItem('notes');
        return savedNotes ? JSON.parse(savedNotes) : [];
      });
      const [selectedNoteId, setSelectedNoteId] = useState(null);

      useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes));
      }, [notes]);

      const addNote = () => {
        const newNote = {
          id: uuidv4(),
          title: 'New Note',
          content: '',
        };
        setNotes([...notes, newNote]);
        setSelectedNoteId(newNote.id);
      };

      const updateNote = (id, updatedNote) => {
        setNotes(notes.map(note => note.id === id ? updatedNote : note));
      };

      const deleteNote = (id) => {
        setNotes(notes.filter(note => note.id !== id));
        setSelectedNoteId(null);
      };

      const selectNote = (id) => {
        setSelectedNoteId(id);
      };

      const selectedNote = notes.find(note => note.id === selectedNoteId);

      return (
        <div className="flex h-screen">
          <aside className="w-72 bg-bolt-gray border-r border-bolt-border p-4 flex flex-col">
            <h2 className="text-xl font-bold mb-4">Notes</h2>
            <div className="flex-1 overflow-y-auto">
              <ul className="space-y-2">
                {notes.map(note => (
                  <li key={note.id}
                    className={`p-3 rounded cursor-pointer hover:bg-bolt-hover transition-colors duration-200 ${selectedNoteId === note.id ? 'bg-bolt-accent' : ''}`}
                    onClick={() => selectNote(note.id)}>
                    <div className="font-medium truncate">{note.title || 'New Note'}</div>
                    <div className="text-sm text-gray-400 truncate">{note.content}</div>
                  </li>
                ))}
              </ul>
            </div>
            <button onClick={addNote} className="mt-4 bg-bolt-accent hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors duration-200">
              Add Note
            </button>
          </aside>
          <main className="flex-1 p-4">
            {selectedNote ? (
              <NoteEditor note={selectedNote} onUpdate={updateNote} onDelete={deleteNote} />
            ) : (
              <div className="text-center text-gray-400">Select a note or create a new one.</div>
            )}
          </main>
        </div>
      );
    }

    export default App;
