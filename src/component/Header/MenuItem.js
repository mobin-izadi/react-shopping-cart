import React, { Component } from 'react'

export class MenuItem extends Component {

    render() {
        let { link, title } = this.props
        return (
            <li>
                <a href={link}>{title}</a>
            </li>
        )
    }
}

export default MenuItem