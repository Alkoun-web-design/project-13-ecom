import type { Metadata } from "next";
import "./globals.css";
import {ShoppingCartProvider} from "@/components/ShoppingCartProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ThemeButton from "@/components/ThemeButton";
import ThemeProvider from "@/components/ThemeProvider";
import { Bodoni_Moda, Playfair_Display } from "next/font/google";


export const metadata: Metadata = {
  title: "Shopping Next App",
  description: "An Ecommerce website in Next.js",
};

const playfair = Playfair_Display({
  variable: "--font-playfair",
  weight: "400",
  subsets: ["latin"],
});

const bodoniModa = Bodoni_Moda({
  variable: "--font-bodoni-moda",
  weight: "600",
  subsets: ["latin"],
});

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
  
  return (
    
    <html lang="en">
      <body className={`${playfair.className} grid grid-cols-12 gap-2 md:gap-4 auto-rows-max antialiased text-gray-900 bg-gray-100 dark:text-gray-100 dark:bg-gray-900`} >
      <ThemeProvider>
        <ShoppingCartProvider>
          <Header/>
            <main className="grid grid-cols-subgrid col-span-12 items-center justify-between bg-gray-100 dark:bg-gray-900 sm:items-start">
              {children}
            </main>
          <Footer />
        </ShoppingCartProvider>  
        <ThemeButton />
      </ThemeProvider>
      </body>
    </html>
  );
}
