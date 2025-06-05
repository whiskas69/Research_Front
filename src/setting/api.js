import axios from "axios";

const api = axios.create({
    baseURL: "http://10.0.15.37:3002", //backend url
    withCredentials: true, //send cookie
});

export default api;
