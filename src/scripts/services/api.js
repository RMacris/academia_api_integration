import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080",
});



//! used for authentication 
// api.defaults.headers.authorization = `Bearer ${token}`;


export default api;