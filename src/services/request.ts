import axios from 'axios';

const apiRequest = axios.create({
    baseURL: 'https://api-shopgear.onrender.com/api/',
    // baseURL: 'http://127.0.0.1:8000/api',
});
// apiRequest.interceptors.request.use((config) => {
//     const token = localStorage.getItem('userToken');
//     if (token) {
//         config.headers['token'] = `Bearer ${token}`;
//     }
//     return config;
// });
export default apiRequest;
