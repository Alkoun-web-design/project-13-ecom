export type Variants = {    
    color: string,
    images: {
        src: string [],
        alt: string
    },
    sizes: Sizes[],
    fits: Fits[],
    sku: string,
    stock: number
}

function createSlug(name: string) {
    const lowercaseName = name.toLowerCase()
    return lowercaseName.replace(" ", "-")
}

function createAltText(name: string) {
    return `${name} image`
}

function assignCategory(name: string) {
    if (name.toLowerCase().includes("suit")) {
        return "Suits"
    } else if (name.toLowerCase().includes("coat")) {
        return "Coats"
    } else if (name.toLowerCase().includes("pants")) {
        return "Pants"
    } else if (name.toLowerCase().includes("shirts")) {
        return "Shirts"
    }
}




export type Fits = 'Slim'|'Regular'|'Oversized'|'Relaxed'

export type Images = {
    src: string[],
    altText: string,
}

export type Sizes = 'XXS' | 'XS' | 'S' | 'M' | 'L' | 'XL' | '2XL' | '3XL' | '4XL'
    | '28' | '30' | '32' | '34' | '36' | '38' | '40';

export type SizeGuide = {
    measurements: {
        size: string,
        chest: number,
        waist: number,
        hips: number,
        length: number
    },
    description: string
}

export type ClothProduct = {
    id: string, 
    name: string,
    slug: string, 
    description: string,
    // sku: string,
    costPerItem: number,
    price: number, 
    gender: 'Men'|'Women'|'Unisex'|'Kids',
    variants: Variants[],
    // images: Images[],
    // colors: string[],
    material: string,
    careInstructions: string[],
    // sizes: Sizes[][],
    // variants?: Variant[], 
    // quantity: number,
    category: string,
    discount: number,
    dateAdded: string
}

export type Product = {
    id: string, 
    name: string, 
    description: string, 
    price: number, 
    image: string[],
    sizes: string[],
    colors: string[],
    variants?: Variants[], 
    quantity: number,
    category: string,
    discount: number,
    dateAdded: string
}

export type Colors = ["Black", "White", "Red", "Blue", "Green", "Yellow", "Orange", "Purple", "Pink", "Brown", "Gray", "Silver", "Gold", "Beige", "Copper", "Crimson", "Magenta", "Navy", "Olive", "Teal", "Violet", "Aqua", "Azure", "Bronze"]

export const colors:Colors = ["Black", "White", "Red", "Blue", "Green", "Yellow", "Orange", "Purple", "Pink", "Brown", "Gray", "Silver", "Gold", "Beige", "Copper", "Crimson", "Magenta", "Navy", "Olive", "Teal", "Violet", "Aqua", "Azure", "Bronze"]

export type TechProduct = {
    id: string, 
    name: string, 
    description: string, 
    price: number, 
    image: string,
    variants?: Variants[], 
    quantity: number,
    category: string,
    discount: number,
    dateAdded: string
}

export type Category = "Suits" | "Shirts" | "Pants" | "Coats";

export const categories: Category[]= [ "Suits","Shirts","Pants","Coats" ]

// Add comments and ratings, shirt sizes and pants sizes, 

