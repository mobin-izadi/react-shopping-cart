import React, { Component } from 'react'
import Header from './Header/Header'
import Product from './Product/Product'
import CartItem from './CartItem/CartItem'
export class ShoppingCart extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: [
                {
                    id: 1,
                    title: "Men's Casual Shirt",
                    color: ["Blue", "Black", "White"],
                    description: "A comfortable, casual shirt made from 100% cotton, perfect for everyday wear.",
                    quantity: 10,
                    price: 29.99,
                    size: ["S", "M", "L", "XL"],
                    img: 'images/products/1.jpg'
                },
                {
                    id: 2,
                    title: "Women's Summer Dress",
                    color: ["Red", "Pink", "Yellow"],
                    description: "A stylish summer dress, lightweight and breathable for hot weather.",
                    quantity: 5,
                    price: 45.99,
                    size: ["S", "M", "L"],
                    img: 'images/products/2.jpg'
                },
                {
                    id: 3,
                    title: "Unisex Hoodie",
                    color: ["Black", "Gray", "Navy"],
                    description: "A cozy hoodie with a front pocket, ideal for both men and women.",
                    quantity: 8,
                    price: 39.99,
                    size: ["M", "L", "XL"],
                    img: 'images/products/3.jpg'
                },
                {
                    id: 4,
                    title: "Kids' T-Shirt",
                    color: ["Yellow", "Blue", "Green"],
                    description: "Soft and durable t-shirt for kids, suitable for everyday play.",
                    quantity: 12,
                    price: 15.99,
                    size: ["XS", "S", "M"],
                    img: 'images/products/4.jpg'
                },
                {
                    id: 5,
                    title: "Men's Jeans",
                    color: ["Dark Blue", "Light Blue", "Black"],
                    description: "Classic fit jeans with a comfortable stretch, ideal for casual outings.",
                    quantity: 7,
                    price: 49.99,
                    size: ["32", "34", "36", "38"],
                    img: 'images/products/5.jpg'
                },
                {
                    id: 6,
                    title: "Women's Jacket",
                    color: ["Green", "Black", "Gray"],
                    description: "A waterproof, lightweight jacket for rainy days.",
                    quantity: 4,
                    price: 59.99,
                    size: ["S", "M", "L", "XL"],
                    img: 'images/products/6.jpg'
                },
                {
                    id: 7,
                    title: "Men's Running Shoes",
                    color: ["White", "Black", "Gray"],
                    description: "Lightweight running shoes designed for comfort and performance.",
                    quantity: 15,
                    price: 89.99,
                    size: ["40", "42", "44", "46"],
                    img: 'images/products/7.jpg'
                },
                {
                    id: 8,
                    title: "Women's Scarf",
                    color: ["Purple", "Red", "Blue"],
                    description: "A stylish, soft scarf made from premium materials, perfect for cold weather.",
                    quantity: 20,
                    price: 19.99,
                    size: ["One Size"],
                    img: 'images/products/8.jpg'
                }
            ],
            cart: []
        };

        this.addCart = this.addCart.bind(this)
        this.updateCart = this.updateCart.bind(this)
        this.removeProductFromCart = this.removeProductFromCart.bind(this)


    }

    removeProductFromCart(id) {
        this.setState(preState => ({
            cart: preState.cart.filter(product => product.id != id)
        }))
    }
    addCart(id, color, size) {
        let productInCart = this.state.cart.find(product => product.id == id)
        if (productInCart) {
            let newCount = productInCart.count + 1
            this.updateCart(newCount, id)
        } else {
            let findProduct = this.state.products.filter(product => product.id == id)

            let newProductCart = { ...findProduct[0], color, size, count: 1 }

            this.setState(preState => ({
                cart: [...preState.cart, newProductCart]
            }))
        }


    }
    updateCart(newCount, id) {

        this.setState(preState => ({
            cart: preState.cart.map(product => {
                if (product.id == id) {
                    let updateProduct = { ...product, count: newCount }
                    return updateProduct
                } else {
                    return product
                }
            })
        }))

    }
    render() {
        return (
            <>
                <Header></Header>
                <main className='my-8'>
                    <div className="container">
                        {/* product wrapper */}
                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                            {this.state.products.length > 0 && this.state.products.map(product => (<Product key={product.id} {...product} onAddCart={this.addCart}></Product>))}
                        </div>
                        <div className='grid grid-cols-12 gap-4 my-16'>
                            {/* left */}
                            <div className='col-span-12 lg:col-span-8'>
                                {/* order */}
                                <div>
                                    <h4 className='text-3xl mb-3'>Order</h4>
                                    <div className='bg-white rounded-lg min-h-40  p-3 space-y-2'>
                                        {this.state.cart.length > 0 ? (this.state.cart.map(product => <CartItem key={product.id} {...product} onUpdateCart={this.updateCart} onRemove={this.removeProductFromCart} ></CartItem>)) : (<p className='text-center'>You have not added a product yet.</p>)}

                                    </div>

                                </div>
                                {/* delivery */}
                                <div className='my-16'>
                                    <h4 className='text-3xl mb-3'>Delivery</h4>
                                    <div className='gird grid-cols-4 p-3 '>

                                    </div>

                                </div>
                            </div>
                            {/* right */}
                            <div className='col-span-4'>

                            </div>
                        </div>

                    </div>
                </main>
            </>
        )
    }
}

export default ShoppingCart