import React, { Component } from 'react'
import { AiFillDelete } from "react-icons/ai";

export class CartItem extends Component {
    constructor(props) {
        super(props)

        this.changeCount = this.changeCount.bind(this)
        this.removeProduct = this.removeProduct.bind(this)

    }

    removeProduct(id) {
        this.props.onRemove(id)
    }

    changeCount(event, id) {
        let newCount = null
        if (event.target.value > 0) {
            newCount = event.target.value
        } else {
            newCount = 1
        }

        this.props.onUpdateCart(newCount, id)

    }
    render() {
        let { id, color, size, title, count, price, img } = this.props
        return (
            <div className='flex justify-between items-center gap-2 border-b pb-3'>
                <div className='flex gap-3 items-center basis-3/5'>
                    <div className='w-40 aspect-square rounded-lg overflow-hidden'>
                        <img src={img} className='w-full h-full object-cover' alt="" />
                    </div>
                    <div>
                        <p className='text-xl'>{title}</p>
                        <p><span className='text-gray-400'>Color:</span> {color}</p>
                        <p><span className='text-gray-400'>Size:</span> {size}</p>
                    </div>

                </div>
                <p>{price * count}<span>$</span></p>
                <div>
                    <span className='text-gray-400'>Count: </span>
                    <input type="number" value={count} className='border outline-none w-14 h-10 text-center rounded-lg' onChange={event => this.changeCount(event, id)} />
                </div>
                <AiFillDelete className='w-6 h-6 cursor-pointer  mr-4' onClick={() => this.removeProduct(id)} />



            </div>
        )
    }
}

export default CartItem