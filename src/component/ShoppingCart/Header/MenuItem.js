import React, { Component } from 'react'

export class MenuItem extends Component {

    render() {
        let { link, title } = this.props
        return (
            <li>
                <a href={link} className='cursor-pointer transition-colors delay-75 hover:text-blue-400'>{title}</a>
            </li>
        )
    }
}

export default MenuItem