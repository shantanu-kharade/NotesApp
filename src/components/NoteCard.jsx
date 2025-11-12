import React from 'react';

const NoteCard = ({ note, onUpdate, onDelete }) => {
    return (
        <div className='flex flex-col justify-between bg-zinc-800 text-zinc-700/50 shadow-xl border rounded-lg p-4  min-h-[150px]'>
            <div>
                <h3 className='text-zinc-300 font-semibold text-lg mb-1 wrap-break-words'>{note.title || 'Untitled Note'}</h3>
                <p className='text-zinc-300/60 text-sm whitespace-pre-wrap wrapbreak-words'>{note.content || 'No content'}</p>
            </div>
            <div className='flex justify-end gap-x-2 mt-4'>
                <button
                    onClick={() => onUpdate(note)}
                    className='px-4 py-2 text-sm bg-zinc-900/50 font-medium text-amber-400/80 hover:bg-amber-900/50 rounded-md transition-colors'
                >
                    Update
                </button>
                <button
                    onClick={() => onDelete(note.id)}
                    className='px-4 py-2 text-sm  bg-zinc-900/50 font-medium text-red-400/80 hover:bg-red-900/50 rounded-md transition-colors'
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default NoteCard;