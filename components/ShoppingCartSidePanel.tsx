'use client'

import React from 'react';
import { useShoppingCart } from './ShoppingCartProvider';
import type { Product } from '@/lib/products';
import H3 from './H3';
// import type { ShoppingCartItem, ShoppingCart } from './ShoppingCartProvider';
import Link from 'next/link';
import RemoveFromCartButton from './RemoveFromCartButton';


export default function ShoppingCartSidePanel({setIsCartOpen}:{setIsCartOpen: React.Dispatch<React.SetStateAction<boolean>>}) {

    const { shoppingCart } = useShoppingCart();

    return (
        <div className="p-2 md:p-4 fixed z-20 right-0 top-0 bg-gray-200 dark:bg-gray-800 h-screen w-90 md:w-120 overflow-y-scroll">
            <button className="bg-gray-300 dark:bg-gray-700 px-2 py-0.5 cursor-pointer hover:bg-gray-900 hover:text-gray-100 dark:hover:bg-gray-100 dark:hover:text-gray-900 transition-all" onClick={() => setIsCartOpen(false)}>X</button>
            <div className="flex flex-row justify-center">
              <H3 heading="Shopping Cart" />
            </div>
            <div>
                { shoppingCart.items.length > 0 ?
                    Object.values(shoppingCart.items).map((item) => (
                        <div className="text-sm md:text-base my-4 mx-2 flex flex-row border-b border-gray-900 dark:border-gray-100 pb-2 justify-between" key={item.sku}>
                            <div className='h-30 w-26'>
                                <img className="h-full w-full object-cover" src={item.image} />
                            </div>
                            <div>
                                <div className="p-1">{item.name}</div>
                                <div className="p-1">Quanitiy: {item.quantityAdded}</div>
                                {item.discount > 0 ? 
                                    <div className="p-1">Unit Price: <span className='line-through'>{item.unitPrice}</span> {+((item.unitPrice - ((item.unitPrice * item.discount) / 100))).toFixed(2)}</div> 
                                    : <div className="p-1">Unit Price:  {item.unitPrice}</div>
                                }
                                <div className="p-1">Total Price: {+(item.totalPrice).toFixed(2)}</div>
                            </div>
                            <div>
                                <RemoveFromCartButton product={item} />
                            </div>    
                        </div>
                    ))
                    : <div className="p-1">
                        <H3 heading="Your Shopping cart is empty" />
                    </div>
                }
                <div>
                    { shoppingCart.items.length > 0 && 
                        <div className="flex flex-col text-lg text-center bottom-1 mx-2">
                            <div className="mx-auto my-1">SubTotal: {shoppingCart.subTotal}</div>
                            <div className="mx-auto my-1">Delivery Charges: {shoppingCart.deliveryCharges}</div>
                            <div className="mx-auto my-1">Total Price: {shoppingCart.subTotal - shoppingCart.deliveryCharges}</div>
                            <div className='justify-center my-2'>
                                <Link onClick={() => setIsCartOpen(false)} className="inline-block border border-gray-900 dark:border-gray-100 text-gray-900 dark:text-gray-100 bg-gray-200 dark:bg-gray-800 px-10 py-5 cursor-pointer hover:bg-gray-900 hover:text-gray-100 dark:hover:bg-gray-100 dark:hover:text-gray-900 transition-all" href='/shopping-cart'>
                                    View Shopping Cart
                                </Link> 
                            </div>
                            <div className='justify-center my-2'>
                                <Link onClick={() => setIsCartOpen(false)} className="inline-block border border-gray-800 dark:border-gray-100 text-gray-100 dark:text-gray-800 bg-gray-800 dark:bg-gray-100 px-10 py-5 cursor-pointer hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-100 transition-all" href='/checkout'>
                                    Proceed to checkout
                                </Link>
                            </div>
                            
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}