import {products, categories} from "@/lib/products"
import H1 from "@/components/H1";
import ProductCardGrid from "@/components/ProductCardGrid";
import Link from "next/link";

export default async function Page({params}: { params: Promise<{ slug: string }>}) {

    const categorySlug = (await params).slug;
    const category = categorySlug.charAt(0).toUpperCase() + categorySlug.slice(1);
    const productsByCategory = products.filter((product => product.category.toLowerCase() === categorySlug));
    
    return (
        <div className="px-6 col-span-full grid grid-cols-subgrid">
            <div className="col-start-2 col-end-12 mt-20">
              <Link href="/" className="text-xl text-gray-500 hover:text-gray-900 hover:underline mx-1">Home</Link>
              <span className="inline-block text-xl mx-1">/</span>
              <Link href="/categories" className="text-xl text-gray-500 hover:text-gray-900 hover:underline mx-1">Categories</Link>
              <span className="inline-block text-xl mx-1">/</span><p className="inline-block text-xl  mx-1">{category}</p>
            </div>
            
            <div className="col-span-full justify-self-center mb-5">
                <H1 heading={category} />
            </div>
            <div className="grid grid-cols-subgrid col-span-full">
                { 
                    productsByCategory.map(product => (
                        <ProductCardGrid product={product} key={product.id} />
                    ))
                }
            </div>
        </div>
    )
}