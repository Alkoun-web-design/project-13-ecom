'use client'

import { useRef } from 'react';
import type { ClothProduct } from '../lib/products'
import ProductCard from './ProductCard';
import { Left, Right } from './Icons';

export default function Slider2({products, category}: {products: ClothProduct[], category: string}) {

    const categorizedProduct = products.filter((product) => product.category === category);
    const sliderRef = useRef<HTMLDivElement>(null);

    function scroll(scrollOffset: number) {
        sliderRef.current?.scrollBy({
            left: scrollOffset,
            behavior: 'smooth'
        });
    }

    return(
        <>
        <div ref={sliderRef} className="col-span-full flex overflow-x-auto justify-items-center snap-x snap-mandatory">
            <div className="grid grid-flow-col auto-cols-[minmax(100px,1fr)] md:auto-cols-[minmax(120px,1fr)] gap-4 p-4">
            {
                categorizedProduct.map((product) => (
                    <ProductCard product={product} key={product.id} />
                ))
            }
            </div>
        </div>
        <div className='flex col-span-full justify-center'>
            <button onClick={() => scroll(-100)} className='border border-gray-900 dark:border-gray-100 bg-gray-900 px-4 py-2 text-gray-100 dark:bg-gray-100 dark:text-gray-900 mx-4 hover:cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-900 dark:hover:text-gray-100 transition-all duration-300'><Left /></button>
            <button onClick={() => scroll(100)}className='border border-gray-900 dark:border-gray-100 bg-gray-900 px-4 py-2 text-gray-100 dark:bg-gray-100 dark:text-gray-900 mx-4 hover:cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-900 dark:hover:text-gray-100 transition-all duration-300'><Right /></button>
        </div>
        </>
    )
}