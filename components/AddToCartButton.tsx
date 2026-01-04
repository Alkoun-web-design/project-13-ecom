'use client'

import React from "react"
import type { Product } from "@/app/products/lib/products"
import { ShoppingCartContext } from "@/components/ShoppingCartProvider";
import type { ShoppingCartItem } from "@/components/ShoppingCartProvider";

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
        setShoppingCart({...shoppingCart, 
            [product.id]: {
                name: product.name, 
                image: product.image,
                unitPrice: product.price, 
                quantityAdded: quantity,
                totalPrice: product.price * quantity
            }}
        );

        // let newCart:ShoppingCartItem[] = []
        // let newProduct = {
        //     id: +product.id, 
        //     name: product.name, 
        //     image: product.image, 
        //     unitPrice: product.price, 
        //     quantityAdded: quantity, 
        //     totalPrice: product.price * quantity  
        // };
        // let existingProduct = shoppingCart.find((item:ShoppingCartItem) => +item.id === +product.id);
        // console.log(!shoppingCart);
        // if (shoppingCart !== null && existingProduct === -1) {
        //     newCart = [...shoppingCart, newProduct];
        // } else if (shoppingCart !== null && existingProduct !== -1) {
        //     newCart[existingProduct].quantityAdded = quantity;       
        // } else {
        //     newCart = [newProduct];
        // }
        // setShoppingCart(newCart);
    }

    function handleRemoveFromCart() {
        let cart = {...shoppingCart};
        if (product.id in cart) {
            delete cart[product.id]; 
            setShoppingCart({...cart});
        };

        // let cart = [...shoppingCart];
        // setShoppingCart(cart.filter(item => item.id === product.id));
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