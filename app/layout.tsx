import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {ShoppingCartProvider} from "@/components/ShoppingCartProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ThemeButton from "@/components/ThemeButton";
import ThemeProvider from "@/components/ThemeProvider";
import { theme } from '@/components/ThemeProvider';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shopping Next App",
  description: "An Ecommerce website in Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <html lang="en">
      <ThemeProvider>
        { theme === 'dark' ? (
          <body className={`${geistSans.variable} ${geistMono.variable} antialiased text-gray-100 bg-gray-900`} >
            <ShoppingCartProvider>
              <Header/>
                {children}
              <Footer />
            </ShoppingCartProvider>  
            <ThemeButton />
          </body>
          ) : (
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased text-gray-900 bg-gray-100`} >
            <ShoppingCartProvider>
              <Header/>
                {children}
              <Footer />
            </ShoppingCartProvider>  
            <ThemeButton />
          </body>
          )
        }
      </ThemeProvider>
    </html>
  );
}
