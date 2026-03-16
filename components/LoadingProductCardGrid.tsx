import type { ClothProduct, Product } from '@/lib/products'
import Link from 'next/link'
import Image from 'next/image'

export default function ProductCardGrid() {

    return (
        <div className="col-span-6 sm:col-span-4 lg:col-span-3 xl:col-span-2 h-fit hover:shadow-lg hover:cursor-pointer transition-all p-2">
            
            <div>
                <div className='object-cover h-80 w-60 bg-gray-500 dark:bg-gray-400'/>
            </div>
            <ul className="mx-2 my-4 text-sm md:text-base">
                <li className="my-1 mx-2 bg-gray-500 dark:bg-gray-400 w-full h-full"></li>
                <li className="my-1 mx-2 bg-gray-500 dark:bg-gray-400 w-full h-full"></li> 
                <li className="my-1 mx-2  bg-gray-500 dark:bg-gray-400 w-full h-full"></li> 
                
                {/* <li className="py-1 px-2">Description: {product.description}</li> */}
            </ul>
            
        </div>
    )
}