import type { Metadata } from "next";
import "./globals.css";
import {ShoppingCartProvider} from "@/components/ShoppingCartProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ThemeButton from "@/components/ThemeButton";
import ThemeProvider from "@/components/ThemeProvider";
import { Gravitas_One, Questrial } from "next/font/google";


export const metadata: Metadata = {
  title: "Shopping Next App",
  description: "An Ecommerce website in Next.js",
};

const questrial = Questrial({
  variable: "--font-questrial",
  weight: "400",
  subsets: ["latin"],
});

const gravitasone = Gravitas_One({
  variable: "--font-gravitas-one",
  weight: "400",
  subsets: ["latin"],
});

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
  
  return (
    
    <html lang="en">
      <body className={`${gravitasone.variable} antialiased text-gray-900 bg-gray-100 dark:text-gray-100 dark:bg-gray-900`} >
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
