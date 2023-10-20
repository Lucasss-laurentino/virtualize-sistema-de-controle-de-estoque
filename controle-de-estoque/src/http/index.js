import axios from 'axios';

export const http = axios.create({

    baseURL: 'https://localhost:8000/',
    headers: {
        Accept: 'application/json',
        Content: 'application/json'
    }

});

http.interceptors.request.use(function (config) {

    const token = localStorage.getItem('token')

    if(token && config.headers){
        config.headers.Authorization = `Bearer ${token}`
    }
    // Faz alguma coisa antes da requisição ser enviada
    return config;

}, function (error) {

    // Faz alguma coisa com o erro da requisição
    return Promise.reject(error);

});
