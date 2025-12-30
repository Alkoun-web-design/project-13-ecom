import {products} from "../lib/products"
import React from "react"
import AddToCartButton from "./AddToCartButton";

export default async function Page({params}: { params: Promise<{ productId: number }>}) {
    
    const productId:number = (await params).productId
    
    return (
        <div>
            <h1>Product Details {productId}</h1>
            <ul>
                <li>Product ID: {products[productId].id}</li>
                <li>Nmae: {products[productId].name}</li>
                <li>Price: {products[productId].price}</li>
                <li>Description: {products[productId].description}</li>
            </ul>
            <AddToCartButton product={products[productId]}/>
        </div>
    )
}