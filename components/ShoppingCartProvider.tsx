'use client'

import React from 'react';

export type ShoppingCartItem = {
  name: string,
  image: string,
  unitPrice: number,
  quantityAdded: number,
  discount: number,
  totalPrice: number
}

export type ShoppingCartItems = {
  [id: string]: ShoppingCartItem,
}

export type ShoppingCart = {
  items: ShoppingCartItems | {},
  subTotal: number,
  deliveryCharges: number,
  netTotal: number
}

export const ShoppingCartContext = React.createContext({});

export function ShoppingCartProvider({children}: {children: React.ReactNode}) {

    const [shoppingCart, setShoppingCart] = React.useState<ShoppingCart>({
      items: {},
      subTotal: 0,
      deliveryCharges: 0,
      netTotal: 0
    })
    
    return (
        <ShoppingCartContext value={{shoppingCart, setShoppingCart}}>
            {children}
        </ShoppingCartContext>
    );
}