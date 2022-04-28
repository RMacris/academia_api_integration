import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:8080",
});

export const cadastro = axios.create({
    baseURL: "https://api-loja-t11.herokuapp.com"
})

//! used for authentication 
// api.defaults.headers.authorization = `Bearer ${token}`;


