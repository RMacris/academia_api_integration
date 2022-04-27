import axios from "axios";

const api = axios.create({
  baseURL: "https://localhost:3000",
});

export const cadastro = axios.create({
    baseURL: "https://api-loja-t11.herokuapp.com"
})

//! used for authentication 
// api.defaults.headers.authorization = `Bearer ${token}`;


export default api;