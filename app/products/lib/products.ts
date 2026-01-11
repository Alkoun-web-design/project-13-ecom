export type Variant = {
    variantName: string,
    variantImage: string,
    variantPrice: number,
    variantQuantity: number
}

export type Product = {
    id: string, 
    name: string, 
    description: string, 
    price: number, 
    image: string,
    variants?: Variant[], 
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
        "variants": [
            {"variantName": "Lunar White 64GB", "variantImage": "/", "variantPrice": 10.99, "variantQuantity": 40 },
            {"variantName": "Lunar White 128GB", "variantImage": "/", "variantPrice": 12.99, "variantQuantity": 40 },
            {"variantName": "Lunar White 256GB", "variantImage": "/", "variantPrice": 14.99, "variantQuantity": 40 },
        ], 
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
        "variants": [
            {"variantName": "HDD 512GB, RAM 32GB", "variantImage": "/", "variantPrice": 20.99, "variantQuantity": 40 },
            {"variantName": "HDD 1TB, RAM 32GB", "variantImage": "/", "variantPrice": 24, "variantQuantity": 40 },
            {"variantName": "HDD 2TB, RAM 32GB", "variantImage": "/", "variantPrice": 30.99, "variantQuantity": 40 },
        ], 
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
        "variants": [            
            {"variantName": "Lunar White", "variantImage": "/", "variantPrice": 8.5, "variantQuantity": 0 },
            {"variantName": "Coal Black", "variantImage": "/", "variantPrice": 8.5, "variantQuantity": 0 },
        ],
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
        "variants": [            
            {"variantName": "Lunar White", "variantImage": "/", "variantPrice": 10, "variantQuantity": 1 },
            {"variantName": "Coal Black", "variantImage": "/", "variantPrice": 10, "variantQuantity": 1 },
        ],
        "quantity": 2,
        "category": "accessories",
        "discount": 0,
        "dateAdded": "2023-01-01"
    }
];