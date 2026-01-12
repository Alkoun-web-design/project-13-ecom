import type { Metadata } from "next";
import "./globals.css";
import {ShoppingCartProvider} from "@/components/ShoppingCartProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ThemeButton from "@/components/ThemeButton";
import ThemeProvider from "@/components/ThemeProvider";
import { Geist, Geist_Mono } from "next/font/google";


export const metadata: Metadata = {
  title: "Shopping Next App",
  description: "An Ecommerce website in Next.js",
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
  
  return (
    
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased text-gray-900 bg-gray-100 dark:text-gray-100 dark:bg-gray-900`} >
      <ThemeProvider>
        <ShoppingCartProvider>
          <Header/>
            {children}
          <Footer />
        </ShoppingCartProvider>  
        <ThemeButton />
      </ThemeProvider>
      </body>
    </html>
  );
}
