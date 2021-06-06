import React from 'react'
// import { Link } from "react-router-dom"
import './categories.css'


const categories = [
    { category: "Diet", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", path: "/challenges/food", img: "/food.jpg" },
    { category: "Travel", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", path: "/challenges/transportation-and-travel", img: "/travel.jpg" },
    { category: "Energy", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", path: "/challenges/energy-consumption", img: "/energy.jpg" },
    { category: "Recycling", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", path: "/challenges/recycling", img: "/recycle.jpg" },
]

function AllCategories() {
    return (
        <div>
            <h1>All categories:</h1>
            <div className='container-div'>

                {categories.map(cat => (

                    <div className='category-box'>

                        <h4>{cat.category}</h4>
                        <div className='imgDiv'>
                            <a href={cat.path}>
                                <img src={process.env.PUBLIC_URL + "/logo.png"} alt={cat.category} />
                            </a>
                        </div>

                        <p>{cat.description}</p>


                    </div>
                ))}


            </div>
        </div>
    )
}

export default AllCategories
