import axios from 'axios';
const api_url = 'http://localhost:3000/notes';

const api = axios.create({
    baseURL: api_url,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api;

// // create a note
// export const createNote = async (title, content) => {
//     try {
//         const response = await axios.post(api_url, { title, content });
//         return response.data;
//     } catch (error) {
//         console.error('Error creating note:', error);
//         throw error;
//     }
// }

// // fetch all notes
// export const getNotes = async () => {
//     try {
//         const response = await axios.get(api_url);
//         return response.data;
//     } catch (error) {
//         console.error('Error fetching notes:', error);
//         throw error;
//     }
// }

// // fetch a single note by ID
// export const getNoteById = async (id) => {
//     try {
//         const response = await axios.get(`${api_url}/${id}`);
//         return response.data;
//     } catch (error) {
//         console.error('Error fetching note by ID:', error);
//         throw error;
//     }
// }

// // update a note by ID
// export const updateNote = async (id, title, content) => {
//     try {
//         const response = await axios.patch(`${api_url}/${id}`, { title, content });
//         return response.data;
//     } catch (error) {
//         console.error('Error updating note:', error);
//         throw error;
//     }
// }   

// // delete a note by ID
// export const deleteNote = async (id) => {
//     try {
//         const response = await axios.delete(`${api_url}/${id}`);
//         return response.data;
//     } catch (error) {
//         console.error('Error deleting note:', error);
//         throw error;
//     }
// }   
