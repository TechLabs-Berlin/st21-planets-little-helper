import React from 'react'
import {NavLink} from "react-router-dom"

const links = [
    {page: "Home", path: "/"},
    {page: "Challenges", path: "/challenges"},
    {page: "Form", path: "/form"},
    {page: "User Profile", path: "/user/1"}
]

function Header() {
    return (
        <header>
            <nav>
                <ul>
                    {links.map(link => <li><NavLink to={link.path}>{link.page}</NavLink></li>)}
                </ul>
            </nav>
            
        </header>
    )
}

export default Header
