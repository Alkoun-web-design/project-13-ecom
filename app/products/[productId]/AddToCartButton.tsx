'use client'

import React from "react"
// import { useShoppingCart } from "@/components/ShoppingCartProvider";
import { ShoppingCartContext } from "@/components/ShoppingCartProvider";

export default function AddToCartButton({product}: {product: any}) {

    const [quantity, setQuantity] = React.useState(1)

    const {shoppingCart, setShoppingCart} = React.useContext(ShoppingCartContext);

    React.useEffect(() => {
        console.log(shoppingCart)
    }, [shoppingCart])

    function handleQuantityIncrease() {
        if (quantity !== 10){
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
                <button className="bg-gray-700" onClick={handleQuantityIncrease}>More</button>
                <p className="w-6 mx-2">{quantity}</p>
                <button className="bg-gray-700" onClick={handleQuantityDecrease}>Less</button>
            </div>
            <button onClick={handleAddToCart}>Add to Cart</button>
            <button onClick={handleRemoveFromCart}>Remove from Cart</button>
        </div>
    )

}