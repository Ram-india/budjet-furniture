import api from "./axios";

// get all products
export const getProducts = () => api.get("/getProducts");

// get product categories
export const getProductCategories = () => api.get("/getProductCategory");

// get product Details by ID
export const getProductsDetails = async (product_id) => {
    // Try the POST variant first (existing implementation)
    try {
        const formData = new FormData();
        formData.append("product_id", product_id);
        return await api.post("/getProductDetails", formData);
    } catch (err) {
        // If server returns 404 or the endpoint is not present, try alternative endpoints
        const status = err?.response?.status;
        if (status === 404) {
            try {
                // Try GET /getProductDetails/{id}
                return await api.get(`/getProductDetails/${product_id}`);
            } catch (err2) {
                // Try query param fallback
                try {
                    return await api.get(`/getProductDetails?id=${product_id}`);
                } catch (err3) {
                    // Rethrow the original error if all attempts fail
                    throw err;
                }
            }
        }

        // If it's another error, just rethrow
        throw err;
    }
};

