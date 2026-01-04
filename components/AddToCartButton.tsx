'use client'

import React from "react"
import type { Product } from "@/app/products/lib/products"
import { ShoppingCartContext } from "@/components/ShoppingCartProvider";
import type { ShoppingCart, ShoppingCartItem } from "@/components/ShoppingCartProvider";

// let newSubTotal = 0

export default function AddToCartButton({product}: {product: Product}) {

    const [quantity, setQuantity] = React.useState(1)

    const {shoppingCart, setShoppingCart} = React.useContext(ShoppingCartContext);

    React.useEffect(() => {
        console.log(shoppingCart);
    }, [shoppingCart])

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
        setShoppingCart((prev:ShoppingCart) => {
            let updatedShoppingCart = {...prev};
            let updatedItems = {...prev.items, 
                [product.id]: {
                    name: product.name, 
                    image: product.image,
                    unitPrice: product.price, 
                    quantityAdded: quantity,
                    totalPrice: product.price * quantity
                }
            };
            updatedShoppingCart.items = updatedItems;
            updatedShoppingCart.subTotal = Object.values(updatedShoppingCart.items).reduce((acc:number, item:ShoppingCartItem) => acc + item.totalPrice, 0);
            return updatedShoppingCart;
        })
    };

    function handleRemoveFromCart() {
        // let cart = {...shoppingCart.items};
        // if (product.id in cart) {
        //     delete cart[product.id]; 
        //     setShoppingCart((prev:ShoppingCart) => {
        //         const updatedShoppingCart = {
        //             ...prev,
        //             items:{...cart},
        //             subTotal: Object.values(prev.items).reduce((acc:number, item:ShoppingCartItem) => acc + item.totalPrice, 0),
        //         }
        //         return updatedShoppingCart;
        //     });
        // };
        setShoppingCart((prev: ShoppingCart) => {
            let updatedShoppingCart = {...prev};
            let updatedShoppingCartItems = {...prev.items};
            if (product.id in updatedShoppingCartItems) {
                delete updatedShoppingCartItems[product.id];
                updatedShoppingCart.items = updatedShoppingCartItems; 
                updatedShoppingCart.subTotal = Object.values(updatedShoppingCartItems).reduce((acc, item) => acc + item.totalPrice, 0);
            }
            return updatedShoppingCart;
        })
    };

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