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
            ]
        }
    }
    render() {
        return (
            <header>
                <div className="container">
                    <div>
                        <div>
                            <h1 className='italic'>CLOTHING</h1>
                            <nav>
                                <ul>
                                    {this.state.menu.length > 0 && this.state.menu.map(item => (<MenuItem key={item.id} {...item}></MenuItem>))}
                                </ul>
                            </nav>
                        </div>

                        <div>
                            <a href="#">Sing Up</a>
                            <a href="#">Log in</a>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header