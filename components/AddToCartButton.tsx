'use client'

import React from "react"
import type { ClothProduct, Sizes } from "@/lib/products"
import { useShoppingCart } from "@/components/ShoppingCartProvider";
import type { ShoppingCart, ShoppingCartItem } from "@/components/ShoppingCartProvider";
import { AddFilled, LessFilled, ShoppingCartLessFilled, ShoppingCartAddFilled } from "@/components/Icons";


// let newSubTotal = 0

export default function AddToCartButton({product}: {product: ClothProduct}) {

    const [quantity, setQuantity] = React.useState(1);
    const [variantIndex, setVariantIndex] = React.useState(0);
    const [color, setColor] = React.useState(product.variants[0].color[0]);
    const [size, setSize] = React.useState<Sizes>(product.variants[0].sizes[0]);
    const {shoppingCart, setShoppingCart} = useShoppingCart();

    React.useEffect(() => {
        console.log(shoppingCart);
    }, [shoppingCart])

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

    React.useEffect(() => {
        console.log(size, color)
    },[size, color])

    // function handleColorSelect(e: React.SyntheticEvent<HTMLButtonElement>) {
    //     setColor(prev => prev = e.target.title);
    // } 

    // function handleSizeSelect(e: React.SyntheticEvent<HTMLButtonElement>) {
    //     setSize(prev => prev = e.target.value);
    // }   

        // function handleAddToCart () {
        //     setShoppingCart((prev:ShoppingCart) => {
        //         let updatedShoppingCart = {...prev};
        //         let updatedItems = {...prev.items, 
        //             [product.variants[variantIndex].sku]: {
        //                 sku: product.variants[variantIndex].sku,
        //                 name: product.name, 
        //                 image: product.variants[variantIndex].images.src[0],
        //                 color: product.variants[variantIndex].color,
        //                 fit: fit,
        //                 size: size,
        //                 unitPrice: product.price,
        //                 discount: product.discount, 
        //                 quantityAdded: quantity,
        //                 totalPrice: product.discount > 0 ? +((product.price - ((product.price * product.discount) / 100))).toFixed(2) * quantity : product.price * quantity
        //             }
        //         };
        //         updatedShoppingCart.items = updatedItems;
        //         // updatedShoppingCart.subTotal = +Object.values(updatedShoppingCart.items).reduce((acc:number, item:ShoppingCartItem) => acc + item.totalPrice, 0).toFixed(2);
        //         return updatedShoppingCart;
        //     })
        // };

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
            let updatedItems = {...prev.items, 
                [product.variants[variantIndex].sku]: {
                    name: product.name, 
                    image: product.variants[variantIndex].images.src[0],
                    color: color,
                    size: size,
                    unitPrice: product.price,
                    discount: product.discount, 
                    quantityAdded: quantity,
                    totalPrice: product.discount > 0 ? +((product.price - ((product.price * product.discount) / 100))).toFixed(2) * quantity : product.price * quantity
                }
            };
            updatedShoppingCart.items = updatedItems;
            updatedShoppingCart.subTotal = +Object.values(updatedShoppingCart.items).reduce((acc:number, item:ShoppingCartItem) => acc + item.totalPrice, 0).toFixed(2);
            return updatedShoppingCart;
        })
    };

    // function handleRemoveFromCart() {
    //     setShoppingCart((prev: ShoppingCart) => {
    //         let updatedShoppingCart = {...prev};
    //         let updatedShoppingCartItems = {...prev.items};
    //         if (product.id in updatedShoppingCartItems) {
    //             delete updatedShoppingCartItems[product.variants[variantIndex].sku];
    //             updatedShoppingCart.items = updatedShoppingCartItems; 
    //             updatedShoppingCart.subTotal = +Object.values(updatedShoppingCartItems).reduce((acc, item) => acc + item.totalPrice, 0).toFixed(2);
    //         }
    //         return updatedShoppingCart;
    //     })
    // };

    return (
        <div>
            <div className="flex flex-row">
                <p className="py-1 px-2 m-1">Color: </p>
                {/* {product.variants.map((variant) => <button key={variantIndex} onClick={(e) => {setColor(e.target.title)}} className={`${colorAssignment(variant.color)} inline-block w-6 h-6 rounded-full mx-1 border border-gray-900 dark:border-gray-100 hover:cursor-pointer`} title={variant.color}></button>)} */}
                {product.variants.map((variant, index) => <button key={variantIndex} onClick={(e) => {setVariantIndex(index)}} className={`${colorAssignment(variant.color)} inline-block w-6 h-6 rounded-full mx-1 border border-gray-900 dark:border-gray-100 hover:cursor-pointer`} title={variant.color}></button>)}
            </div>
            <div className="flex flex-row">
                <p className="py-1 px-2 m-1">Sizes: </p>
                {product.variants[variantIndex].sizes.map((size) => <button key={size} onClick={(e) => {setSize((e.currentTarget.textContent as Sizes))}} className="text-center py-auto inline-block w-8 h-8 mx-1 border border-gray-900 dark:border-gray-100 hover:cursor-pointer">{size}</button>)}
            </div>
            <div className="flex flex-row">
                <p className="my-auto">Quantity: </p> {quantity <= product.variants[variantIndex].stock ? 
                <button className="m-1 bg-gray-300 dark:bg-gray-700 px-2 py-1 cursor-pointer hover:bg-gray-900 hover:text-gray-100 dark:hover:bg-gray-100 dark:hover:text-gray-900 transition-all" onClick={handleQuantityIncrease}>
                    <AddFilled /> Add
                </button> :
                <button disabled className="m-1 bg-gray-300 dark:bg-gray-700 px-2 py-1 cursor-pointer hover:bg-gray-900 hover:text-gray-100 dark:hover:bg-gray-100 dark:hover:text-gray-900 transition-all" onClick={handleQuantityIncrease}>
                    <AddFilled /> Add
                </button> }
                <p className="w-6 m-2">{quantity}</p>
                <button className="m-1 bg-gray-300 dark:bg-gray-700 px-2 py-1 cursor-pointer hover:bg-gray-900 hover:text-gray-100 dark:hover:bg-gray-100 dark:hover:text-gray-900 transition-all" onClick={handleQuantityDecrease}>
                    <LessFilled /> Less
                </button>
            </div>
            {product.variants[variantIndex].stock === 0 ? <p className="text-red-500">Out of Stock</p> : 
            <>
                <button className="m-2 bg-gray-600 dark:bg-gray-700 px-2 py-1 cursor-pointer hover:bg-gray-900 hover:text-gray-100 dark:hover:bg-gray-100 dark:hover:text-gray-900 transition-all" onClick={handleAddToCart}>
                    <ShoppingCartAddFilled /> Add to Cart
                </button>
                {/* <button className="m-2 bg-gray-300 dark:bg-gray-700 px-2 py-1 cursor-pointer hover:bg-gray-900 hover:text-gray-100 dark:hover:bg-gray-100 dark:hover:text-gray-900 transition-all" onClick={handleAddToCart}>
                    <ShoppingCartLessFilled/> Remove from Cart
                </button>  */}
            </>    
            }
        </div>
    )

}