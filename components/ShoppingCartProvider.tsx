'use client'

import React from 'react';

const ShoppingCartContext = React.createContext([]);


export function ShoppingCartProvider({children}: {children: React.ReactNode}) {
    
    return (
        <ShoppingCartContext value={[]}>
            {children}
        </ShoppingCartContext>
    );
}

export const useShoppingCart = () => React.useContext(ShoppingCartContext);