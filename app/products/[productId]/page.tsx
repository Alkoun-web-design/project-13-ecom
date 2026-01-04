import {products} from "../lib/products"
import React from "react"
import AddToCartButton from "../../../components/AddToCartButton";;

export default async function Page({params}: { params: Promise<{ productId: number }>}) {

    const productId:number = (await params).productId

    // document.title = 'Shopping Website | ', `${products[productId].name} `, '|', `${products[productId].description}`;

    // document.title = `${products[productId].name}`;
    
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