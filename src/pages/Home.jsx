import React, { Component } from 'react'
import { NavbarComp,WelcomeComp } from '../component'
export default class Home extends Component {
    render() {
        return (
            <div>
                <NavbarComp />
                <WelcomeComp />
            </div>
        )
    }
}
