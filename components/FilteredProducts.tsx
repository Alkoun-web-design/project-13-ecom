'use client'

import React from 'react';
import { products } from '@/app/products/lib/products';
import type { Product } from '@/app/products/lib/products';
import Link from 'next/link';
import { set } from 'react-hook-form';

export default function FilteredProducts() {
    
    const [productsDisplayed, setProductsDisplayed] = React.useState(products);
    const [isFiltered, setIsFiltered] = React.useState(false);
    const [filterType, setFilterType] = React.useState<'category' | 'price' | 'discount' | 'none'>('none');
    const [category, setCategory]  = React.useState<'smartphones'|'laptops'|'earphones'|'accessories'|'all'>('all');
    const [minPrice, setMinPrice] = React.useState<number>(0);
    const [maxPrice, setMaxPrice] = React.useState<number>(0);

    React.useEffect(() => {
        if (isFiltered && filterType === 'category' && category === 'smartphones') {
            setProductsDisplayed(products.filter((product) => product.category === 'smartphones')); 
        } else if (isFiltered && filterType === 'category' && category === 'laptops') {
            setProductsDisplayed(products.filter((product) => product.category === 'laptops')); 
        } else if (isFiltered && filterType === 'category' && category === 'earphones') {
            setProductsDisplayed(products.filter((product) => product.category === 'earphones'));
        } else if (isFiltered && filterType === 'category' && category === 'accessories') {
            setProductsDisplayed(products.filter((product) => product.category === 'accessories'));
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
    
    return(
        <>
            <div>
                <button onClick={() => setIsFiltered((prev) => !prev)}>Filter</button>
                {isFiltered && (
                    <>
                        <div>
                            <label htmlFor='no-filter'>No filter</label>
                            <input type='radio' name='filter-type' id="no-filter" onChange={() => setFilterType('none')}/>
                            <label htmlFor='category'>Category:</label>
                            <input type="radio" name='filter-type' id="catregory" onChange={() => setFilterType('category')}/>
                            <label htmlFor='price'>Price:</label>
                            <input type="radio" name='filter-type' id="price" onChange={() => setFilterType('price')}/>
                            <label htmlFor='discount'>Discount:</label>
                            <input type="radio" name='filter-type' id="discount" onChange={() => setFilterType('discount')}/>
                        </div>
                    </>
                )}

                    {filterType === 'category' && (
                        <div>
                            <h2>Select Category:</h2>
                            <button onClick={() => setCategory('smartphones')}>Smartphones</button>
                            <button onClick={() => setCategory('laptops')}>Laptops</button>
                            <button onClick={() => setCategory('earphones')}>Earphones</button>
                            <button onClick={() => setCategory('accessories')}>Accessories</button>
                            <button onClick={() => setCategory('all')}>All categories</button>
                        </div>
                    )}

                    {filterType === 'price' && (
                        <div>
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

            <div>
                <h2>All Products</h2>
                {productsDisplayed.map((product:Product) => (
                    <ul className="m-4" key={product.id}>
                        <li className="my-1"><Link href={`/products/${product.id}`}>Name: {product.name}</Link></li>
                        {product.discount > 0 ? 
                            <li>Price:<span className='line-through'>{product.price}</span> {+((product.price - ((product.price * product.discount) / 100))).toFixed(2)}</li> 
                            : <li>Price: {product.price}</li>
                        }
                        <li>Description: {product.description}</li>
                    </ul>
                ))}
            </div>
        </>
    )
}