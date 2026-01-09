import type { Metadata } from "next";
import "@/app/globals.css";
import {ShoppingCartProvider} from "@/components/ShoppingCartProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ThemeButton from "@/components/ThemeButton";
import ThemeProvider from "@/components/ThemeProvider";
import theme from '@/components/ThemeProvider';

export const metadata: Metadata = {
  title: "Shopping Next App",
  description: "An Ecommerce website in Next.js",
};

export default function layout({children}: Readonly<{children: React.ReactNode;}>) {
  
  return (
    <>
    {children}
    </>
  );
}
