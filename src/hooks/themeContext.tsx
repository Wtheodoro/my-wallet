import React, { createContext, useState, useContext} from 'react'
import Dark from '../styles/themes/dark'
import Light from '../styles/themes/light'
interface IThemeContext {
    toggleTheme(): void
    theme: ITheme
}
interface ITheme {
    title: string

    colors: {
        primary: string,
        secondary: string,
        tertiary: string,

        font: string,

        white: string,
        black: string,
        gray: string,

        success: string,
        info: string,
        warning: string,
    }
}

const ThemeContext = createContext<IThemeContext>({} as IThemeContext)

const ThemeProvider: React.FC = ({ children }) => {
    const [theme, setTheme] = useState<ITheme>(() => {
        const themeSaved = localStorage.getItem('@my-wallet:theme')

        if (themeSaved) {
            return JSON.parse(themeSaved) // JSON.parse to convert string into object
        } else {
            return Dark
        }
    })

    const toggleTheme = () => {
        if (theme.title === 'dark') {
            setTheme(Light)
            localStorage.setItem('@my-wallet:theme', JSON.stringify(Light)) //JSON.stringify to convert object into string
        } else {
            setTheme(Dark)
            localStorage.setItem('@my-wallet:theme', JSON.stringify(Dark))
        }
    }

    return (
        <ThemeContext.Provider value={{ toggleTheme, theme}}>
            {children}
        </ThemeContext.Provider>
    )
}

function useTheme(): IThemeContext {
    const context = useContext(ThemeContext)
    return context
}

export { ThemeProvider, useTheme}