'use client'

import { useTheme } from '@/components/ThemeProvider';
import { LightFilled, DarkFilled } from './Icons';

export default function ThemeButton() {
    
    const {theme, toggleTheme} = useTheme();

    return (
        <>
        { theme === 'dark' ? (
            <button onClick={toggleTheme} title="Light Mode" className="w-auto h-auto fixed right-10 bottom-10 z-20 rounded-full shadow-lg bg-gray-300 dark:bg-gray-700 dark:text-gray-100 px-2 py-2 cursor-pointer hover:bg-gray-900 hover:text-gray-100 dark:hover:bg-gray-100 dark:hover:text-gray-900 transition-all">
                <LightFilled />
            </button>
        ) : (
            <button onClick={toggleTheme} title="Dark Mode" className="w-auto h-auto align-middle fixed right-10 bottom-10 z-20 rounded-full shadow-lg bg-gray-300 dark:bg-gray-700 dark:text-gray-100 px-2 py-2 cursor-pointer hover:bg-gray-900 hover:text-gray-100 dark:hover:bg-gray-100 dark:hover:text-gray-900 transition-all">
                <DarkFilled />
            </button>
        )}
        </>
    )
}