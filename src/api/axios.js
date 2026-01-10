import axios from "axios";

const api = axios.create({
  baseURL:  "https://cuteweb.in/sandbox/budget/admin/api",
  
});

export default api;