import React, { Component } from 'react'

export class PaymentSummary extends Component {
    constructor(props) {
        super(props)
        this.state = {
            offerInput: ''
        }

        this.offerHandler = this.offerHandler.bind(this)
        this.offerInputHandler = this.offerInputHandler.bind(this)
    }

    offerHandler() {
        this.props.onAddOffer(this.state.offerInput)
    }

    offerInputHandler(event) {
        this.setState({
            offerInput: event.target.value
        })
    }

    render() {
        let { total, delivery, offer, offerCode } = this.props

        return (
            <div>
                <h4 className="text-3xl mb-3">Payment Summary</h4>
                <div className="bg-white rounded-lg  p-3 ">
                    <div className='flex justify-between flex-wrap gap-1 border-b border-dashed py-6'>
                        <input type="text" placeholder='COUPON CODE' className='border rounded-lg basis-4/6 p-2 outline-none' onChange={this.offerInputHandler} value={this.state.offerInput} />
                        <button className='bg-blue-300 text-blue-600 rounded-lg py-2 px-4 basis-2/6' onClick={this.offerHandler}>Apply</button>
                    </div>
                    <div className=' py-3 space-y-3 border-b border-dashed'>
                        <div className='flex justify-between items-center'>
                            <span className='text-gray-300 font-normal'>Total Price</span>
                            <span>{total.toFixed(2)} $</span>
                        </div>
                        <div className='flex justify-between items-center'>
                            <span className='text-gray-300 font-normal'>Offer</span>
                            <span className='text-green-500'>{(((delivery + total) * offer) / 100).toFixed(2)} $</span>
                        </div>
                        <div className='flex justify-between items-center'>
                            <span className='text-gray-300 font-normal'>Total Amount </span>
                            <span>{((delivery + total) - ((delivery + total) * offer) / 100).toFixed(2)} $</span>
                        </div>
                    </div>
                    <div className="flex justify-center items-center mt-3">
                        <button className="py-3 px-4 bg-blue-600 text-white rounded-lg ">payment</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default PaymentSummary