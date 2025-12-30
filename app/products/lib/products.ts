// interface Product {
//     id: string,
//     name: string,
//     description: string,
//     price: number,
//     image: string
// }

export type Product = {
    id: string, 
    name: string, 
    description: string, 
    price: number, 
    image: string, 
    quantity: number
}

export let products:Product[] = [
    {
        "id": "0",
        "name": "Apple Iphone 16",
        "description": "This is the latest Iphone.",
        "price": 10.99,
        "image": "https://via.placeholder.com/150",
        "quantity": 200
    },
    {
        "id": "1",
        "name": "Apple Macbook Pro",
        "description": "The most powerful Macbook ever.",
        "price": 19.99,
        "image": "https://via.placeholder.com/150",
        "quantity": 5
    }
];