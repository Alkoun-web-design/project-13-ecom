'use client'

import React from 'react';
import { ShoppingCartContext } from './ShoppingCartProvider';
import type { Product } from '@/app/products/lib/products';
import type { ShoppingCartItem, ShoppingCart } from './ShoppingCartProvider';

let subtotal = 0

export default function ShoppingCart({setIsCartOpen}) {

    const { shoppingCart } = React.useContext(ShoppingCartContext);

    React.useEffect(() => {
        if (shoppingCart) {
            let cart:ShoppingCartItem[] = Object.values(shoppingCart);
            subtotal = cart.reduce((acc, item) => acc + item.totalPrice, 0)
            console.log(subtotal);
        }
    }, [shoppingCart])

    return (
        <>  
            <button onClick={() => setIsCartOpen(false)}>X</button>
            <div>
              <h1>Shopping Cart</h1>
            </div>
            <div>
                {shoppingCart ?
                    Object.values(shoppingCart).map((item) => (
                        <div className="m-4" key={item.id}>
                            <div>{item.name}</div>
                            <div>{item.image}</div>
                            <div>Quanitiy: {item.quantityAdded}</div>
                            <div>Unit Price: {item.unitPrice}</div>
                            <div>Total Price: {item.totalPrice}</div>
                        </div>
                    ))
                    : <div>No items in cart</div>
                }
                {shoppingCart ? 
                    <div>Gross Total: {subtotal}</div>
                    : null
                }
            </div>
        </>
    )
}