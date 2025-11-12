import React, { useState, useEffect } from 'react'

const UpdateNote = ({ note, onUpdateNote, onClose }) => {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    useEffect(() => {
        if (note) {
            setTitle(note.title);
            setContent(note.content);
        }
    }, [note]);

    const handleSubmit = () => {
        if (!title.trim() && !content.trim()) {

            return;
        }
        onUpdateNote({
            ...note,
            title: title,
            content: content,
        });
    };


    if (!note) return null;

    return (
        <div>

            <div className='relative flex flex-col bg-zinc-800 text-zinc-100 border border-zinc-700/50 rounded-lg p-4 w-100  min-h-40 shadow-lg'>
                <input
                    type="text"
                    placeholder='Title'
                    className='w-full bg-transparent outline-none placeholder-zinc-400 text-lg font-semibold'

                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <textarea
                    placeholder='Update a note...'
                    className='w-full bg-transparent outline-none placeholder-zinc-400 grow my-2'

                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                ></textarea>
                <div className='flex justify-end gap-x-2'>

                    <button
                        onClick={onClose}
                        className='px-4 py-2 text-sm font-medium bg-zinc-900/50 text-zinc-400 hover:bg-zinc-700/50   transition-colors'
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleSubmit}
                        className='px-4 py-2 text-sm font-medium bg-zinc-900/50 text-amber-400 hover:bg-amber-900/50 rounded-md transition-colors'
                    >
                        Update
                    </button>
                </div>
            </div>
        </div>
    )
}

export default UpdateNote;