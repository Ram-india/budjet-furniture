import api from "./axios";

// GET all products
export const getProducts = () => api.get("/getProducts");

// GET product categories
export const getProductCategories = () => api.get("/getProductCategory");

//  GET product details (FORM-DATA like Postman)
export const getProductsDetails = (productId) => {
  const formData = new FormData();
  formData.append("product_id", productId);

  return api.post("/getProductDetails", formData);
};

// GET product gallery (FORM-DATA like Postman)
export const getProductGallery = (productId) => {
  const formData = new FormData();
  formData.append("product_id", productId);

  return api.post("/getProductGallery", formData);
};