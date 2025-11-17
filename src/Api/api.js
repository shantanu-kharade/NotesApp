import axios from 'axios';

export const api = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
})

const createNote = (Note) =>{
    return api.post('Notes/create-note', Note)   
}

const getAllNotes = () =>{
    return api.get('Notes/get-all-notes')
}   

const updateNote = (updatedNote) => {
    return api.patch('Notes/update-note', updatedNote);
}

const deleteNote = (id) => {
    return api.delete('Notes/delete-note', { data: { _id: id } });
}

export{
    createNote,
    getAllNotes,
    updateNote,
    deleteNote
}