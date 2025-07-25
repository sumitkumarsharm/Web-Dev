import axios from 'axios';
const api_url = 'http://localhost:3000/notes';

const api = axios.create({
    baseURL: api_url,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials:true
});

export default api;
