import type { ClothProduct, Product } from '@/lib/products'
import Link from 'next/link'
import Image from 'next/image'

export default function ProductCardGrid({product}: {product: ClothProduct}) {

    function colorAssignment(color: string) {
        switch(color) {
            case "Black":
                return "bg-black"
            case "White":
                return "bg-white"
            case "Red":
                return "bg-red-500"
            case "Blue":
                return "bg-blue-500"
            case "Green":
                return "bg-green-700"
            case "Yellow":
                return "bg-yellow-500"
            case "Orange":
                return "bg-orange-500"
            case "Purple":
                return "bg-purple-500"
            case "Pink":
                return "bg-pink-500"
            case "Brown":
                return "bg-amber-800"
            case "Gray":
                return "bg-gray-500"
            case "Silver":
                return "bg-silver-500"
            case "Gold":
                return "bg-gold-500"
            case "Beige":
                return "bg-amber-200"
            case "Copper":
                return "bg-copper-500"
            case "Crimson":
                return "bg-crimson-500"
            case "Magenta":
                return "bg-magenta-500"
            case "Navy":
                return "bg-blue-900"
            case "Olive":
                return "bg-olive-500"
            case "Teal":
                return "bg-teal-500"
            case "Violet":
                return "bg-violet-500"
            case "Aqua":
                return "bg-aqua-500"
            case "Azure":
                return "bg-azure-500"
            case "Bronze":
                return "bg-bronze-500"
        }
    }

    // function selectOption(e:  React.ChangeEvent<HTMLSelectElement>) {
    //     console.log(e.target.value);
    // }

    // add link default link to product card, add link to color variants{href needs to be customized according to variant sku}, display rating.

    return (
        <div className="col-span-6 sm:col-span-4 lg:col-span-3 xl:col-span-2 h-fit hover:shadow-lg hover:cursor-pointer transition-all p-2">
            <Link href={`/products/${product.slug}`}>
            <div>
                {/* <Image loading="lazy" className='object-cover' src={product.variants[0].images.src[0]} alt={product.name} width={240} height={320}/> */}
                <img loading="lazy" className='object-cover h-80 w-60' src={product.variants[0].images.src[0]} alt={product.name}/>

            </div>
            <ul className="mx-2 my-4 text-sm md:text-base">
                <li className="my-1 mx-2">{product.name}</li>
                <li className="my-1 mx-2">{product.variants.map((variant) => <div key={variant.color} className={`${colorAssignment(variant.color)} inline-block w-5 h-5 rounded-full m-1 border border-gray-900 dark:border-gray-100`}></div>)}</li>
                {product.discount > 0 ? 
                    <li className="my-1 mx-2">Price:<span className='line-through'>{product.price}</span> {+((product.price - ((product.price * product.discount) / 100))).toFixed(2)}</li> 
                    : <li className="my-1 mx-2">Price: {product.price}</li>
                }
                {/* <li className="py-1 px-2">Description: {product.description}</li> */}
            </ul>
            </Link>
        </div>
    )
}