'use client'

import React from 'react'

export const ThemeContext = React.createContext('light')


export default function ThemeProvider({children}:{children: React.ReactNode}) {

    const [theme, setTheme] = React.useState<'light' | 'dark'>('light'); 

    return (
        <ThemeContext value={{theme, setTheme}} >
            {children}
        </ThemeContext>
    )
}
