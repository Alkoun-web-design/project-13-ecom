'use client'

import React from 'react'; 
import { ThemeContext } from '@/components/ThemeProvider';

export default function ThemeButton() {
    
    const {theme, setTheme} = React.useContext(ThemeContext);

    function themeSetter() {
        setTheme((prev:string) => prev === 'light' ? 'dark' : 'light');
    }

    return (
        <>
            { theme === 'dark' ? (
                <button onClick={themeSetter} className="absolute right-10 bottom-10 z-20 w-20 h-20 rounded-b-full shadow-2xl bg-gray-900 text-gray-100">
                    Light
                </button>
            ) : (
                <button onClick={themeSetter} className="absolute right-10 bottom-10 z-20 w-20 h-20 rounded-b-full shadow-2xl bg-gray-100 text-gray-900">
                    Dark
                </button>
            ) 

            }
        </>
    )
}