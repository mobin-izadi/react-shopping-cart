import React, { Component } from 'react'

export class Product extends Component {
    render() {
        let { title, img, price, id } = this.props
        return (
            <div className='bg-white rounded-lg overflow-hidden'>
                <div className=' w-full  aspect-square'>
                    <img src={img} alt={title} className='w-full h-full object-fill object-top ' />
                </div>

            </div>
        )
    }
}

export default Product