import React, { Component } from 'react'
import Header from './Header/Header'
import Product from './Product/Product'
export class ShoppingCart extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: [
                {
                    id: 1,
                    title: "Men's Casual Shirt",
                    color: "Blue",
                    description: "A comfortable, casual shirt made from 100% cotton, perfect for everyday wear.",
                    quantity: 10,
                    price: 29.99,
                    size: ["S", "M", "L", "XL"],
                    img: 'images/products/1.jpg'
                },
                {
                    id: 2,
                    title: "Women's Summer Dress",
                    color: "Red",
                    description: "A stylish summer dress, lightweight and breathable for hot weather.",
                    quantity: 5,
                    price: 45.99,
                    size: ["S", "M", "L"],
                    img: 'images/products/2.jpg'
                },
                {
                    id: 3,
                    title: "Unisex Hoodie",
                    color: "Black",
                    description: "A cozy hoodie with a front pocket, ideal for both men and women.",
                    quantity: 8,
                    price: 39.99,
                    size: ["M", "L", "XL"],
                    img: 'images/products/3.jpg'
                },
                {
                    id: 4,
                    title: "Kids' T-Shirt",
                    color: "Yellow",
                    description: "Soft and durable t-shirt for kids, suitable for everyday play.",
                    quantity: 12,
                    price: 15.99,
                    size: ["XS", "S", "M"],
                    img: 'images/products/4.jpg'
                },
                {
                    id: 5,
                    title: "Men's Jeans",
                    color: "Dark Blue",
                    description: "Classic fit jeans with a comfortable stretch, ideal for casual outings.",
                    quantity: 7,
                    price: 49.99,
                    size: ["32", "34", "36", "38"],
                    img: 'images/products/5.jpg'
                },
                {
                    id: 6,
                    title: "Women's Jacket",
                    color: "Green",
                    description: "A waterproof, lightweight jacket for rainy days.",
                    quantity: 4,
                    price: 59.99,
                    size: ["S", "M", "L", "XL"],
                    img: 'images/products/6.jpg'
                },
                {
                    id: 7,
                    title: "Men's Running Shoes",
                    color: "White",
                    description: "Lightweight running shoes designed for comfort and performance.",
                    quantity: 15,
                    price: 89.99,
                    size: ["40", "42", "44", "46"],
                    img: 'images/products/7.jpg'
                },
                {
                    id: 8,
                    title: "Women's Scarf",
                    color: "Purple",
                    description: "A stylish, soft scarf made from premium materials, perfect for cold weather.",
                    quantity: 20,
                    price: 19.99,
                    size: ["One Size"],
                    img: 'images/products/8.jpg'
                }
            ]
        };

    }
    render() {
        return (
            <>
                <Header></Header>
                <main className='my-8'>
                    <div className="container">
                        {/* product wrapper */}
                        <div className='grid grid-cols-4 gap-6'>
                            {this.state.products.length > 0 && this.state.products.map(product => (<Product key={product.id} {...product}></Product>))}
                        </div>
                    </div>
                </main>
            </>
        )
    }
}

export default ShoppingCart