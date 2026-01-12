'use client'

import React from 'react'

interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const ThemeContext = React.createContext<ThemeContextType | null>(null)

export default function ThemeProvider({children}:{children: React.ReactNode}) {

    const [theme, setTheme] = React.useState<'light' | 'dark'>('light'); 
    
    React.useEffect(() => {
        const root = window.document.documentElement;
        if (theme === 'dark') {
            root.classList.remove('light');
            root.classList.add(theme);
        } else {
            root.classList.remove('dark');
            root.classList.add(theme);
        }
    // save theme to local storage
    localStorage.setItem("theme", theme);
  }, [theme]);

    function toggleTheme() {
        setTheme((prev) => prev === 'light' ? 'dark' : 'light')
    };

    return (
        <ThemeContext value={{theme, toggleTheme}} >
            {children}
        </ThemeContext>
    )
}

export function useTheme() {
    const context = React.useContext(ThemeContext);
    if (!context) {
        throw new Error ("useTheme must be used within a ThemeProvider")
    }
    return context;
}
