import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3002", //backend url
    withCredentials: true, //send cookie
});

export default api;
