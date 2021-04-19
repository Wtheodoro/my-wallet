import React, { createContext, useState, useContext } from 'react'

interface IAuthContext {
    logged: boolean
    signIn(email: string, password: string): void
    singOut(): void
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext)

const AuthProvider: React.FC = ({ children }) => {
    const [logged, setLogged] = useState<boolean>(() => {
        const isLogged = localStorage.getItem('@my-wallet:logged')

        // 2 ! - if isLogged = true, if not isLogged = false
        // se tiver conteúdo true se não false
        return !!isLogged
    })

    const signIn = (email: string, password: string) => {
        if (email === 'helen@facebook.com' && password === '123456') {
            localStorage.setItem('@my-wallet:logged', 'true')
            setLogged(true)
        } else {
            alert('access denied. Check the Input fields')
            setLogged(false)
        }
    }

    const singOut = () => {
        localStorage.removeItem('@my-wallet:logged')
        setLogged(false)
    }

    return(
        <AuthContext.Provider value={{ logged, signIn, singOut}}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth(): IAuthContext {
    const context = useContext(AuthContext)
    return context
}

export { AuthProvider, useAuth }