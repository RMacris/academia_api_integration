import axios from "axios";

const api = axios.create({
  baseURL: "https://acadamy-resilia.herokuapp.com",
});

export const cadastro = axios.create({
    baseURL: "https://acadamy-resilia.herokuapp.com"
})

//! used for authentication 
// api.defaults.headers.authorization = `Bearer ${token}`;


