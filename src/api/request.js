// src/api/request.js
import api from "./axios";

api.interceptors.request.use(
    (config) => {
        console.log("API Request:",
        config.method?.toUpperCase(),
        config.url
        );
        // Example: token (optional later)
    // const token = localStorage.getItem("token");
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;

    },
    (error) => Promise.reject(error)
);