import axios from 'axios';

export const api = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
})

const createNote = (Note) =>{
    return api.post('/create-note', Note)   
}

const getAllNotes = () =>{
    return api.get('/get-all-notes')
}   

const updateNote = (updatedNote) => {
    return api.patch('/update-note', updatedNote);
}

const deleteNote = (id) => {
    return api.delete('/delete-note', { data: { _id: id } });
}

export{
    createNote,
    getAllNotes,
    updateNote,
    deleteNote
}