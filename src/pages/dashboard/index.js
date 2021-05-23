import React from 'react'
import {Link} from "react-router-dom"

const categories = [
    {category:"Food", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", path:"/challenges/food"},
    {category:"Transportation and Travel", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", path:"/challenges/transportation-and-travel"},
    {category:"Energy Consumption", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", path:"/challenges/energy-consumption"},
    {category:"Recycling", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", path:"/challenges/recycling"},
]

function Dashboard() {
    return (
        <div>
            <h1>All categories:</h1>
            <ul>
                {categories.map(cat => (
                    <li>
                    <Link to={cat.path}>
                        <h4>{cat.category}</h4>
                        <p>{cat.description}</p>
                    </Link>
                </li>
                ))}
            </ul>
        </div>
    )
}

export default Dashboard
