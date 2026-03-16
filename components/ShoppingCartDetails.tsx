'use client'

import { useShoppingCart } from "./ShoppingCartProvider"
import H3 from "./H3"
import Link from "next/link"

export default function ShoppingCartDetails() {
    const {shoppingCart} = useShoppingCart()
    
    return (
        <>
        {shoppingCart.items.length > 0 ? (
            <>
                { shoppingCart.items.map(item => (
                    <div className="col-span-full grid grid-cols-subgrid justify-items-center border-b border-gray-700 dark:border-gray-100 py-4" key={item.sku}>
                        <div className='col-span-5 h-48 w-40'>
                            <img className="object-cover h-full w-full" src={item.image} />
                        </div>
                        <div className="col-span-5">
                            <div className="p-2 text-xl">{item.name}</div>
                            <div className="p-2">Quanitiy: {item.quantityAdded}</div>
                            {item.discount > 0 ? 
                                <div className="p-2">Unit Price: <span className='line-through'>{item.unitPrice}</span> {+((item.unitPrice - ((item.unitPrice * item.discount) / 100))).toFixed(2)}</div> 
                                : <div className="p-2">Unit Price:  {item.unitPrice}</div>
                            }
                            <div className="p-2">Total Price: {+(item.totalPrice).toFixed(2)}</div>
                        </div>
                    </div>
                ))}
                <div className='col-span-full grid grid-cols-subgrid justify-items-center my-4'>
                    <div className='col-span-full'>
                        <div className="mx-4 my-2 text-lg">SubTotal: {shoppingCart.subTotal}</div>
                        <div className="mx-4 my-2 text-lg">Delivery Charges: {shoppingCart.deliveryCharges}</div>
                        <div className="mx-4 my-2 text-lg">Total Price: {shoppingCart.subTotal - shoppingCart.deliveryCharges}</div>
                    </div>
                    <div className='col-span-full my-4'>
                        <div className='mx-auto my-2'>
                            <Link className="text-lg inline-block border border-gray-800 dark:border-gray-100 text-gray-100 dark:text-gray-800 bg-gray-800 dark:bg-gray-100 px-10 py-5 cursor-pointer hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-100 transition-all" href='/checkout'>
                                Proceed to checkout
                            </Link>
                        </div>
                    </div>
                </div>
            </>
        ) : <H3 heading="Your shopping cart is empty. You need to add products into the shopping cart." /> }
        </>
    )
}