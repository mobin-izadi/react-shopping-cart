import React, { Component } from 'react'

export class Size extends Component {
    render() {
        return (
            <option value={this.props.value}>{this.props.value}</option>
        )
    }
}

export default Size