import React, { useContext, useEffect, useState } from 'react'
import { UserTemplate } from '../scripts/ClassTemplate/UserTemplate'
import { GetAuthorizationLocalStorage } from '../scripts/utils/authenticationHelper'


const LoginContext = React.createContext()
const AuthLoginContext = React.createContext()

export function useLoginData() {
    return useContext(LoginContext)
}
export function useAuthentication() {
    return useContext(AuthLoginContext)
}

export function LoginProvider({children})  {
    const [authState, setAuthState] = useState(true)
    const [userData, setUserData] = useState(new UserTemplate())


    useEffect(() => { 
        const storage = GetAuthorizationLocalStorage()
        if(storage == null) {
            setAuthState(false)
            setUserData(new UserTemplate())
        }
        else {
            setAuthState(true)
            setUserData(storage)
        }

    },[])
    
    return (
        <LoginContext.Provider value={userData}>
            <AuthLoginContext.Provider value={{auth: authState, setAuth: setAuthState}}>
                { children }
            </AuthLoginContext.Provider>
        </LoginContext.Provider>
    )
}
