import React from 'react'
import {NavLink} from "react-router-dom"

const links = [
    {page: "About", path: "/"},
    {page: "Challenges", path: "/challenges"},
    {page: "Knowedge", path: "/"},
    {page: "Sign in/Sign up", path: "/form"},
    {page: "User Profile", path: "/user/1"}
]

function Header() {
    return (
        <header>
            <nav>
                <ul>
                    {links.map(link => <li key={link.page}><NavLink to={link.path}>{link.page}</NavLink></li>)}
                </ul>
            </nav>
            
        </header>
    )
}

export default Header
