import api from "./api";
import { UserTemplate } from '../ClassTemplate/UserTemplate'

export async function SignIn(user = new UserTemplate()) {
    try {
        
        const data = new UserTemplate(user)
       
        const result = await api.post('/signin', data)
    
        return result

    } catch (error) {
        console.error(error)
        return error
    }
}
export async function SignUp(user = new UserTemplate()) {
    try {

        const data = new UserTemplate(user)
        const result = await api.post('/signup', data)
        return result
    } catch (error) {
        console.error(error)
        return error
    }
}
export async function GetUserById(id = 0) {
    try {
        const result = await api.get(`/user/${id}`)
        return result
    } catch (error) {
        console.error(error)
        return error
    }
}