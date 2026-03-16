import type { ClothProduct } from '../lib/products'
import Link from 'next/link';
import ProductCard from './ProductCard';

export default function Slider({products, category}: {products: ClothProduct[], category: string}) {

    const categorizedProduct = products.filter((product) => product.category === category);

    return (
        // <div className="grid grid-cols-subgrid col-span-full overflow-hidden">
        <div className="grid grid-cols-subgrid col-span-full overflow-hidden">
            {
                categorizedProduct.map((product) => (
                    <ProductCard product={product} key={product.id} />
                ))
            }
          </div>
    )
}