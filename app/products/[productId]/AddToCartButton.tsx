'use client'

import React from "react"
import { useShoppingCart } from "@/components/ShoppingCartProvider";
export default function AddToCartButton({product}: {product: any}) {

    const [quantity, setQuantity] = React.useState(0)

    const shoppingCart = useShoppingCart();

    function handleQuantityIncrease() {
        if (quantity !== 10){
            setQuantity(prev => prev + 1)
        }
    }

    function handleQuantityDecrease() {
        if (quantity !== 0){
            setQuantity(prev => prev - 1)
        }
    }
    
    function handleClick () {
        const item = product.name;
        const amount = quantity; 
        console.log(`Added to cart: ${amount}: ${item}`);
    }

    return (
        <div>
            <div className="flex flex-row">
                <button className="bg-gray-700" onClick={handleQuantityIncrease}>More</button>
                <p className="w-6 mx-2">{quantity}</p>
                <button className="bg-gray-700" onClick={handleQuantityDecrease}>Less</button>
            </div>
            <button onClick={handleClick}>Add to Cart</button>
        </div>
    )

}