import axios from "axios";

export const myAxios = axios.create({
    baseURL: 'http://harsh-2onb.onrender.com:8086', // Ensure backend server is running here
});
