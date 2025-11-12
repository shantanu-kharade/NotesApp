import React from 'react';
import Header from './components/Header.jsx';
import AddNote from './components/AddNote.jsx';
import NoteCard from './components/NoteCard.jsx';
import UpdateNote from './components/UpdateNote.jsx';
import { useState } from 'react';

function App() {

    const [notes, setNotes] = useState([]);

    const [isUpdateNoteOpen, setIsUpdateNoteOpen] = useState(false);
    const [currentNoteToUpdate, setCurrentNoteToUpdate] = useState(null);

    const handleAddNote = (note) => {
        const newNote ={
            id: Date.now(),
            title: note.title,
            content: note.content,
        }
        setNotes([newNote, ...notes]);
    }

    const handleOpenUpdateModal = (note) => {
        setCurrentNoteToUpdate(note);
        setIsUpdateNoteOpen(true);
    };

    const handleCloseModal = () => {
        setIsUpdateNoteOpen(false);
        setCurrentNoteToUpdate(null);
    };

    const handleUpdateNote = (updatedNote) => {
        setNotes(notes.map(note =>
            note.id === updatedNote.id ? updatedNote : note
        ));
        handleCloseModal();
    };

    const handleDeleteNote = (id) => {
        setNotes(notes.filter(note => note.id !== id));
    };

    return (
        <div>
            <div className='bg-zinc-800 min-h-screen'>
                <Header />

                <div className='flex justify-center mb-8 px-4'>
                    <AddNote onAddNote={handleAddNote} />
                </div>

               < hr className="my-3 border-zinc-700" />

                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-8 pb-8 mt-10'>
                    {notes.map((note) => (
                        <NoteCard
                            key={note.id}
                            note={note}
                            onUpdate={handleOpenUpdateModal}
                            onDelete={handleDeleteNote}
                        />
                    ))}
                </div>

                {isUpdateNoteOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
                    onClick={handleCloseModal}
                >x
                    <div onClick={(e) => e.stopPropagation()}>
                        <UpdateNote
                            note={currentNoteToUpdate}
                            onUpdateNote={handleUpdateNote}
                            onClose={handleCloseModal}
                        />
                    </div>
                </div>
            )}
            </div>
        </div>
    );
}

export default App;