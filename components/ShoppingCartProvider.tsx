'use client'

import React from 'react';

// const ShoppingCartContext = React.createContext([]);


// export function ShoppingCartProvider({children}: {children: React.ReactNode}) {
    
//     return (
//         <ShoppingCartContext value={[]}>
//             {children}
//         </ShoppingCartContext>
//     );
// }

// export const useShoppingCart = () => React.useContext(ShoppingCartContext);

// export type ShoppingCartItem = {
//     id: number,
//     name: string,
//     image: string,
//     unitPrice: number,
//     quantityAdded: number,
//     totalPrice: number
// }\
export type ShoppingCartItem = {
  name: string,
  image: string,
  unitPrice: number,
  quantityAdded: number,
  totalPrice: number
}

export type ShoppingCart = {
  [id: string]: ShoppingCartItem | null,
}

export const ShoppingCartContext = React.createContext({});

export function ShoppingCartProvider({children}: {children: React.ReactNode}) {

    const [shoppingCart, setShoppingCart] = React.useState<ShoppingCart | null>(null)
    
    return (
        <ShoppingCartContext value={{shoppingCart, setShoppingCart}}>
            {children}
        </ShoppingCartContext>
    );
}