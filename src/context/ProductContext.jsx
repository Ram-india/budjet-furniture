import {createContext, useContext, useEffect, useState } from "react";
import api from "../api/axios";

const ProductContext = createContext();

export const ProductProvider = ({children}) => {
    const[featuredProducts, setFeaturedProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        if(featuredProducts.length == 0){
            setLoading(true);

            api.get("/getHomePageProducts")
            .then(res => setFeaturedProducts(res.data))
            .catch(err => console.error("Home Products",err))
            .finally(()=> setLoading(false));
        }
    },[]);
    return(
        <ProductContext.Provider value = {{featuredProducts, loading}}>
            {children}
        </ProductContext.Provider>
    )
}
export const useProducts = () => useContext(ProductContext);