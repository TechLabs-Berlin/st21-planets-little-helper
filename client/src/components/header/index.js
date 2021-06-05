import React from 'react'
import { NavLink } from "react-router-dom"
import './header.css'

const links = [
    { page: "Challenges", path: "/challenges" },
    { page: "Sign in", path: "/form" },
    { page: "Sign up", path: "/form" },
    { page: "User Profile", path: "/user/1" }
]

class Header extends React.Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return (
            <header>
                <nav className='navbar'>
                <a href='/'>
                <img src={process.env.PUBLIC_URL + "/logo.png"} width='60' alt='logo' id='logo' />
                </a>

                    <div className='navbar-logo-name'>
                        <span>Planet's Little Helper</span>
                    </div>

                    <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'} onClick={this.handleClick}>
                        {links.map(link => <li key={link.page}><NavLink to={link.path} className='nav-links'>{link.page}</NavLink></li>)}
                    </ul>

                    <div className='navbar-menu-icon' onClick={this.handleClick}>
                        <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>
                </nav>

            </header>
        )
    }
}

export default Header