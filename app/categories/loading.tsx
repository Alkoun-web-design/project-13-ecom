"use client"

import H1 from "@/components/H1"
import H2 from "@/components/H2"
import Link from "next/link"

export default function Loading() {
    return (
        <div className="col-span-full grid grid-cols-subgrid place-content-center">
            <div className="col-start-2 col-end-12 mt-20">
              <Link href="/" className="text-xl text-gray-500 hover:text-gray-900 hover:underline mx-1">Home</Link>
              <span className="inline-block text-xl mx-1">/</span>
              <p className="inline-block text-xl mx-1">Category</p>
            </div>

            <div className="col-span-full justify-self-center mb-5">
              <H1 heading="Categories" />
            </div>
            <div className="grid grid-cols-subgrid col-span-full mt-5 mb-20 px-6">
               
                <span className={`col-span-6 md:col-span-3 h-80 justify-items-center my-4 hover:-translate-y-1 transition-all duration-300 ease-out bg-gray-500 dark:bg-gray-400 w-full`}>
                  
                </span>
            </div>            
        </div>
    )
}