import { createContext, useContext, useEffect, useState } from "react";
import api from "../api/axios";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [featuredProducts, setFeaturedProducts] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      // 1️ Load from cache instantly (offline-first)
      try {
        const cached = JSON.parse(localStorage.getItem("featuredProducts"));
        if (cached) setFeaturedProducts(cached);
      } catch {
        localStorage.removeItem("featuredProducts");
      }

      // 2Refresh from API (online-first)
      try {
        const res = await api.get("/getHomePageProducts");
        setFeaturedProducts(res.data);
        localStorage.setItem("featuredProducts", JSON.stringify(res.data));
      } catch (err) {
        console.warn("Offline mode: showing cached products");
      } finally {
        setLoading(false);
      }
    };

    loadProducts(); // only once
  }, []);

  return (
    <ProductContext.Provider value={{ featuredProducts, loading }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => useContext(ProductContext);
