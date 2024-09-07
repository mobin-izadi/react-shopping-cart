import React, { Component } from 'react'

export class DeliveryItem extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className='flex items-center gap-2 col-span-1'>
                <input type="radio" name="delivery" className='w-5 h-5' />
                <div className='bg-white rounded-xl flex gap-3 items-center py-6 px-3 w-full'>
                    <div className='w-32 aspect-square'>
                        <img src="images/delivery/1.jpg" alt="" className='w-full h-full object-cover' />
                    </div>
                    <div className='w-full'>
                        <p>title</p>
                        <div className='flex items-center justify-between'>
                            <p className='text-gray-300'>caption</p>
                            <p>38 $</p>
                        </div>

                    </div>
                </div>


            </div>
        )
    }
}

export default DeliveryItem