export const products:ClothProduct[] = [
    {
        "id": "0",
        "name": "Formal Suit",
        "description": "Finest Material.",
        "slug": "cotton-suit",
        "costPerItem": 7.00,
        "price": 10.99,
        "variants": [
            {
                "color": "Navy",
                "images": {"src": ["/na-su.jpg", "/na-su.jpg", "/na-su.jpg"], "alt":"navy suit"},
                "sizes" : ["M", "L", "XL"],
                "fits": ["Regular"],
                "stock": 50,
                "sku": "1111"
            },
            {
                "color": "Black",
                "images": {"src": ["/bl-su.jpg", "/bl-su.jpg", "/bl-su.jpg"], "alt":"black suit"},
                "sizes" : ["XS", "S", "M", "L", "XL", "2XL"],
                "fits": ["Slim"],
                "stock": 50,
                "sku": "1112"
            }
        ],
        "gender": "Men",
        "material": "Cotton",
        "careInstructions": ["Machine Wash", "Cool Dry"],
        "category": "Suits",
        "discount": 24,
        "dateAdded": "2023-01-01"
    },
    {
        "id": "1",
        "name": "Formal Shirt",
        "description": "Finest Material.",
        "slug": "formal-shirt",
        "costPerItem": 7.00,
        "price": 10.99,
        "variants": [
            {
                "color": "Black",
                "images": {"src": ["/bl-sh.jpg", "/bl-sh.jpg", "/bl-sh.jpg"], "alt":"black shirt"},
                "sizes" : ["XS", "S", "M", "L"],
                "fits": ["Regular"],
                "stock": 50,
                "sku": "1113"
            },
            {
                "color": "White",
                "images": {"src": ["/wh-sh.jpg", "/wh-sh.jpg", "/wh-sh.jpg"], "alt":"white shirt"},
                "sizes" : ["XS", "S", "M", "L", "XL", "2XL"],
                "fits": ["Regular"],
                "stock": 50,
                "sku": "1114"
            }
        ],
        "gender": "Men",
        "material": "Cotton",
        "careInstructions": ["Machine Wash"],
        "category": "Shirts",
        "discount": 0,
        "dateAdded": "2023-01-01"
    },
    {
        "id": "2",
        "name": "Cotton Pants",
        "description": "Finest Material.",
        "slug": "cotton-pants",
        "costPerItem": 9.00,
        "price": 14.50,
        "variants": [
            {
                "color": "Black",
                "images": {"src": ["/bl-pa.jpg", "/bl-pa.jpg", "/bl-pa.jpg"], "alt":"black pants"},
                "sizes" : ["XS", "S", "M", "L", "XL", "2XL"],
                "fits": ["Regular"],
                "stock": 50,
                "sku": "1115"
            },
            {
                "color": "Beige",
                "images": {"src": ["/be-pa.jpg", "/be-pa.jpg", "/be-pa.jpg"], "alt":"beige pants"},
                "sizes" : ["M", "L", "XL", "2XL"],
                "fits": ["Regular"],
                "stock": 50,
                "sku": "1116"
            }
        ],
        "gender": "Men",
        "material": "Cotton",
        "careInstructions": ["Machine Wash"],
        "category": "Pants",
        "discount": 0,
        "dateAdded": "2023-01-01"
    },
    {
        "id": "3",
        "name": "Seawater Coat",
        "description": "Finest Material.",
        "slug": "seawater-coat",
        "costPerItem": 9.00,
        "price": 16.50,
        "variants": [
            {
                "color": "Black",
                "images": {"src": ["/bl-co.jpg", "/bl-co.jpg", "/bl-co.jpg"], "alt":"black coat"},
                "sizes" : ["XS", "S", "M", "L", "XL", "2XL"],
                "fits": ["Regular"],
                "stock": 0,
                "sku": "1117"
            },
            {
                "color": "Beige",
                "images": {"src": ["/be-co.jpg", "/be-co.jpg", "/be-co.jpg"], "alt":"beige coat"},
                "sizes" : ["M", "L", "XL", "2XL"],
                "fits": ["Regular"],
                "stock": 50,
                "sku": "1118"
            }
        ],
        "gender": "Men",
        "material": "Cotton",
        "careInstructions": ["Machine Wash"],
        "category": "Coats",
        "discount": 5,
        "dateAdded": "2023-01-01"
    },
    {
        "id": "4",
        "name": "Dark Green Coat",
        "description": "Finest Material.",
        "slug": "dark-green-coat",
        "costPerItem": 9.00,
        "price": 16.50,
        "variants": [
            {
                "color": "Green",
                "images": {"src": ["/gre-su.jpg", "/gre-su.jpg", "/gre-su.jpg"], "alt":"dark green coat"},
                "sizes" : ["XS", "S", "M", "L", "XL", "2XL"],
                "fits": ["Regular"],
                "stock": 10,
                "sku": "1119"
            },
        ],
        "gender": "Men",
        "material": "Cotton",
        "careInstructions": ["Machine Wash"],
        "category": "Coats",
        "discount": 5,
        "dateAdded": "2023-01-26"
    },
    {
        "id": "5",
        "name": "Blue formal shirt",
        "description": "Finest Material.",
        "slug": "blue-formal-shirt",
        "costPerItem": 9.00,
        "price": 16.50,
        "variants": [
            {
                "color": "Blue",
                "images": {"src": ["/blu-sh.jpg", "/blu-sh.jpg", "/blu-sh.jpg"], "alt":"blue formal shirt"},
                "sizes" : ["XS", "S", "M", "L", "XL", "2XL"],
                "fits": ["Regular"],
                "stock": 10,
                "sku": "1120"
            },
        ],
        "gender": "Men",
        "material": "Cotton",
        "careInstructions": ["Machine Wash"],
        "category": "Shirts",
        "discount": 5,
        "dateAdded": "2023-01-26"
    },
    {
        "id": "6",
        "name": "Rose Suit",
        "description": "Finest Material.",
        "slug": "rose-suit",
        "costPerItem": 9.00,
        "price": 16.50,
        "variants": [
            {
                "color": "Red",
                "images": {"src": ["/ro-su.jpg", "/ro-su.jpg", "/ro-su.jpg"], "alt":"rose suit"},
                "sizes" : ["XS", "S", "M", "L", "XL", "2XL"],
                "fits": ["Regular"],
                "stock": 10,
                "sku": "1121"
            },
        ],
        "gender": "Women",
        "material": "Cotton",
        "careInstructions": ["Machine Wash"],
        "category": "Suits",
        "discount": 5,
        "dateAdded": "2023-01-26"
    },
    {
        "id": "7",
        "name": "White Pants",
        "description": "Finest Material.",
        "slug": "white-pants",
        "costPerItem": 9.00,
        "price": 16.50,
        "variants": [
            {
                "color": "White",
                "images": {"src": ["/wh-pa.jpg", "/wh-pa.jpg", "/wh-pa.jpg"], "alt":"white pants"},
                "sizes" : ["XS", "S", "M", "L", "XL", "2XL"],
                "fits": ["Regular"],
                "stock": 10,
                "sku": "1122"
            },
        ],
        "gender": "Women",
        "material": "Cotton",
        "careInstructions": ["Machine Wash"],
        "category": "Pants",
        "discount": 5,
        "dateAdded": "2023-01-26"
    },
    {
        "id": "8",
        "name": "Green Pants",
        "description": "Finest Material.",
        "slug": "green-pants",
        "costPerItem": 9.00,
        "price": 16.50,
        "variants": [
            {
                "color": "Green",
                "images": {"src": ["/gre-pa.jpg", "/gre-pa.jpg", "/gre-pa.jpg"], "alt":"green pants"},
                "sizes" : ["XS", "S", "M", "L", "XL", "2XL"],
                "fits": ["Regular"],
                "stock": 10,
                "sku": "1123"
            },
        ],
        "gender": "Women",
        "material": "Cotton",
        "careInstructions": ["Machine Wash"],
        "category": "Pants",
        "discount": 5,
        "dateAdded": "2023-01-26"
    },
    {
        "id": "9",
        "name": "Steel Suit",
        "description": "Finest Material.",
        "slug": "steel-suits",
        "costPerItem": 9.00,
        "price": 16.50,
        "variants": [
            {
                "color": "Gray",
                "images": {"src": ["/st-su.jpg", "/st-su.jpg", "/st-su.jpg"], "alt":"steel suit"},
                "sizes" : ["XS", "S", "M", "L", "XL", "2XL"],
                "fits": ["Regular"],
                "stock": 10,
                "sku": "1124"
            },
        ],
        "gender": "Men",
        "material": "Cotton",
        "careInstructions": ["Machine Wash"],
        "category": "Suits",
        "discount": 5,
        "dateAdded": "2023-01-26"
    },
    {
        "id": "10",
        "name": "Steel Shirt",
        "description": "Finest Material.",
        "slug": "steel-shirt",
        "costPerItem": 9.00,
        "price": 16.50,
        "variants": [
            {
                "color": "Gray",
                "images": {"src": ["/st-sh.jpg", "/st-sh.jpg", "/st-sh.jpg"], "alt":"steel shirt"},
                "sizes" : ["XS", "S", "M", "L", "XL", "2XL"],
                "fits": ["Regular"],
                "stock": 10,
                "sku": "1124"
            },
        ],
        "gender": "Men",
        "material": "Cotton",
        "careInstructions": ["Machine Wash"],
        "category": "Shirts",
        "discount": 5,
        "dateAdded": "2023-01-26"
    },
    {
        "id": "11",
        "name": "Beige Suit",
        "description": "Finest Material.",
        "slug": "beige-suit",
        "costPerItem": 9.00,
        "price": 16.50,
        "variants": [
            {
                "color": "Beige",
                "images": {"src": ["/be-su.jpg", "/be-su.jpg", "/be-su.jpg"], "alt":"beige suit"},
                "sizes" : ["XS", "S", "M", "L", "XL", "2XL"],
                "fits": ["Regular"],
                "stock": 10,
                "sku": "1125"
            },
        ],
        "gender": "Men",
        "material": "Cotton",
        "careInstructions": ["Machine Wash"],
        "category": "Suits",
        "discount": 5,
        "dateAdded": "2023-01-26"
    },
    {
        "id": "12",
        "name": "Blue Suit",
        "description": "Finest Material.",
        "slug": "blue-suit",
        "costPerItem": 9.00,
        "price": 16.50,
        "variants": [
            {
                "color": "Blue",
                "images": {"src": ["/blu-su.jpg", "/blu-su.jpg", "/blu-su.jpg"], "alt":"blue suit"},
                "sizes" : ["XS", "S", "M", "L", "XL", "2XL"],
                "fits": ["Regular"],
                "stock": 10,
                "sku": "1126"
            },
        ],
        "gender": "Men",
        "material": "Cotton",
        "careInstructions": ["Machine Wash"],
        "category": "Suits",
        "discount": 5,
        "dateAdded": "2023-01-26"
    },
    {
        "id": "13",
        "name": "Mustard Coat",
        "description": "Finest Material.",
        "slug": "mustard-coat",
        "costPerItem": 9.00,
        "price": 16.50,
        "variants": [
            {
                "color": "Yellow",
                "images": {"src": ["/mu-co.jpg", "/mu-co.jpg", "/mu-co.jpg"], "alt":"mustard coat"},
                "sizes" : ["XS", "S", "M", "L", "XL", "2XL"],
                "fits": ["Regular"],
                "stock": 10,
                "sku": "1127"
            },
        ],
        "gender": "Men",
        "material": "Cotton",
        "careInstructions": ["Machine Wash"],
        "category": "Coats",
        "discount": 5,
        "dateAdded": "2023-01-26"
    },
    {
        "id": "14",
        "name": "Gray Coat",
        "description": "Finest Material.",
        "slug": "gray-coat",
        "costPerItem": 9.00,
        "price": 16.50,
        "variants": [
            {
                "color": "Gray",
                "images": {"src": ["/gr-co.jpg", "/gr-co.jpg", "/gr-co.jpg"], "alt":"gray coat"},
                "sizes" : ["XS", "S", "M", "L", "XL", "2XL"],
                "fits": ["Regular"],
                "stock": 10,
                "sku": "1128"
            },
        ],
        "gender": "Men",
        "material": "Cotton",
        "careInstructions": ["Machine Wash"],
        "category": "Coats",
        "discount": 5,
        "dateAdded": "2023-01-26"
    },
    {
        "id": "16",
        "name": "Green Suit",
        "description": "Finest Material.",
        "slug": "green-suits",
        "costPerItem": 9.00,
        "price": 16.50,
        "variants": [
            {
                "color": "Green",
                "images": {"src": ["/gre-su.jpg", "/gre-su.jpg", "/gre-su.jpg"], "alt":"green suit"},
                "sizes" : ["XS", "S", "M", "L", "XL", "2XL"],
                "fits": ["Regular"],
                "stock": 10,
                "sku": "1129"
            },
        ],
        "gender": "Men",
        "material": "Cotton",
        "careInstructions": ["Machine Wash"],
        "category": "Suits",
        "discount": 5,
        "dateAdded": "2023-01-26"
    },
    {
        "id": "17",
        "name": "Yellow Pants",
        "description": "Finest Material.",
        "slug": "yellow-pants",
        "costPerItem": 9.00,
        "price": 16.50,
        "variants": [
            {
                "color": "Yellow",
                "images": {"src": ["/ye-pa.jpg", "/ye-pa.jpg", "/ye-pa.jpg"], "alt":"yellow pants"},
                "sizes" : ["XS", "S", "M", "L", "XL", "2XL"],
                "fits": ["Regular"],
                "stock": 10,
                "sku": "1130"
            },
        ],
        "gender": "Men",
        "material": "Cotton",
        "careInstructions": ["Machine Wash"],
        "category": "Pants",
        "discount": 5,
        "dateAdded": "2023-01-26"
    },
    {
        "id": "18",
        "name": "Blue Pants",
        "description": "Finest Material.",
        "slug": "blue-pants",
        "costPerItem": 9.00,
        "price": 16.50,
        "variants": [
            {
                "color": "Blue",
                "images": {"src": ["/blu-pa.jpg", "/blu-pa.jpg", "/blu-pa.jpg"], "alt":"blue pants"},
                "sizes" : ["XS", "S", "M", "L", "XL", "2XL"],
                "fits": ["Regular"],
                "stock": 10,
                "sku": "1131"
            },
        ],
        "gender": "Men",
        "material": "Cotton",
        "careInstructions": ["Machine Wash"],
        "category": "Pants",
        "discount": 5,
        "dateAdded": "2023-01-26"
    },
    
];

