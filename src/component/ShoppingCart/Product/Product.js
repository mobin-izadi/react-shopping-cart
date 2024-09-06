import React, { Component } from 'react'
import Option from './Option'

export class Product extends Component {
    render() {
        let { title, img, price, id, size, color } = this.props
        return (
            <div className='bg-white rounded-lg overflow-hidden'>
                <div className=' w-full  aspect-square'>
                    <img src={img} alt={title} className='w-full h-full object-fill object-top ' />
                </div>
                <div className='p-3'>
                    <h2 className=' text-center text-xl line-clamp-1'>{title}</h2>
                    <div className='flex justify-center items-center gap-3 my-3 flex-wrap'>
                        <div>
                            <label htmlFor="size" className='pr-2'>Size:</label>
                            <select name="size" id="size" className='border rounded-md outline-none'>
                                {size.map(size => (<Option key={size} value={size}></Option>))}
                            </select>
                        </div>
                        <div>
                            <label htmlFor="color" className='pr-2'>Color:</label>
                            <select name="color" id="color" className='border rounded-md outline-none'>
                                {color.map(color => (<Option key={color} value={color}></Option>))}
                            </select>

                        </div>
                    </div>
                    <p className='text-center text-xl my-3'>{price}<span className='text-base'>$</span></p>
                    <div className='flex justify-center items-center'>
                        <button className='py-3 px-4 bg-blue-600 text-white rounded-lg '>Add Cart</button>
                    </div>
                </div>

            </div>
        )
    }
}

export default Product