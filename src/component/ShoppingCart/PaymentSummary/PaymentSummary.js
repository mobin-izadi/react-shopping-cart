import React, { Component } from 'react'

export class PaymentSummary extends Component {
    render() {
        return (
            <div>
                <h4 className="text-3xl mb-3">Payment Summary</h4>
                <div className="bg-white rounded-lg  p-3 ">
                    <div className='flex justify-between border-b border-dashed py-6'>
                        <input type="text" placeholder='COUPON CODE' className='border rounded-lg basis-4/6 p-2 outline-none' />
                        <button className='bg-blue-300 text-blue-600 rounded-lg py-2 px-4'>Apply</button>
                    </div>
                    <div className=' py-3 space-y-3 border-b border-dashed'>
                        <div className='flex justify-between items-center'>
                            <span className='text-gray-300 font-normal'>Total Price</span>
                            <span>30 $</span>
                        </div>
                        <div className='flex justify-between items-center'>
                            <span className='text-gray-300 font-normal'>Offer</span>
                            <span className='text-green-500'>10 $</span>
                        </div>
                        <div className='flex justify-between items-center'>
                            <span className='text-gray-300 font-normal'>Total Amount </span>
                            <span>10 $</span>
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