import { createContext, useContext, useState, useEffect, useCallback } from 'react'
import { storage } from '../utils/storage'
import { AuthService } from '../services/auth.service'

// crear el contexto
const AuthContext = createContext(null)

// crear la función que va a proveer ese contexto
export const AuthProvider = ({ children }) => {
    // coge token y user de lo que haya guardado en el localStorage
    const [token, setToken] = useState(() => storage.get('token'))
    const [user, setUser]   = useState(() => storage.get('user'))

    // si token o user cambian, se guardan los nuevos valores en el localStorage
    useEffect(() => { storage.set('token', token) }, [token])
    useEffect(() => { storage.set('user', user) }, [user])

    // función login
    const login = useCallback(async (email, password) => {
        const data = await AuthService.login({ email, password })
        const tokenLogin = data.token ?? data?.data?.token;
        const userLogin = data.user ?? data?.data?.user ?? data?.data;

        if(!tokenLogin) throw new Error("El servidor de backend no ha devuelvo el token");
        
        setToken(tokenLogin)
        setUser(userLogin ?? null)
        
        return { token: tokenLogin, user: userLogin }
    }, [])

    // función logout
    const logout = useCallback(() => {
        setToken(null)
        setUser(null)
        storage.remove('token')
        storage.remove('user')
    }, [])

    // función de llamar al profile
    const profile = useCallback(async () => {
        if(!token) return null
        const profile = await AuthService.profile(token)
        setUser(profile)
        return profile
    }, [token])

    return (
        <AuthContext.Provider value={{ token, user, login, logout, profile }}>
            { children }
        </AuthContext.Provider>
    )
}

// función para usar el contexto
export const useAuth = () => {
    const ctx = useContext(AuthContext)
    return ctx
}
