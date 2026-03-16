"use client"

import Link from "next/link"
import H1 from "@/components/H1"

export default function Loading() {
    return (
        <div className="px-6 col-span-full grid grid-cols-subgrid">
            <div className="col-start-2 col-end-12 mt-20">
                <Link href="/" className="text-xl text-gray-500 hover:text-gray-900 hover:underline mx-1">Home</Link>
                <span className="inline-block text-xl mx-1">/</span>
                <p className="inline-block text-xl  mx-1">All Products</p>
            </div>
            <div className="col-span-full justify-self-center mb-10">
                <H1 heading="All Products" />
            </div>
            <div className="grid grid-cols-subgrid col-span-full mb-10">
                {/* <FilteredProducts /> */}
            </div>
        </div>
    )
}