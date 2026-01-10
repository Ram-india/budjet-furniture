import api from "./axios";

export const getPageDetails = (title) => {
    const formData = new FormData();
    formData.append("title", title);
    console.log(api);
    return api.post("/getPageDetails", formData);
   
};
