'use client'

import React from 'react';
import { useShoppingCart } from '@/components/ShoppingCartProvider';
import Link from 'next/link';
import CardForm from '@/components/CardForm';

export default function Page() {

    const [customerDetails, setCustomerDetails] = React.useState<{name: string, email: string, phone: string, address: string}>({name: '', email: '', phone: '', address: ''});
    const [paymentType, setPaymentType] = React.useState<"Cash on Delivery" | "Credit Card" | "CryptoCurrency">("Credit Card");
    // const [cardDetails, setCardDetails] = React.useState<{cardNumber: string, expiryDate: string, cvv: string}>({cardNumber: '', expiryDate: '', cvv: ''});
    const {shoppingCart} = useShoppingCart();

    async function handleCustomerDetailsSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            await fetch('', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(customerDetails)
            })
        } catch (error) {
            console.error
        }   
    }

    React.useEffect(() => {
        // const timeOutFunction = setTimeout(() => {
        //     handleCustomerDetailsChange;
        // }, 2000);
        console.log(customerDetails)
        
        // return(() => clearTimeout(timeOutFunction));
    },[customerDetails])

    function handleCustomerDetailsChange(e:React.ChangeEvent<HTMLInputElement>):void {
        setCustomerDetails({...customerDetails, [e.target.name]: e.target.value})
    }

    return (
        <>
        {shoppingCart.items ? 
        <>
            <div className="m-4">
                <h1>Checkout Page</h1>

                <h2>Order Summary</h2>
                {Object.values(shoppingCart.items).map((item) => (
                    <ul className="m-4" key={item.name}>
                        <li>{item.name}</li>
                        <li>Unit Price: {item.unitPrice}</li>
                        <li>Quanitty: {item.quantityAdded}</li>
                        <li>Total Price: {item.totalPrice}</li>
                    </ul>
                ))}
                <div className="mx-4 my-2">SubTotal: {shoppingCart.subTotal}</div>
                <div className="mx-4 my-2">Delivery Charges: {shoppingCart.deliveryCharges}</div>
                <div className="mx-4 my-2">Total Price: {shoppingCart.subTotal - shoppingCart.deliveryCharges}</div>
            </div>
            <div className="m-4">
                <h2>Customer Details</h2>
                <form onSubmit={handleCustomerDetailsSubmit}>
                    <div>
                        <label htmlFor="name">Name: </label>
                        <input name="name" type="text" placeholder="Name" onChange={handleCustomerDetailsChange}/>
                        <label htmlFor="email">Email: </label>
                        <input name="email" type="email" placeholder="Email" onChange={handleCustomerDetailsChange}/>
                        <label htmlFor="phone">Phone: </label>
                        <input name="phone" type="tel" placeholder="Phone Number" onChange={handleCustomerDetailsChange}/>
                        <label htmlFor="address">Delivery Address: </label>
                        <input name="address" type="text" placeholder="Delivery Address" onChange={handleCustomerDetailsChange}/>
                    </div>
                    <button type="submit"></button>
                </form>
            </div>

            <div className="m-4">
                <h2>Choose your payment method:</h2>
                <label htmlFor="cash-on-delivery">Cash On Delivery</label>
                <input type="radio" name="payment-type" onChange={() => setPaymentType("Cash on Delivery")}/>
                <label htmlFor="credit-card">Credit Card</label>
                <input type="radio" name="payment-type" onChange={() => setPaymentType("Credit Card")}/>
                <label htmlFor="cryptocurrency">CryptoCurrency</label>
                <input type="radio" name="payment-type" onChange={() => setPaymentType("CryptoCurrency")}/>
            </div>
            
            <div className="m-4">      
                {paymentType === 'Cash on Delivery' && <h2>Cash on Delivery</h2>}
                {paymentType === 'Credit Card' && <CardForm />}
                {paymentType === 'CryptoCurrency' &&  <h2>Crypto Payment</h2>}
            </div>
        </>
        : 
            <div className="m-4">
                <p>Your Shopping Cart is empty.</p>
                <Link href="/">Return to Home</Link>
                <Link href="/products">Return to Products</Link>
            </div>
        }

        </>
    );
}