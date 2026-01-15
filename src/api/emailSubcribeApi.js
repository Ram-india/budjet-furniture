import api from "./axios"

export const EmailSubscribeApi = (payload) => {
    return api.post("/subscribe", payload);
};