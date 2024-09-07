import React, { Component } from 'react'

export class CartItem extends Component {
    render() {
        return (
            <div className='flex justify-between items-center gap-2'>
                <div className='flex gap-3 items-center'>
                    <div className='w-40 aspect-square rounded-lg overflow-hidden'>
                        <img src="./images/products/1.jpg" className='w-full h-full object-cover' alt="" />
                    </div>
                    <div>
                        <p className='text-xl'>Product</p>
                        <p><span className='text-gray-400'>Color:</span> white</p>
                        <p><span className='text-gray-400'>Size:</span> Xl</p>
                    </div>

                </div>
                <p>100<span>$</span></p>
                <div>
                    <span className='text-gray-400'>Count: </span>
                    <input type="number" className='border w-14 h-10 text-center' />
                </div>

            </div>
        )
    }
}

export default CartItem