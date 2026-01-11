import { IMAGE_BASE_URL } from "../config/config";

export const getImageUrl = (path, folder = "")=>{
    if(!path) return "/images/placeholder.webp";

    return folder
    ?`${IMAGE_BASE_URL}/${folder}/${path}`
    : `${IMAGE_BASE_URL}/${path}`;
};