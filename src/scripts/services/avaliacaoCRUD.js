import { AvaliacaoTemplate } from "../ClassTemplate/AvaliacaoTemplate";
import api from "./api";

export async function GetAvaliacaoByID(id = 0) {
    try { 
        return api.get(`/avaliacao/${id}`) 
    }
    catch (error) { 
        console.error(error)
    }
    
}
export async function GetAllUserAvaliacao(userID = 0) {
    try { 
        return api.get(`/avaliacao/user/${userID}`) 
    }
    catch (error) { 
        console.error(error)
    }
    
}
export async function GetLastUserAvaliacao(userID = 0) {
    try { 
        return api.get(`/avaliacao/last/${userID}`) 
    }
    catch (error) { 
        console.error(error)
    }
    
}

export async function PostAvaliacao(aval = new AvaliacaoTemplate()) {    
    try { 
        const data = new AvaliacaoTemplate(aval)
        return api.post(`/avaliacao`, data) 
    }
    catch (error) { 
        console.error(error)
        return error
    }
}
export async function UpdateAvaliacaoByID(id = 0, aval = new AvaliacaoTemplate()) {
    try {
        const data = new AvaliacaoTemplate(aval)
        return api.put(`/avaliacao/${id}`, data) 
    }
    catch (error) 
    { 
        console.error(error)
        return error
    }
}

export async function DeleteAvaliacaoByID(id = 0) {
    try { 
        return api.delete(`/avaliacao/${id}`) 
    }
    catch (error) { 
        console.error(error)
        return error

    }
}