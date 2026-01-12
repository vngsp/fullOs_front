import axios from 'axios';

export const req = axios.create({
    baseURL: 'http://localhost:1000'
})

req.interceptors.request.use((config) => {
    let token = localStorage.getItem('authToken');

    if(token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
})

req.interceptors.response.use(
    response => response,
    error => {
        if(error.response?.status === 401) {
            localStorage.removeItem("authToken");
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
)