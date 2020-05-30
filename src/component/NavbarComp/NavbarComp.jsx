import React, { Component } from 'react'
import { Logo } from '../../assets'
import './NavbarComp.css'

export default class NavbarComp extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light">
                    <a className="navbar-brand" href="#"><img src={Logo} alt="" width="100" srcset="" /></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Pricing</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="#">Disabled</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}
