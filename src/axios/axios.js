// Importamos axios
import axios from 'axios';

const baseURL = 'https://api-6hfsvaacwq-uc.a.run.app/';

// Creamos una instancia de axios
export const axiosInstance = axios.create({
    baseURL: baseURL,
    timeout: 5000,
    // headers: {'Authorization': 'Bearer ' + token}
});

export const axiosInstanceAuth = axios.create({
    baseURL: baseURL,
    timeout: 5000,
});

// Interceptamos las peticiones para agregar el token
axiosInstanceAuth.interceptors.request.use(
    async (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers['Authorization'] = 'Token ' + token;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
