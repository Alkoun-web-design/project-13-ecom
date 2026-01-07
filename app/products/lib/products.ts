export type Product = {
    id: string, 
    name: string, 
    description: string, 
    price: number, 
    image: string, 
    quantity: number,
    category: string,
    discount: number,
    dateAdded: string
}

export let products:Product[] = [
    {
        "id": "0",
        "name": "Apple iPhone 16 Pro",
        "description": "This is the latest Iphone.",
        "price": 10.99,
        "image": "https://via.placeholder.com/150",
        "quantity": 200,
        "category": "smartphones",
        "discount": 24,
        "dateAdded": "2023-01-01"
    },
    {
        "id": "1",
        "name": "Apple Macbook Pro",
        "description": "The most powerful Macbook ever.",
        "price": 19.99,
        "image": "https://via.placeholder.com/150",
        "quantity": 5,
        "category": "laptops",
        "discount": 0,
        "dateAdded": "2023-01-01"
    },
    {
        "id": "2",
        "name": "Apple Earpods",
        "description": "Pristine music and sound.",
        "price": 8.5,
        "image": "https://via.placeholder.com/150",
        "quantity": 0,
        "category": "earphones",
        "discount": 5,
        "dateAdded": "2023-01-01"
    },
    {
        "id": "3",
        "name": "Apple Airtags",
        "description": "Find anything, anytime.",
        "price": 10,
        "image": "https://via.placeholder.com/150",
        "quantity": 2,
        "category": "accessories",
        "discount": 0,
        "dateAdded": "2023-01-01"
    }
];