"use client"

import H1 from "@/components/H1"
import LoadingProductCardGrid from "@/components/LoadingProductCardGrid"
import Link from "next/link"

export default function Loading() {
    return (
        <div className="px-6 col-span-full grid grid-cols-subgrid">
            <div className="col-start-2 col-end-12 mt-20">
              <div className="col-start-2 col-end-12 mt-20">
                  <Link href="/" className="text-xl text-gray-500 hover:text-gray-900 hover:underline mx-1">Home</Link>
                  <span className="inline-block text-xl mx-1">/</span>
                  <Link href="/categories" className="text-xl text-gray-500 hover:text-gray-900 hover:underline mx-1">Categories</Link>
                  <span className="inline-block text-xl mx-1">/</span><p className="inline-block text-xl  mx-1"></p>
                </div>
            </div>
            
            <div className="col-span-full justify-self-center mb-5">
                <H1 heading="Loading" />
            </div>
            <div className="grid grid-cols-subgrid col-span-full">
                <LoadingProductCardGrid />    
                <LoadingProductCardGrid />
                <LoadingProductCardGrid />
                <LoadingProductCardGrid />
                <LoadingProductCardGrid />
                <LoadingProductCardGrid />
                <LoadingProductCardGrid />
                <LoadingProductCardGrid />
                <LoadingProductCardGrid />
                <LoadingProductCardGrid />
            </div>
        </div>
    )
}