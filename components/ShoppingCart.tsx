'use client'

import React from 'react';
import { ShoppingCartContext } from './ShoppingCartProvider';
import type { Product } from '@/app/products/lib/products';
import type { ShoppingCartItem, ShoppingCart } from './ShoppingCartProvider';
import Link from 'next/link';


export default function ShoppingCart({setIsCartOpen}) {

    const { shoppingCart } = React.useContext(ShoppingCartContext);

    return (
        <div>  
            <button onClick={() => setIsCartOpen(false)}>X</button>
            <div>
              <h1>Shopping Cart</h1>
            </div>
            <div>
                {shoppingCart.items ?
                    Object.values(shoppingCart.items).map((item) => (
                        <div className="m-4" key={item.name}>
                            <div>{item.name}</div>
                            <div>{item.image}</div>
                            <div>Quanitiy: {item.quantityAdded}</div>
                            {item.discount > 0 ? 
                                <div>Unit Price: <span className='line-through'>{item.unitPrice}</span> {+((item.unitPrice - ((item.unitPrice * item.discount) / 100))).toFixed(2)}</div> 
                                : <div>Unit Price:  {item.unitPrice}</div>
                            }
                            <div>Total Price: {+(item.totalPrice).toFixed(2)}</div>
                        </div>
                    ))
                    : <div>No items in cart</div>
                }
                {shoppingCart.subTotal ? 
                    <div>
                        <div>Gross Total: {shoppingCart.subTotal}</div>
                        <Link href='/checkout'>Proceed to checkout</Link> 
                    </div>                   
                    : null
                }
            </div>
        </div>
    )
}