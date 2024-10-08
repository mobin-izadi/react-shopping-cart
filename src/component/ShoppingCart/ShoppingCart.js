import React, { Component } from 'react'
import Header from './Header/Header'
import Product from './Product/Product'
import CartItem from './CartItem/CartItem'
import DeliveryItem from './DeliveryItem/DeliveryItem'
import PaymentSummary from './PaymentSummary/PaymentSummary'
import { FaTrashAlt } from "react-icons/fa";
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
            cart: [],
            delivery: [
                {
                    id: 1,
                    img: 'images/delivery/1.jpg',
                    title: 'Uber Eats',
                    caption: 'Fast and reliable food delivery.',
                    price: 3.99,
                    selected: false
                },
                {
                    id: 2,
                    img: 'images/delivery/2.jpg',
                    title: 'DoorDash',
                    caption: 'Get your favorite meals delivered.',
                    price: 4.99,
                    selected: false
                },
                {
                    id: 3,
                    img: 'images/delivery/3.jpg',
                    title: 'Grubhub',
                    caption: 'Order food from local restaurants.',
                    price: 2.99,
                    selected: false
                },
                {
                    id: 4,
                    img: 'images/delivery/4.jpg',
                    title: 'Postmates',
                    caption: 'Anything you need, delivered.',
                    price: 5.49,
                    selected: false
                }
            ],
            chooseDelivery: null,
            note: 'If you want to write additional explanations about orders, write in this section',
            totalProductsInCart: 0,
            deliveryFee: 0,
            offer: 0,
            offerCode: [
                { id: 1, code: 'mobin', offer: 10 },
                { id: 2, code: 'izadi', offer: 20 }
            ]
        };

        this.addCart = this.addCart.bind(this)
        this.updateCart = this.updateCart.bind(this)
        this.removeProductFromCart = this.removeProductFromCart.bind(this)
        this.addDelivery = this.addDelivery.bind(this)
        this.noteHandler = this.noteHandler.bind(this)
        this.offerCheck = this.offerCheck.bind(this)
        this.emptyCart = this.emptyCart.bind(this)

    }
    emptyCart() {
        this.setState({
            cart: []
        })
    }
    offerCheck(codeOffer) {

        let mainCode = this.state.offerCode.find(code => (code.code == codeOffer))
        if (mainCode) {
            this.setState({
                offer: mainCode.offer
            })
        }

    }

    addDelivery(id) {
        let mainDelivery = this.state.delivery.find(delivery => delivery.id === id)
        console.log(mainDelivery);

        this.setState(preState => ({
            chooseDelivery: mainDelivery,
            delivery: preState.delivery.map(delivery => {
                if (delivery.id == id) {
                    let newDelivery = { ...delivery, selected: true }
                    return newDelivery
                } else {
                    return { ...delivery, selected: false }
                }
            }),
            deliveryFee: mainDelivery.price

        }))

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
    noteHandler(event) {
        this.setState({
            note: event.target.value
        })

    }

    componentDidUpdate(prevProps, prevState) {

        if (prevState.cart !== this.state.cart) {
            let sum = this.state.cart.reduce((acc, product) => acc + (product.price * product.count), 0);
            this.setState({
                totalProductsInCart: sum
            })
        }
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
                                        {
                                            this.state.cart.length > 0 && (<div className="flex justify-center items-center"><button className="py-3 px-4 bg-red-500 text-white rounded-lg flex items-center gap-2 " onClick={this.emptyCart}>Empty Cart <FaTrashAlt className='w-4 h-4' /></button></div>)
                                        }
                                    </div>

                                </div>
                                {/* delivery */}
                                <div className='my-8 md:my-16'>
                                    <h4 className='text-3xl mb-3'>Delivery</h4>
                                    <div className='grid grid-cols-1 md:grid-cols-2 gap-5 p-3 '>
                                        {this.state.delivery.map(delivery => (<DeliveryItem key={delivery.id} {...delivery} onChooseDelivery={this.addDelivery}></DeliveryItem>))}

                                    </div>

                                </div>
                                {/* Note */}
                                <div>
                                    <h4 className='text-3xl mb-3'>Note</h4>
                                    <textarea className='bg-white rounded-lg min-h-40  p-3 space-y-2 w-full outline-none font-normal' onChange={this.noteHandler} value={this.state.note}>


                                    </textarea>

                                </div>
                            </div>
                            {/* right */}
                            <div className='col-span-12 lg:col-span-4'>
                                {/* payment */}
                                <PaymentSummary total={this.state.totalProductsInCart} offer={this.state.offer} delivery={this.state.deliveryFee} onAddOffer={this.offerCheck} ></PaymentSummary>
                            </div>
                        </div>

                    </div>
                </main>
            </>
        )
    }
}

export default ShoppingCart