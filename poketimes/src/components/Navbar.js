import React from 'react'
import { Link, NavLink, withRouter } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="nav-wrapper cyan darken-3">
            <div className="container">
                <Link to='/' className="brand-logo">React Reader</Link>
                <ul className="right">
                    <li><Link to="/">Home</Link></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default withRouter(Navbar)