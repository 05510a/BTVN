import React, { Component } from 'react'
import Carousel from './Carousel'
import BT3ProductsList from './BT3ProductsList'


export default class BT3Content extends Component {
    render() {
        return (
            <div className="container">
                <Carousel/>
                <BT3ProductsList/>
            </div>
        )
    }
}
