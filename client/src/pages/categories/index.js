import React from 'react'
// import { Link } from "react-router-dom"
import './categories.css'


const categories = [
    { category: "Diet", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", path: "/challenges/food", img: "/images/food.png" },
    { category: "Travel", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", path: "/challenges/transportation-and-travel", img: "/images/travel.png" },
    { category: "Energy", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", path: "/challenges/energy-consumption", img: "/images/energy.png" },
    { category: "Recycling", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", path: "/challenges/recycling", img: "/images/recycle.png" },
]

function AllCategories() {


    return (
        <div>
            <h1 className='h1-categories'>All categories:</h1>
            <div className='container-div'>

                {categories.map(cat => (
                    <div className='category-box' key={cat.category}>

                        <h4>{cat.category}</h4>
                        <div className='imgDiv'>
                            <a href={cat.path}>
                                <img src={process.env.PUBLIC_URL + cat.img} alt={cat.category} />
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
