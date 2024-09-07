import React, { Component } from 'react'
import Option from './Option'

export class Product extends Component {
    constructor(props) {
        super(props)

        this.state = {
            color: this.props.color[0],
            size: this.props.size[0],
        }

        this.changeColor = this.changeColor.bind(this)
        this.changeSize = this.changeSize.bind(this)
        this.addCart = this.addCart.bind(this)
    }

    changeColor(event) {
        this.setState({
            color: event.target.value
        })
    }
    changeSize(event) {
        this.setState({
            size: event.target.value
        })
    }

    addCart(id) {
        this.props.onAddCart(id, this.state.color, this.state.size)

    }


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
                            <select name="size" id="size" className='border rounded-md outline-none' onChange={this.changeSize}>
                                {size.length > 0 ? size.map(size => (<Option key={size} value={size}></Option>)) : (<option></option>)}
                            </select>
                        </div>
                        <div>
                            <label htmlFor="color" className='pr-2'>Color:</label>
                            <select name="color" id="color" className='border rounded-md outline-none' onChange={this.changeColor}>
                                {color.length > 0 ? color.map(color => (<Option key={color} value={color}></Option>)) : (<option></option>)}
                            </select>

                        </div>
                    </div>
                    <p className='text-center text-xl my-3'>{price}<span className='text-base'>$</span></p>
                    <div className='flex justify-center items-center'>
                        <button className='py-3 px-4 bg-blue-600 text-white rounded-lg ' onClick={() => this.addCart(id)}  >Add Cart</button>
                    </div>
                </div>

            </div>
        )
    }
}

export default Product