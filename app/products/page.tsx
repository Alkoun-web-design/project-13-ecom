import {products} from './lib/products'

interface Product {
    id: string,
    name: string,
    description: string,
    price: number,
    image: string
}

export default async function Page() {
    return (
        <div>
            <h1>All Products</h1>
            {products.map((product):any => (
                <ul className="m-4" key={product.id}>
                    <li>Product ID: {product.id}</li>
                    <li>Name: {product.name}</li>
                    <li>Price: {product.price}</li>
                    <li>Description: {product.description}</li>
                </ul>
            ))}
            
        </div>
    )
}