import React, { Component } from 'react'
import BT3ProducItem from './BT3ProducItem'

export default class BT3ProductsList extends Component {
    render() {
        return (
            <div class="row text-center">
                <BT3ProducItem/>
                <BT3ProducItem/>
                <BT3ProducItem/>
                <BT3ProducItem/>
            </div>
        )
    }
}
