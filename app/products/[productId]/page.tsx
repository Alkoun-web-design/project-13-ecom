import {products} from "../lib/products"
import AddToCartButton from "../../../components/AddToCartButton";;

export default async function Page({params}: { params: Promise<{ productId: number }>}) {

    const productId:number = (await params).productId
    
    return (
        <div>
            <h1>Product Details {productId}</h1>
            <ul>
                <li>Product ID: {products[productId].id}</li>
                <li>Nmae: {products[productId].name}</li>
                {products[productId].discount > 0 ? 
                    <li>Price: <span className='line-through'> {products[productId].price}</span> {+((products[productId].price - ((products[productId].price * products[productId].discount) / 100))).toFixed(2)}</li> 
                    : <li>Price: {products[productId].price}</li>
                }
                <li>Description: {products[productId].description}</li>
            </ul>
            <AddToCartButton product={products[productId]}/>
        </div>
    )
}