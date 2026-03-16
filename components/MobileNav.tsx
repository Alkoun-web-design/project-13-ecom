'use client'

import Link from "next/link";
import React from "react";

export default function MobileNav() {

    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <div className=" md:hidden">
            
            <svg className="inline-block md:hidden hover:text-gray-100 hover:bg-gray-900 transition-all hover:cursor-pointer p-2" onClick={() => setIsOpen(!isOpen)} xmlns="http://www.w3.org/2000/svg" width="2.5em" height="2.5em" viewBox="0 0 36 36">
            	<path fill="currentColor" d="M32 29H4a1 1 0 0 1 0-2h28a1 1 0 0 1 0 2" className="clr-i-outline clr-i-outline-path-1"></path>
            	<path fill="currentColor" d="M32 19H4a1 1 0 0 1 0-2h28a1 1 0 0 1 0 2" className="clr-i-outline clr-i-outline-path-2"></path>
            	<path fill="currentColor" d="M32 9H4a1 1 0 0 1 0-2h28a1 1 0 0 1 0 2" className="clr-i-outline clr-i-outline-path-3"></path>
            	<path fill="none" d="M0 0h36v36H0z"></path>
            </svg>
            
            { isOpen &&
                <ul className="bg-gray-100 absolute z-20 top-14 md:hidden border border-gray-900 shadow-lg">
                    <Link href={'/'}><li className="px-4 py-2 cursor-pointer hover:bg-gray-900 hover:text-gray-100 dark:hover:bg-gray-100 dark:hover:text-gray-900 transition-all">Home</li></Link>
                    <Link href={'/products'}><li className="px-4 py-2 cursor-pointer hover:bg-gray-900 hover:text-gray-100 dark:hover:bg-gray-100 dark:hover:text-gray-900 transition-all">Products</li></Link>
                    <Link href={'/categories'}><li className="px-4 py-2 cursor-pointer hover:bg-gray-900 hover:text-gray-100 dark:hover:bg-gray-100 dark:hover:text-gray-900 transition-all">Categories</li></Link>
                    <Link href={'/contact-us'}><li className="px-4 py-2 cursor-pointer hover:bg-gray-900 hover:text-gray-100 dark:hover:bg-gray-100 dark:hover:text-gray-900 transition-all">Contact Us</li></Link>
                </ul>
            }
        </div>
    )
}