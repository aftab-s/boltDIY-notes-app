import React from 'react';

    function NoteEditor({ note, onUpdate, onDelete }) {
      const handleTitleChange = (e) => {
        onUpdate(note.id, { ...note, title: e.target.value });
      };

      const handleContentChange = (e) => {
        onUpdate(note.id, { ...note, content: e.target.value });
      };

      return (
        <div className="bg-bolt-gray p-4 rounded-lg shadow-md border border-bolt-border flex flex-col h-full">
          <input
            type="text"
            placeholder="Title"
            value={note.title}
            onChange={handleTitleChange}
            className="w-full bg-transparent text-white text-xl font-bold mb-4 focus:outline-none border-b border-bolt-border pb-2"
          />
          <textarea
            placeholder="Content"
            value={note.content}
            onChange={handleContentChange}
            className="w-full bg-transparent text-white focus:outline-none h-full resize-none flex-1"
          />
          <div className="mt-4 flex justify-end">
            <button onClick={() => onDelete(note.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition-colors duration-200">
              Delete
            </button>
          </div>
        </div>
      );
    }

    export default NoteEditor;
