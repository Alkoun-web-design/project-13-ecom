import {products} from './lib/products'
import type { Product } from './lib/products'
import Link from 'next/link'

export default async function Page() {
    return (
        <div>
            <h1>All Products</h1>
            {products.map((product:Product) => (
                <ul className="m-4" key={product.id}>
                    <li className="my-1"><Link href={`/products/${product.id}`}>Product ID: {product.id}</Link></li>
                    <li>Name: {product.name}</li>
                    <li>Price: {product.price}</li>
                    <li>Description: {product.description}</li>
                </ul>
            ))}
            
        </div>
    )
}