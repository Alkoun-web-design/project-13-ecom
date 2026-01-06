'use client'

import React from 'react';
import { products } from '@/app/products/lib/products';
import type { Product } from '@/app/products/lib/products';
import Link from 'next/link';

export default function FilteredProducts() {
    
    const [isFiltered, setIsFiltered] = React.useState(false);
    const [filterType, setFilterType] = React.useState<'category' | 'price' | 'rating' | 'none'>('none');
    const [category, setCategory]  = React.useState<'smartphones'|'laptops'|'earphones'|'accessories'|'all'>('all');

    React.useEffect(() => {
        if (isFiltered && filterType === 'category' && category === 'smartphones') {
            products.filter((product) => product.category === 'smartphones') 
        } else if (isFiltered && filterType === 'category' && category === 'laptops') {
            products.filter((product) => product.category === 'laptops') 
        } else if (isFiltered && filterType === 'category' && category === 'earphones') {
            products.filter((product) => product.category === 'earphones')
        } else if (isFiltered && filterType === 'category' && category === 'accessories') {
            products.filter((product) => product.category === 'accessories')
        } else {
            products.filter((product) => product.category === 'all')
        }
    }, [isFiltered, filterType, category]);
    
    return(
        <>
            <div>
                <button onClick={() => setIsFiltered((prev) => !prev)}>Filter</button>
                {isFiltered && (
                    <>
                        <div>
                            <label htmlFor='no-filter'>No filter</label>
                            <input type='radio' name='no-filter' onChange={() => setFilterType('none')}/>
                            <label htmlFor='category'>Category:</label>
                            <input type="radio" name="category" onClick={() => setFilterType('category')}/>
                            <label htmlFor='price'>Price:</label>
                            <input type="radio" name="price" onClick={() => setFilterType('price')}/>
                            <label htmlFor='rating'>Rating:</label>
                            <input type="radio" name="rating" onClick={() => setFilterType('rating')}/>
                        </div>

                        {filterType === 'category' && (
                            <div>
                                <h2>Select Category:</h2>
                                <button onChange={() => setCategory('smartphones')}>Smartphones</button>
                                <button onChange={() => setCategory('laptops')}>Laptops</button>
                                <button onChange={() => setCategory('earphones')}>Earphones</button>
                                <button onChange={() => setCategory('accessories')}>Accessories</button>
                            </div>
                        )}

                    </>
                )}
            </div>

            <div>
                <h2>All Products</h2>
                {products.map((product:Product) => (
                    <ul className="m-4" key={product.id}>
                        <li className="my-1"><Link href={`/products/${product.id}`}>Product ID: {product.id}</Link></li>
                        <li>Name: {product.name}</li>
                        <li>Price: {product.price}</li>
                        <li>Description: {product.description}</li>
                    </ul>
                ))}
            </div>
        </>
    )
}