// export let products:ClothProduct[] = [
//     {
//         "id": "0",
//         "name": "Formal Suit",
//         "description": "Finest Material.",
//         "slug": "cotton-suit",
//         "costPerItem": 7.00,
//         "price": 10.99,
//         "images": [
//             {"src": ["/suit-bg.jpg", "/suit-bg.jpg", "/suit-bg.jpg"], "altText":"suit"},
//             {"src": ["/suit-bg.jpg", "/suit-bg.jpg", "/suit-bg.jpg"], "altText":"suit"},
//         ],
//         "gender": "Men",
//         "sku": "1312",
//         "fit": "Regular",
//         "material": "Cotton",
//         "careInstructions": ["Machine Wash"],
//         "sizes": [
//             ["M", "L", "XL"],
//             ["XS", "S", "M", "L", "XL", "2XL"]
//         ],
//         "colors": ["Navy", "Black"],        
//         "quantity": 200,
//         "category": "Suits",
//         "discount": 24,
//         "dateAdded": "2023-01-01"
//     },
//     {
//         "id": "1",
//         "name": "Formal Shirt",
//         "description": "Finest Material.",
//         "slug": "formal-shirt",
//         "costPerItem": 7.00,
//         "price": 10.99,
//         "images": [
//             {"src": ["/suit-bg.jpg", "/suit-bg.jpg", "/suit-bg.jpg"], "altText":"suit"},
//             {"src": ["/suit-bg.jpg", "/suit-bg.jpg", "/suit-bg.jpg"], "altText":"suit"},
//         ],
//         "gender": "Men",
//         "sku": "1313",
//         "fit": "Regular",
//         "material": "Cotton",
//         "careInstructions": ["Machine Wash"],
//         "sizes": [
//             ["XS", "S", "M", "L", "XL", "2XL"],
//             ["XS", "S", "M", "L"]
//         ],
//         "colors": ["Navy", "Black"],        
//         "quantity": 200,
//         "category": "Shirts",
//         "discount": 0,
//         "dateAdded": "2023-01-01"
//     },
//     {
//         "id": "2",
//         "name": "Cotton Pants",
//         "description": "Finest Material.",
//         "slug": "cotton-pants",
//         "costPerItem": 9.00,
//         "price": 14.50,
//         "images": [
//             {"src": ["/suit-bg.jpg", "/suit-bg.jpg", "/suit-bg.jpg"], "altText":"suit"},
//             {"src": ["/suit-bg.jpg", "/suit-bg.jpg", "/suit-bg.jpg"], "altText":"suit"}
//         ],
//         "gender": "Men",
//         "sku": "1315",
//         "fit": "Regular",
//         "material": "Cotton",
//         "careInstructions": ["Machine Wash"],
//         "sizes": [
//             ["XS", "S", "M", "L", "XL", "2XL"],
//             ["M", "L", "XL", "2XL"]
//         ],
//         "colors": ["Beige", "Brown"],        
//         "quantity": 200,
//         "category": "Pants",
//         "discount": 0,
//         "dateAdded": "2023-01-01"
//     },
//     {
//         "id": "3",
//         "name": "Seawater Coat",
//         "description": "Finest Material.",
//         "slug": "seawater-coat",
//         "costPerItem": 9.00,
//         "price": 16.50,
//         "images": [
//             {"src": ["/suit-bg.jpg", "/suit-bg.jpg", "/suit-bg.jpg"], "altText":"suit"},
//             {"src": ["/suit-bg.jpg", "/suit-bg.jpg", "/suit-bg.jpg"], "altText":"suit"}
//         ],
//         "gender": "Men",
//         "sku": "1312",
//         "fit": "Regular",
//         "material": "Cotton",
//         "careInstructions": ["Machine Wash"],
//         "sizes": [["XS", "S", "M", "L", "XL", "2XL"]],
//         "colors": ["Navy", "Green"],        
//         "quantity": 200,
//         "category": "Coats",
//         "discount": 5,
//         "dateAdded": "2023-01-01"
//     },
// ];

