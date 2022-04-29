import React, { useContext, useEffect, useState } from 'react'
import { UserTemplate } from '../scripts/ClassTemplate/UserTemplate'
import { GetAuthorizationLocalStorage, SetAuthorizationLocalStorage,ClearLocalStorage } from '../scripts/utils/authenticationHelper'
import { SignIn, GetUserById, SignUp } from '../scripts/services/UserSign'
import { AvaliacaoTemplate } from '../scripts/ClassTemplate/AvaliacaoTemplate'

const LoginContext = React.createContext()
const AuthLoginContext = React.createContext()
const AvaliacaoContext = React.createContext()

export function useLoginData() {
    return useContext(LoginContext)
}
export function useAuthentication() {
    return useContext(AuthLoginContext)
}
export function useCurrentAval() {
    return useContext(AvaliacaoContext)
}

export function LoginProvider({children})  {
    const [authState, setAuthState] = useState(false)
    const [userData, setUserData] = useState(new UserTemplate())
    const [aval, setCurrAval] = useState(new AvaliacaoTemplate())

    
    useEffect(() => {
        const storage = GetAuthorizationLocalStorage()
        if(storage == null) {
            SetAuthentication()
        }
        else {
            SetAuthentication(true, storage)
        }
        console.log(aval)
    },[])
    
    function SetAuthentication(auth = false, user = new UserTemplate){ 
        setAuthState(auth)
        setUserData(user)
        if(auth){
            SetAuthorizationLocalStorage(user)
        }
        else{ 
            ClearLocalStorage()
        }
    }
    function SetCurrentAval(aval = new AvaliacaoTemplate()){
        const newAval = new AvaliacaoTemplate(aval.element)
        setCurrAval(newAval)
    }
    return (
        <LoginContext.Provider value={{user: userData}}>
            <AuthLoginContext.Provider value={{auth: authState, setAuth: SetAuthentication}}>
                <AvaliacaoContext.Provider value={{aval: aval, setCurrentAval: SetCurrentAval}} >
                    { children }
                </AvaliacaoContext.Provider>
            </AuthLoginContext.Provider>
        </LoginContext.Provider>
    )
}
