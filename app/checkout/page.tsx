'use client'

import React from 'react';
import { ShoppingCartContext, ShoppingCartItem } from '@/components/ShoppingCartProvider';
import Link from 'next/link';

export default function Page() {

    const {shoppingCart} = React.useContext(ShoppingCartContext);

    return (
        <>
        {shoppingCart.items ? 
            <div>
                <h1>Checkout Page</h1>
                {Object.values(shoppingCart.items).map((item) => (
                    <ul className="m-4" key={item.name}>
                        <li>{item.name}</li>
                        <li>Unit Price: {item.unitPrice}</li>
                        <li>Quanitty: {item.quantityAdded}</li>
                        <li>Total Price: {item.totalPrice}</li>
                    </ul>
                ))}
                <div className="mx-4 my-2">SubTotal: {shoppingCart.subTotal}</div>
                <div className="mx-4 my-2">Delivery Charges: {shoppingCart.deliveryCharges}</div>
                <div className="mx-4 my-2">Total Price: {shoppingCart.subTotal - shoppingCart.deliveryCharges}</div>
            </div> 

        : 
            <div>
                <p>Your Shopping Cart is empty.</p>
                <Link href="/">Return to Home</Link>
                <Link href="/products">Return to Products</Link>
            </div>
        }
        </>
    );
}