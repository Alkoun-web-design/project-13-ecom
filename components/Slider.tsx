import type { Product } from '../app/products/lib/products'
import Link from 'next/link';

export default function Slider({products, category}: {products: Product[], category: string}) {

    const categorizedProduct = products.filter((product) => product.category === category);

    return (
        <div className="flex flex-row">
            {
              categorizedProduct.map((product) => (
                    <ul className="m-4" key={product.id}>
                        <li className="my-1"><Link href={`/products/${product.id}`}>Name: {product.name}</Link></li>
                        {product.discount > 0 ? 
                            <li>Price:<span className='line-through'>{product.price}</span> {+((product.price - ((product.price * product.discount) / 100))).toFixed(2)}</li> 
                            : <li>Price: {product.price}</li>
                        }
                        <li>Description: {product.description}</li>
                    </ul>
              ))
            }
          </div>
    )
}