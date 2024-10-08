import React, { Component } from 'react'

export class DeliveryItem extends Component {
    constructor(props) {
        super(props)
        this.chooseDelivery = this.chooseDelivery.bind(this)
    }

    chooseDelivery(id) {
        this.props.onChooseDelivery(id)
    }
    render() {
        let { id, price, title, caption, img, selected } = this.props
        return (
            <div className='flex items-center gap-2 col-span-1'>
                <input type="radio" name="delivery" className='w-5 h-5' onChange={() => this.chooseDelivery(id)} />
                <div className={`bg-white rounded-xl flex gap-3 items-center py-6 px-3 w-full ${selected && ' border-[3px] border-blue-400'}`}>
                    <div className='w-32 aspect-square'>
                        <img src={img} alt="" className='w-full h-full object-cover' />
                    </div>
                    <div className='w-full'>
                        <p>{title}</p>
                        <div className='flex items-center justify-between flex-wrap'>
                            <p className='text-gray-300'>{caption}</p>
                            <p>{price} $</p>
                        </div>

                    </div>
                </div>


            </div>
        )
    }
}

export default DeliveryItem