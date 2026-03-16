import {products} from "@/lib/products"
import H1 from "@/components/H1";
import ProductDetails from "@/components/ProductDetails";
import Link from "next/link"

export default async function Page({params}: { params: Promise<{ slug: string }>}) {

    const slug = (await params).slug
    const productBySlug = products.find(product => product.slug === slug);
    
    return (
        <div className="col-span-full grid grid-cols-subgrid">
            <div className="col-start-2 col-end-12 mt-20">
                <Link href="/" className="text-xl text-gray-500 hover:text-gray-900 hover:underline mx-1">Home</Link>
                <span className="inline-block text-xl  mx-1">/</span>
                <Link href="/categories" className="text-xl text-gray-500 hover:text-gray-900 hover:underline mx-1">Categories</Link>
                <span className="inline-block text-xl  mx-1">/</span>
                { productBySlug ? (
                    <>
                        <Link href={`/categories/${productBySlug.category.toLowerCase()}`} className="text-xl text-gray-500 hover:text-gray-900 hover:underline mx-1">{productBySlug.category}</Link>
                        <span className="inline-block text-xl  mx-1">/</span>
                        <p className="inline-block text-xl mx-1">{productBySlug.name}</p>
                    </>
                ) : (
                    <p className="inline-block text-xl mx-1">Product Not Found</p>
                )}
            </div>
            { productBySlug ? (
                <>
                    <div className="col-span-full justify-self-center">
                        <H1 heading={productBySlug?.name} />
                    </div>
                    <ProductDetails product={productBySlug} />
                </>
            ) : (
                <>
                    <div className="col-span-full justify-self-center">
                        <H1 heading="It looks like we don't have that one." />
                    </div>
                </>
            )}

        </div>
    )
}