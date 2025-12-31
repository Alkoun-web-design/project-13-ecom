'use client'

import React from 'react';
import { ShoppingCartContext } from './ShoppingCartProvider';
import type { Product } from '@/app/products/lib/products';
import type { ShoppinCartItem } from './ShoppingCartProvider';

export default function ShoppingCart(setOpen: React.Dispatch<React.SetStateAction<boolean>>) {

    const { shoppingCart } = React.useContext(ShoppingCartContext);

    return (
        <>  
            <button onClick={() => setOpen(false)}>X</button>
            <div>
              <h1>Shopping Cart</h1>
            </div>
            <div>
                {shoppingCart.length > 0 ? 
                    shoppingCart.map((item:ShoppinCartItem) => (
                        <div key={item.id}>
                            <div>{item.name}</div>
                            <div>{item.image}</div>
                            <div>{item.quantityAdded}</div>
                            <div>{item.unitPrice}</div>
                            <div>{item.totalPrice}</div>
                        </div>
                    ))
                    : <div>No items in cart</div>
                }
            </div>
        </>
    )
}