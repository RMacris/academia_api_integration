import { AvaliacaoTemplate } from "../AvaliacaoTemplate";
import {api} from "./api";

export async function GetAvaliacaoByID(id = 0) {
    try { 
        return api.get(`/avaliacao/${id}`) 
    }
    catch (error) { 
        console.error(error)
    }
    
}
export async function PostAvaliacao(data = new AvaliacaoTemplate()) {
    try { 
        return api.post(`/avaliacao`, data) 
    }
    catch (error) { 
        console.error(error)
    }
}
export async function UpdateAvaliacaoByID(id = 0,data = new AvaliacaoTemplate()) {
    try {
        return api.patch(`/avaliacao/${id}`, data) 
    }
    catch (error) { 
        console.error(error)
    }
}

export async function DeleteAvaliacaoByID(id = 0) {
    try { 
        return api.delete(`/avaliacao/${id}`) 
    }
    catch (error) { 
        console.error(error)
    }
}