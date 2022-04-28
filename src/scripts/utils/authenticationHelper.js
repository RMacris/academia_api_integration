import { UserTemplate } from "../ClassTemplate/UserTemplate"
export function SetAuthorizationLocalStorage(value) {
    const userData = new UserTemplate(value)
    localStorage.setItem('auth', JSON.stringify(userData))
}

export function GetAuthorizationLocalStorage() {
    const userData = localStorage.getItem('auth')
    if(userData === null) {
        return null
    }
    return new UserTemplate(JSON.parse(userData)) 
}

export function RemoveAuthorizationLocalStorage() {
    localStorage.removeItem('auth')
}

export function ClearLocalStorage() { 
    localStorage.clear()
}