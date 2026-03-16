'use client'
import { useShoppingCart } from "@/components/ShoppingCartProvider";
import { ShoppingCartLessFilled}  from "./Icons";
import type { ClothProduct } from "@/lib/products";
import type { ShoppingCart, ShoppingCartItem } from "@/components/ShoppingCartProvider";

export default function RemoveFromCartButton({product}: {product: ShoppingCartItem}) { 

    const {shoppingCart, setShoppingCart} = useShoppingCart();

    function handleRemoveFromCart() {
        setShoppingCart((prev: ShoppingCart) => {
            let updatedShoppingCart = {...prev};
            let updatedShoppingCartItems = [...prev.items];
            updatedShoppingCartItems = updatedShoppingCartItems.filter(item => item.sku !== product.sku);
            // if (product.variants[variantIndex].sku in updatedShoppingCartItems) {
            //     delete updatedShoppingCartItems[product.variants[variantIndex].sku];
            //     updatedShoppingCart.items = updatedShoppingCartItems; 
            //     updatedShoppingCart.subTotal = +Object.values(updatedShoppingCartItems).reduce((acc, item) => acc + item.totalPrice, 0).toFixed(2);
            // }
            updatedShoppingCart.items = updatedShoppingCartItems;
            return updatedShoppingCart;
        })
    };

    return (
        <button title="Remove product from cart" className="m-1 bg-gray-300 dark:bg-gray-700 px-2 py-1 cursor-pointer hover:bg-gray-900 hover:text-gray-100 dark:hover:bg-gray-100 dark:hover:text-gray-900 transition-all" onClick={handleRemoveFromCart}>
            <ShoppingCartLessFilled/> <span className="hidden md:inline">Remove from Cart</span>
        </button>
    )
}