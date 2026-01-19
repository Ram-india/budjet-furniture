export const getImageUrl = (image, folder = "") => {
    if (!image) return "";
    if (image.startsWith("http")) return image;
  
    const BASE_URL = "https://cuteweb.in/sandbox/budget/admin/uploads";
    const cleanFolder = folder.replace(/^\/|\/$/g, "");
    const cleanImage = image.replace(/^\/|\/$/g, "");
  
    return `${BASE_URL}/${cleanFolder}/${cleanImage}`;
  };