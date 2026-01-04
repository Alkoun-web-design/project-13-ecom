'use client'
import React from 'react'
import ShoppingCart from './ShoppingCart';

export default function ShoppinCartItem() {
    
    const [isCartOpen, setIsCartOpen] = React.useState(false);
    
    return (
        <>
            <button onClick={() => setIsCartOpen((prev) => !prev)}>Cart</button>
            {isCartOpen && <ShoppingCart setIsCartOpen={setIsCartOpen} />}
        </>
    )
}