import axios from 'axios';

// Configuração da instância dos Axios com a URL base da API.
const api = axios.create({
    baseURL: 'http://localhost:3000/api',
});

export default api;