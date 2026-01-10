import api from "./axios";

api.interceptors.response.use(
    (response) => {
        return response.data
    },
    (error)=>{
        if(error.response){
            console.error("API Error:", error.response.status);
        }else{
            console.error('Network error');
        }
        return Promise.reject(error);
    }
);