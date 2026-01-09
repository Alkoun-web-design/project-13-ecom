'use client'

import React from 'react'
import { Geist, Geist_Mono } from "next/font/google";

export const ThemeContext = React.createContext('light')

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function ThemeProvider({children}:{children: React.ReactNode}) {

    const [theme, setTheme] = React.useState<'light' | 'dark'>('light'); 

    return (
        <ThemeContext value={{theme, setTheme}} >
            { theme === 'dark' ? (
                <body className={`${geistSans.variable} ${geistMono.variable} antialiased text-gray-100 bg-gray-900`} >
                    {children}
                </body>
            ) : (
                <body className={`${geistSans.variable} ${geistMono.variable} antialiased text-gray-900 bg-gray-100`} >
                    {children}
                </body>
            )}
        </ThemeContext>
    )
}
