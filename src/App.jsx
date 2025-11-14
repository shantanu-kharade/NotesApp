import Header from './components/Header.jsx';
import AddNote from './components/AddNote.jsx';
import NoteCard from './components/NoteCard.jsx';
import UpdateNote from './components/UpdateNote.jsx';
import { useState, useEffect } from 'react';
import { getAllNotes, updateNote, deleteNote } from './api/api.js';

function App() {

    const [notes, setNotes] = useState([]);
    const [isUpdateNoteOpen, setIsUpdateNoteOpen] = useState(false);
    const [currentNoteToUpdate, setCurrentNoteToUpdate] = useState(null);

    useEffect(() => {
        getAllNotes()
            .then(response => {
                setNotes(response.data);
            })
            .catch(error => {
                console.error("Error fetching notes:", error);
            });
    }, []);

    const handleAddNote = (newNoteFromDb) => {
        setNotes(prevNotes => [newNoteFromDb, ...prevNotes]);
    };

    const handleOpenUpdateModal = (note) => {
        setCurrentNoteToUpdate(note);
        setIsUpdateNoteOpen(true);
    };

    const handleCloseModal = () => {
        setIsUpdateNoteOpen(false);
        setCurrentNoteToUpdate(null);
    };

    const handleUpdateNote = (updatedNote) => {
        updateNote(updatedNote)
            .then(response => {
                const returnedNote = response.data;
                setNotes(notes.map(note =>
                    note._id === returnedNote._id ? returnedNote : note
                ));
                handleCloseModal();
            })
            .catch(error => {
                console.error("Error updating note:", error);
            });
    };

    const handleDeleteNote = (id) => {
        deleteNote(id)
            .then(response => {
                if (response.status === 200) {
                    setNotes(notes.filter(note => note._id !== id));
                }
            })
            .catch(error => {
                console.error("Error deleting note:", error);
            });
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
                            key={note._id}
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