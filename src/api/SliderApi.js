import api from "./axios";

export const getBrands = async() => {
    try{
        const res = await api.get('/getBrands');
        
        return res.data;
    }catch(error){
        console.error("getBrands API error:",error);
        throw error;
    }
}