export const initialClothproducts:Product[] = [
    {
        "id": "0",
        "name": "Formal Navy Suit",
        "description": "Finest Material.",
        "price": 10.99,
        "image": ["/suit-bg.jpg"],
        "sizes": ["XS", "S", "M", "L", "XL", "2XL"],
        "colors": ["Navy", "Black"],        
        "quantity": 200,
        "category": "Suits",
        "discount": 24,
        "dateAdded": "2023-01-01"
    },
    {
        "id": "1",
        "name": "Linen Pants",
        "description": "Bespoke Linen Pants.",
        "price": 19.99,
        "image": ["/suit-bg.jpg"],
        "sizes": ["XS", "S", "M", "L", "XL", "2XL"],
        "colors": ["Beige", "Brown"],
        "quantity": 5,
        "category": "Pants",
        "discount": 0,
        "dateAdded": "2023-01-01"
    },
    {
        "id": "2",
        "name": "White Solid Shirt",
        "description": "Crisp, white, formal shirt",
        "price": 8.5,
        "image": ["/suit-bg.jpg"],
        "sizes": ["XS", "S", "M", "L", "XL", "2XL"],
        "colors": ["White", "Black"],
        "quantity": 0,
        "category": "Shirts",
        "discount": 5,
        "dateAdded": "2023-01-01"
    },
    {
        "id": "3",
        "name": "Cotton Coat",
        "description": "Stylish and lightweight",
        "price": 10,
        "image": ["/suit-bg.jpg"],
        "sizes": ["XS", "S", "M", "L", "XL", "2XL"],
        "colors": ["Navy", "Green"],
        "quantity": 2,
        "category": "Coats",
        "discount": 0,
        "dateAdded": "2023-01-01"
    }
];

export const techProducts:TechProduct[] = [
    {
        "id": "0",
        "name": "Apple iPhone 16 Pro",
        "description": "This is the latest Iphone.",
        "price": 10.99,
        "image": "/suit-bg.jpg",
        "variants": [], 
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
        "image": "/suit-bg.jpg",
        "variants": [], 
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
        "image": "/suit-bg.jpg",
        "variants": [],
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
        "image": "/suit-bg.jpg",
        "variants": [],
        "quantity": 2,
        "category": "accessories",
        "discount": 0,
        "dateAdded": "2023-01-01"
    }
];