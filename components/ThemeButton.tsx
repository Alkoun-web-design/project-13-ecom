'use client'

import React from 'react'; 
import { useTheme } from '@/components/ThemeProvider';
export default function ThemeButton() {
    
    const {theme, toggleTheme} = useTheme();

    return (
        <>
            { theme === 'dark' ? (
                <button onClick={toggleTheme} className="absolute right-10 bottom-10 z-20 w-20 h-20 rounded-b-full shadow-2xl bg-gray-900 text-gray-100">
                    Light
                </button>
            ) : (
                <button onClick={toggleTheme} className="absolute right-10 bottom-10 z-20 w-20 h-20 rounded-b-full shadow-2xl bg-gray-100 text-gray-900">
                    Dark
                </button>
            ) 

            }
        </>
    )
}