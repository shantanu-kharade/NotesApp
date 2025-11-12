import React, { useState } from 'react';

const AddNote = ({onAddNote}) => {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = () => {
       if (!title.trim() && !content.trim()) {
            return;
        }
        onAddNote({title, content});
        setTitle('');
        setContent('');
    }   
    return (
        <div className='relative flex flex-col bg-zinc-800/50 text-zinc-100 border border-zinc-700/50 rounded-lg p-4 w-full max-w-lg min-h-40 shadow-xl'>
            <input
                type="text"
                placeholder='Title'
                className='w-full bg-transparent outline-none placeholder-zinc-300 text-lg font-semibold'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                placeholder='Take a note...'
                className='w-full bg-transparent outline-none placeholder-zinc-300/50 grow my-2'
                value={content}
                onChange = {(e) => setContent(e.target.value)}
            ></textarea>
            <div className='flex justify-end'>
                <button 
                onClick={handleSubmit}
                className='px-4 py-2 text-sm font-medium bg-zinc-900/50 text-green-400/80 hover:bg-green-900/50 rounded-md transition-colors'>
                    Create
                </button>
            </div>
        </div>
    )
}

export default AddNote;