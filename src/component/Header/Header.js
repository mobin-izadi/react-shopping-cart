import React, { Component } from 'react'
import MenuItem from './MenuItem'

export class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            menu: [
                { id: 1, href: '#New', title: 'New' },
                { id: 2, href: '#Men', title: 'Men' },
                { id: 3, href: '#Women', title: 'Women' },
                { id: 4, href: '#Kids', title: 'Kids' },
                { id: 5, href: '#Special Offers', title: 'Special Offers' },
            ],
            isOpenMenuMobile: false

        }
        this.mobileMenuHandler = this.mobileMenuHandler.bind(this)
        this.mobileMenuCloseHandler = this.mobileMenuCloseHandler.bind(this)
    }

    mobileMenuHandler() {
        this.setState({
            isOpenMenuMobile: true
        })
    }
    mobileMenuCloseHandler() {
        this.setState({
            isOpenMenuMobile: false
        })
    }
    render() {

        return (
            <header>
                <div className="container">
                    {/* header Wrapper */}
                    <div className='flex items-center justify-between h-20'>
                        {/* logo && navbar */}
                        <div className='flex items-center gap-10'>
                            <h1 className='italic font-bold text-2xl'>CLOTHING</h1>
                            <nav className='hidden md:block'>
                                <ul className='flex items-center gap-3 lg:gap-5'>
                                    {this.state.menu.length > 0 && this.state.menu.map(item => (<MenuItem key={item.id} {...item}></MenuItem>))}
                                </ul>
                            </nav>
                        </div>
                        {/* sing up && log in */}
                        <div className='hidden md:flex items-center gap-4'>
                            <div className='w-28 h-10 flex items-center justify-center bg-blue-300 text-blue-600 rounded-lg cursor-pointer  '>Sing Up</div>
                            <div className='w-28 h-10 flex items-center justify-center bg-blue-500 text-white rounded-lg cursor-pointer '>Log in</div>
                        </div>

                        {/* menu bar */}
                        <div className='md:hidden'>
                            <svg className='w-8 h-8 cursor-pointer' onClick={this.mobileMenuHandler}>
                                <use href='sprite.svg#bar-3'></use>
                            </svg>

                        </div>


                    </div>
                </div>
                {/* mobile menu */}
                {this.state.isOpenMenuMobile && (<div className='fixed top-0 bottom-0 right-0 w-80 bg-white z-50 shadow-lg p-3 md:hidden overflow-y-auto'>
                    <div>
                        <svg className="w-8 h-8 cursor-pointer" onClick={this.mobileMenuCloseHandler}>
                            <use href="sprite.svg#x-mark"></use>
                        </svg>
                    </div>
                    <ul className='flex flex-col items-center gap-3 mt-12 '>
                        {this.state.menu.length > 0 && this.state.menu.map(item => (<MenuItem key={item.id} {...item}></MenuItem>))}
                    </ul>
                    {/* sing up && log in */}
                    <div className='flex flex-col items-center gap-4 mt-12'>
                        <div className='w-28 h-10 flex items-center justify-center bg-blue-300 text-blue-600 rounded-lg cursor-pointer  '>Sing Up</div>
                        <div className='w-28 h-10 flex items-center justify-center bg-blue-500 text-white rounded-lg cursor-pointer '>Log in</div>
                    </div>
                </div>)}
            </header>
        )
    }
}

export default Header