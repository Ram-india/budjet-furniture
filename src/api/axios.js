import axios from "axios";
import { API_BASE_URL } from "../config/config";

const api = axios.create({
  baseURL: API_BASE_URL || "https://cuteweb.in/sandbox/budget/admin/api",
  
});


export default api;