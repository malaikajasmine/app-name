import React, { Component } from 'react';
import { Link } from "react-router-dom"

class Nav extends Component {
    render(){
        return (   
            <div>
                <nav className="navbar">
            
                        <img src="img/invert-logo-header.png"/>
                    
                    <div className="nav-right">
                        <ul className="nav">

                            <li className="nav-items">
                                <Link className="link" to="/">Home</Link>
                            </li>

                            <li className="nav-items">
                                <Link className="link" to="/Blog">Services</Link>
                            </li>

                            <li className="nav-items">
                                <Link className="link" to="/About">About Us</Link>
                            </li>

                            <li className="nav-items">
                                <Link className="link" to="/Contact">Contact Us</Link>
                            </li>

                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Nav;