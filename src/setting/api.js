import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL, //backend url
    withCredentials: true, //send cookie
    credentials: 'include',
});

export default api;
