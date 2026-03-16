"use client"

import LoadingProductDetails from "@/components/LoadingProductDetails"

export default function Loading() {
    return (
        <div className="col-span-full grid grid-cols-subgrid">
            <div className="col-start-2 col-end-12 mt-20">
                <span className="text-xl text-gray-500 hover:text-gray-900 hover:underline mx-1" />
                <span className="inline-block text-xl mx-1 bg-gray-500 dark:bg-gray-400 w-full h-full">/</span>
                <span className="inline-block text-xl mx-1 bg-gray-500 dark:bg-gray-400 w-full h-full"/>
                <span className="inline-block text-xl mx-1 bg-gray-500 dark:bg-gray-400 w-full h-full">/</span>
                <span className="inline-block text-xl mx-1 bg-gray-500 dark:bg-gray-400 w-full h-full"/>
            </div>
            <LoadingProductDetails />
        </div>
    )
}