'use client'

import React from 'react';
import { products, categories } from '@/lib/products';
import type { ClothProduct } from '@/lib/products';
import Link from 'next/link';
import H2 from '@/components/H2';
import { FilterFilled } from './Icons';
import ProductCardGrid from './ProductCardGrid';

export default function FilteredProducts() {
    
    const [productsDisplayed, setProductsDisplayed] = React.useState(products);
    const [isFiltered, setIsFiltered] = React.useState(false);
    const [filterType, setFilterType] = React.useState<'category' | 'price' | 'discount' | 'none'>('none');
    const [category, setCategory]  = React.useState<'Suits'|'Shirts'|'Pants'|'Coats'|'all'>('all');
    const [minPrice, setMinPrice] = React.useState<number>(0);
    const [maxPrice, setMaxPrice] = React.useState<number>(0);

    React.useEffect(() => {
        if (isFiltered && filterType === 'category' && category === 'Suits') {
            setProductsDisplayed(products.filter((product) => product.category === 'Suits')); 
        } else if (isFiltered && filterType === 'category' && category === 'Shirts') {
            setProductsDisplayed(products.filter((product) => product.category === 'Shirts')); 
        } else if (isFiltered && filterType === 'category' && category === 'Pants') {
            setProductsDisplayed(products.filter((product) => product.category === 'Pants'));
        } else if (isFiltered && filterType === 'category' && category === 'Coats') {
            setProductsDisplayed(products.filter((product) => product.category === 'Coats'));
        } else if (isFiltered && filterType === 'category' && category === 'all') {
            setProductsDisplayed(products);
        } else if (isFiltered && filterType === 'price') {
            setProductsDisplayed(products.filter((product) => product.price >= minPrice && product.price <= maxPrice))
        } else if (isFiltered && filterType === 'none') {
            setProductsDisplayed(products);
        } else if (isFiltered && filterType === 'discount') {
            setProductsDisplayed(products.filter((product) => product.discount > 0));
        }
    }, [isFiltered, filterType, category, minPrice, maxPrice]);

    function handleCategorySetting(){
        
    }
    
    return (
        <>
            <div className='sticky col-span-full shadow-lg rounded-lg px-4 py-2 bg-gray-200 my-4 dark:bg-gray-800'>
                <button className="bg-gray-300 dark:bg-gray-700 px-2 py-1 cursor-pointer hover:bg-gray-900 hover:text-gray-100 dark:hover:bg-gray-100 dark:hover:text-gray-900 transition-all" onClick={() => setIsFiltered((prev) => !prev)}>
                    <FilterFilled/> Filter
                </button>
                <div className="flex flex-row">
                {isFiltered && (
                    <div className='flex-col'>
                        <div className="m-2">
                            <label htmlFor='no-filter'>No filter</label>
                            <input type='radio' name='filter-type' id="no-filter" onChange={() => setFilterType('none')}/>
                        </div>
                        <div className="m-2">
                            <label htmlFor='category'>Category:</label>
                            <input type="radio" name='filter-type' id="category" onChange={() => setFilterType('category')}/>
                        </div>

                        <div className="m-2">
                            <label htmlFor='price'>Price:</label>
                            <input type="radio" name='filter-type' id="price" onChange={() => setFilterType('price')}/>
                        </div>
                        <div className="m-2">
                            <label htmlFor='discount'>Discount:</label>
                            <input type="radio" name='filter-type' id="discount" onChange={() => setFilterType('discount')}/>
                        </div>
                    </div>
                )}

                    {filterType === 'category' && (
                        <div className='flex-col'>
                            <h2>Select Category:</h2>
                            {categories.map(category => (
                                <button key={category} className="bg-gray-300 dark:bg-gray-700 px-2 py-1 cursor-pointer hover:bg-gray-900 hover:text-gray-100 dark:hover:bg-gray-100 dark:hover:text-gray-900 transition-all" onClick={() => setCategory(category)}>
                                    {category}
                                </button>
                            ))}
                            <button className="bg-gray-300 dark:bg-gray-700 px-2 py-1 cursor-pointer hover:bg-gray-900 hover:text-gray-100 dark:hover:bg-gray-100 dark:hover:text-gray-900 transition-all" onClick={() => setCategory('all')}>
                                All categories
                            </button>
                        </div>
                    )}

                    {filterType === 'price' && (
                        <div className='flex-col'>
                            <h2>Set Price Fitler</h2>
                            <label>Set Minimum price:</label>
                            <input type="number" min="0" max="1000" onChange={(e) => setMinPrice(+e.target.value)}></input>
                            <label>Set Maximum price:</label>
                            <input type="number" min="0" max="1000" onChange={(e) => setMaxPrice(+e.target.value)}></input>
                            <label>Testing Slider:</label>
                            <input type="number" min="0" max="1000" step="3" onChange={(e) => console.log(e.target.value)}></input>
                        </div>
                    )}

                </div>

            </div>

            <div className='grid grid-cols-subgrid col-span-full'>
                {/* <H2 heading="All Products" /> */}
                {productsDisplayed.map((product:ClothProduct) => (
                    <ProductCardGrid key={product.id} product={product} />
                ))}
            </div>
        </>
    )
}