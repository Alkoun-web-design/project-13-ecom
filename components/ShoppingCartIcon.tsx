'use client'
import React from 'react'
import ShoppingCart from './ShoppingCart';

export default function ShoppinCartItem() {
    
    const [open, setOpen] = React.useState(false);
    
    return (
        <div className='inline'>
            <button onClick={() => setOpen((prev) => !prev)}></button>
            {open && <ShoppingCart setOpen={setOpen} />}
        </div>
    )
}