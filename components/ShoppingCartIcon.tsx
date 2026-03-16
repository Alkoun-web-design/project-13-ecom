'use client'
import { useState } from 'react'
import ShoppingCartSidePanel from './ShoppingCartSidePanel';
import { ShoppingBag } from './Icons';
import { useShoppingCart } from './ShoppingCartProvider';


export default function ShoppinCartItem() {
    
    const [isCartOpen, setIsCartOpen] = useState(false);

    const { shoppingCart } = useShoppingCart();
    
    
    return (
        <div className="col-start-10 col-end-13">
            <button className="border border-gray-900 text-nowrap px-4 py-2 cursor-pointer hover:bg-gray-900 hover:text-gray-100 dark:hover:bg-gray-100 dark:border-gray-100 dark:hover:text-gray-900 transition-all" title="Shopping Cart" onClick={() => setIsCartOpen((prev) => !prev)}>
                <ShoppingBag />
                <span className='hidden md:inline'>Shopping Cart</span>
                {shoppingCart.items.length > 0 && 
                    <div className='border border-gray-100 inline-block select-none relative right-0 -bottom-5.5 text-gray-100 dark:text-gray-900 dark:bg-gray-100 dark:border-gray-900 bg-gray-900 rounded-full w-7 h-7'>
                        <span className=''>{shoppingCart.items.length}</span>
                    </div>
                }
            </button>
            {isCartOpen && <ShoppingCartSidePanel setIsCartOpen={setIsCartOpen} />}
        </div>
    )
}