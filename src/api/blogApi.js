import api from "./axios";

// Get all blogs
export const getBlogs = () => api.get("/getBlogs");

// Get blog details by ID
export const getBlogDetailsById = (blog_id) => {
  const formData = new FormData();
  formData.append("blog_id", blog_id);
  return api.post("/getBlogDetails", formData);
};

// Get blog details by slug (alternative)
export const getBlogDetailsBySlug = (slug) => {
  return api.get(`/getBlogDetails/${slug}`);
};
