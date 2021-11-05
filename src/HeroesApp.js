import React, { useEffect, useReducer } from 'react'
import { AuthContext} from './auth/AuthContext'
import { authReducer } from './auth/authReducer'
import { AppRouter } from './Routers/AppRouter'

const init = ()=>{
    return JSON.parse(localStorage.getItem('user')) || { logged: false }
}

export const HeroesApp = () => {

    const [user, dispatch] = useReducer(authReducer, {}, init) 

    useEffect(()=>{
        localStorage.setItem('user', JSON.stringify(user, null, 3))
    }, [user])

    return (
        <AuthContext.Provider value={{user, dispatch}} >
            <AppRouter />
        </AuthContext.Provider> 

    )
}