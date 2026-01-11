'use client'

import React from 'react';

export type ShoppingCartContextType = {
  shoppingCart: ShoppingCart,
  setShoppingCart: React.Dispatch<React.SetStateAction<ShoppingCart>>
}

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

const ShoppingCartContext = React.createContext<ShoppingCartContextType>({
      items: {},
      subTotal: 0,
      deliveryCharges: 0,
      netTotal: 0
    });

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

export function useShoppingCart() {
  const context = React.useContext(ShoppingCartContext);
  return context;
};