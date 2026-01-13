import api from "./axios"

export const submitContactForm = (payload) => {
    return api.post("/contact", payload);
};