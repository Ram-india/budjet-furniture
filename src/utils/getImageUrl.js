import { IMAGE_BASE_URL } from "../config/config";

export const getImageUrl = (image, folder = "") => {
    if (!image) return "";
    if (image.startsWith("http")) return image;
  
    
    const cleanFolder = folder.replace(/^\/|\/$/g, "");
    const cleanImage = image.replace(/^\/|\/$/g, "");
  
    return `${IMAGE_BASE_URL}/${cleanFolder}/${cleanImage}`;
  };