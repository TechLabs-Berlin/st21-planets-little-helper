import React from 'react'
import {Link} from "react-router-dom"

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
                    {links.map(link => <li><Link to={link.path}>{link.page}</Link></li>)}
                </ul>
            </nav>
            
        </header>
    )
}

export default Header
