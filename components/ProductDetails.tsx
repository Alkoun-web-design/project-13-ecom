'use client'

import React from "react";
import type { ClothProduct, Sizes } from "@/lib/products";
import Image from "next/image";
import AddToCartButton from "./AddToCartButton";
import { useShoppingCart } from "@/components/ShoppingCartProvider";
import type { ShoppingCart, ShoppingCartItem } from "@/components/ShoppingCartProvider";
import { AddFilled, LessFilled, ShoppingCartLessFilled, ShoppingCartAddFilled } from "@/components/Icons";

export default function ProductDetails({product}: {product: ClothProduct}) {

// Implement Image grid, breadcrumb navigation, ratings and comments, wrap selctable options, use more room. full width for images

    const [quantity, setQuantity] = React.useState(1);
    const {shoppingCart, setShoppingCart} = useShoppingCart();
    const [variantIndex, setVariantIndex] = React.useState(0);
    const [size, setSize] = React.useState<Sizes>(product.variants[0].sizes[0]);
    const [imageIndex, setImageIndex] = React.useState(0);
    const [fit, setFit] = React.useState<string>(product.variants[0].fits[0]);

    React.useEffect(() => {
        setSize(product.variants[variantIndex].sizes[0])
        setFit(product.variants[variantIndex].fits[0])
    },[variantIndex])

    function handleQuantityIncrease() {
        if (quantity <= 10 && product.variants[variantIndex].stock > quantity){
            setQuantity(prev => prev + 1)
        }
    }

    function handleQuantityDecrease() {
        if (quantity !== 1){
            setQuantity(prev => prev - 1)
        }
    }

    function handleAddToCart () {
        setShoppingCart((prev:ShoppingCart) => {
            let updatedShoppingCart = {...prev};
            let updatedItems:ShoppingCartItem[] = [...prev.items];
            const currentProduct = {
                sku: product.variants[variantIndex].sku,
                name: product.name, 
                image: product.variants[variantIndex].images.src[0],
                color: product.variants[variantIndex].color,
                fit: fit,
                size: size,
                unitPrice: product.price,
                discount: product.discount,
                quantityAdded: quantity,
                totalPrice: product.discount > 0 ? +((product.price - ((product.price * product.discount) / 100))).toFixed(2) * quantity : product.price * quantity
            }
            const productIndex = updatedItems.findIndex(item => item.sku === product.variants[variantIndex].sku && item.color === product.variants[variantIndex].color && item.fit === fit && item.size === size)
            if (productIndex !== -1) {
                updatedItems[productIndex] = currentProduct;
            } else {
                updatedItems = [...updatedItems, currentProduct];
            } 
            
            updatedShoppingCart.items = updatedItems;
            updatedShoppingCart.subTotal = +updatedShoppingCart.items.reduce((acc:number, item:ShoppingCartItem) => acc + item.totalPrice, 0).toFixed(2);
            console.log(updatedShoppingCart);
            return updatedShoppingCart;
        })
    };

    // function handleRemoveFromCart() {
    //     setShoppingCart((prev: ShoppingCart) => {
    //         let updatedShoppingCart = {...prev};
    //         let updatedShoppingCartItems = [...prev.items];
    //         if (product.variants[variantIndex].sku in updatedShoppingCartItems) {
    //             delete updatedShoppingCartItems[product.variants[variantIndex].sku];
    //             updatedShoppingCart.items = updatedShoppingCartItems; 
    //             updatedShoppingCart.subTotal = +Object.values(updatedShoppingCartItems).reduce((acc, item) => acc + item.totalPrice, 0).toFixed(2);
    //         }
    //         return updatedShoppingCart;
    //     })
    // };

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

  return (
    <>
        <div className="col-span-full grid grid-cols-subgrid md:col-start-2 md:col-span-5">
            <div className="col-span-full">
                <Image src={product.variants[variantIndex].images.src[imageIndex]} alt={`${product.variants[variantIndex].color} ${product.name}`} style={{objectFit: "cover"}} width={700} height={700} /> 
            </div>
            <div className="col-span-full">
                <div className="w-full flex flex-row overflow-x-scroll">
                {product.variants[variantIndex].images.src.map((image, key) => 
                    <Image key={key} onClick={() => setImageIndex(key)} src={image} alt={`${product.name}`} style={{display:"inline-block", margin: "1rem", cursor: "pointer"}} width="180" height="180"/>
                )}
                </div>
            </div>
        </div>
        <div className="col-span-full md:col-start-7 md:col-span-5 md:text-lg justify-items-start">
            <div className="ml-2 my-4">Name: {product.name}</div>
            {product.discount > 0 ? 
                <div className="ml-2 my-4">Price: <span className='line-through'> {product.price}</span> {+((product.price - ((product.price * product.discount) / 100))).toFixed(2)}</div> 
                : <div className="ml-2 my-4">Price: {product.price}</div>
            }
            {/* <div className="py-1 px-2 m-1">Colors: {product.colors.map((color) => <button key={variantIndex} onClick={(e) => {setColor(e.target.title)}} className={`${colorAssignment(color)} inline-block w-6 h-6 rounded-full mx-1 border border-gray-900 dark:border-gray-100 hover:cursor-pointer`} title={color}></button>)} </div> */}
            <div className="ml-2 my-2">Colors: {product.variants.map((variant, index) => <button key={variant.color} onClick={() => {setVariantIndex(index)}} className={`${colorAssignment(variant.color)} inline-block w-6 h-6 my-auto rounded-full mx-1 border border-gray-900 dark:border-gray-100 hover:cursor-pointer`} title={variant.color}></button>)} </div>
            <div className="ml-2 my-2">Sizes: {product.variants[variantIndex].sizes.map((size) => <button key={size} onClick={() => {setSize(size)}} className="m-1 h-8 w-8 border bg-gray-100 dark:bg-gray-800 border-gray-900 dark:border-gray-100 active:border-2 active:border-gray-900 cursor-pointer hover:bg-gray-900 hover:text-gray-100 dark:hover:bg-gray-100 dark:hover:text-gray-900 transition-all focus:bg-gray-900 focus:text-gray-100 dark:focus:hover:bg-gray-100 focus:dark:hover:text-gray-900">
                    {size}
                </button>)} </div>  
            <div className="ml-2 my-2">Fit: {product.variants[variantIndex].fits.map((fit) => <button key={fit} onClick={() => {setFit(fit)}} className="bg-gray-100 dark:bg-gray-800 border border-gray-900 dark:border-gray-100 px-2 py-1 cursor-pointer hover:bg-gray-900 hover:text-gray-100 dark:hover:bg-gray-100 dark:hover:text-gray-900 transition-all focus:bg-gray-900 focus:text-gray-100 dark:focus:hover:bg-gray-100 focus:dark:hover:text-gray-900">
                    {fit}
                </button>)} </div>  
            <div className="ml-2 my-4">Description: {product.description}</div>
            <div className="ml-2 my-4">Material: {product.material}</div>
            <div className="ml-2 my-4">Category: {product.category}</div>
            {/* <div className="py-1 px-2 m-1"><AddToCartButton product={product}/></div> */}
            
        
            <div className="flex flex-row ml-2 my-2">
                <span className="my-auto">Quantity: </span>{quantity <= product.variants[variantIndex].stock ? 
                <button title="Add more quantity" className="ml-2 border bg-gray-100 dark:bg-gray-800 border-gray-900 dark:border-gray-100 px-2 py-1 cursor-pointer hover:bg-gray-900 hover:text-gray-100 dark:hover:bg-gray-100 dark:hover:text-gray-900 transition-all" onClick={handleQuantityIncrease}>
                    <AddFilled /> <span className="hidden md:inline">Add</span>
                </button> :
                <button disabled title="Added Maximum number" className="border bg-gray-100 dark:bg-gray-800 border-gray-900 dark:border-gray-100 px-2 py-1 cursor-pointer hover:bg-gray-900 hover:text-gray-100 dark:hover:bg-gray-100 dark:hover:text-gray-900 transition-all" onClick={handleQuantityIncrease}>
                    <AddFilled /> <span className="hidden md:inline">Add</span>
                </button> }
                <p className="w-6 m-2">{quantity}</p>
                <button title="Add less quantity" className="border bg-gray-100 dark:bg-gray-800 border-gray-900 dark:border-gray-100 px-2 py-1 cursor-pointer hover:bg-gray-900 hover:text-gray-100 dark:hover:bg-gray-100 dark:hover:text-gray-900 transition-all" onClick={handleQuantityDecrease}>
                    <LessFilled /> <span className="hidden md:inline">Less</span>
                </button>
            </div>
            {product.variants[variantIndex].stock === 0 ? <p className="text-red-500">Out of Stock</p> : 
                <div className="flex flex-row ml-2 my-4 justify-center">
                    <button title="Add product to cart" className="border border-gray-800 dark:border-gray-100 my-6 text-gray-100 dark:text-gray-800 bg-gray-800 dark:bg-gray-100 px-10 py-5 cursor-pointer hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-100 transition-all" onClick={handleAddToCart}>
                        <ShoppingCartAddFilled />Add to Cart
                    </button>
                </div>
            }
            <div className="ml-2 my-4 py-4 border-t-2 border-gray-400">
                <details name="product details" className="hover:cursor-pointer">
                    <summary>Care Instructions: </summary>
                    {product.careInstructions.map((careInstruction, index) => <p className="m-4" key={index}>{careInstruction}</p>)}
                </details>
            </div>
        </div>    
    </>
  )
}