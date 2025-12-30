'use client'

import React from "react"
import type { Product } from "@/app/products/lib/products"
import { ShoppingCartContext } from "@/components/ShoppingCartProvider";

export default function AddToCartButton({product}: {product: Product}) {

    const [quantity, setQuantity] = React.useState(1)

    const {shoppingCart, setShoppingCart} = React.useContext(ShoppingCartContext);

    React.useEffect(() => {
        console.log(shoppingCart);
        console.log(`${product.quantity} > ${quantity}`)

    }, [shoppingCart, quantity])

    function handleQuantityIncrease() {
        
        if (quantity <= 10 && product.quantity > quantity){
            setQuantity(prev => prev + 1)
        }
    }

    function handleQuantityDecrease() {
        if (quantity !== 1){
            setQuantity(prev => prev - 1)
        }
    }
    
    function handleAddToCart () {
        const id = product.id;
        const item = product.name;
        const amount = quantity; 
        setShoppingCart({...shoppingCart, [id]: {product: item, quantity: amount}});
    }

    function handleRemoveFromCart() {
        const id = product.id;
        let cart = {...shoppingCart};
        if (id in cart) {
            delete cart[id]; 
            setShoppingCart({...cart});
        }
    }

    return (
        <div>
            <div className="flex flex-row">
                {quantity <= product.quantity ? <button className="bg-gray-700" onClick={handleQuantityIncrease}>More</button> :
                <button disabled className="bg-gray-700" onClick={handleQuantityIncrease}>More</button> }
                <p className="w-6 mx-2">{quantity}</p>
                <button className="bg-gray-700" onClick={handleQuantityDecrease}>Less</button>
            </div>
            {product.quantity === 0 ? <p className="text-red-500">Out of Stock</p> : 
            <>
                <button onClick={handleAddToCart}>Add to Cart</button>
                <button onClick={handleRemoveFromCart}>Remove from Cart</button> 
            </>    
            }
        </div>
    )

}