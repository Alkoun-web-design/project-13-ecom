'use client'

import React from "react";
import type { ClothProduct, Sizes } from "@/lib/products";
import Image from "next/image";
import AddToCartButton from "./AddToCartButton";
import { useShoppingCart } from "@/components/ShoppingCartProvider";
import type { ShoppingCart, ShoppingCartItem } from "@/components/ShoppingCartProvider";
import { AddFilled, LessFilled, ShoppingCartLessFilled, ShoppingCartAddFilled } from "@/components/Icons";

export default function LoadingProductDetails() {

  return (
    <>
        <div className="col-span-full grid grid-cols-subgrid md:col-start-2 md:col-span-5">
            <div className="col-span-full">
                <div className="w-70 h-70 bg-gray-500 dark:bg-gray-400" /> 
            </div>
            <div className="col-span-full">
                <div className="w-full flex flex-row overflow-x-scroll">
                
                    <div style={{display:"inline-block", margin: "1rem", cursor: "pointer" }} className="w-45 h-45 bg-gray-500 dark:bg-gray-400"/>
                
                </div>
            </div>
        </div>
        <div className="col-span-full md:col-start-7 md:col-span-5 md:text-lg justify-items-start">
            <div className="ml-2 my-4 bg-gray-500 dark:bg-gray-400"></div>
            <div className="ml-2 my-4 bg-gray-500 dark:bg-gray-400"></div>
            <div className="ml-2 my-2 bg-gray-500 dark:bg-gray-400"></div>
            <div className="ml-2 my-2 bg-gray-500 dark:bg-gray-400"></div>  
            <div className="ml-2 my-2 bg-gray-500 dark:bg-gray-400"></div>  
            <div className="ml-2 my-4 bg-gray-500 dark:bg-gray-400"></div>
            <div className="ml-2 my-4 bg-gray-500 dark:bg-gray-400"></div>
            <div className="ml-2 my-4 bg-gray-500 dark:bg-gray-400"></div>
        
            <div className="flex flex-row ml-2 my-2">
                <span className="my-auto bg-gray-500 dark:bg-gray-400"></span>
            </div>
            <div className="flex flex-row ml-2 my-4 justify-center">
                <div className="border border-gray-800 dark:border-gray-100 my-6 text-gray-100 dark:text-gray-800 px-10 py-5 cursor-pointer hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-100 transition-all bg-gray-500 dark:bg-gray-400">
                    
                </div>
            </div>
        </div>    
    </>
  )
}