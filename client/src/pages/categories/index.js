import React from 'react'
// import { Link } from "react-router-dom"
import './categories.css'


const categories = [
    { category: "Food", description: "This respond to basic needs and bring a better quality of life, while minimising the use of natural resources, toxic materials and emissions of waste and pollutants.", path: "/challenges/food", img: "/images/food.png" },
    { category: "Travel", description: "Green transportation revolves around efficient and effective use of resources, modification of the transport structure and making healthier travel choices.", path: "/challenges/transportation-and-travel", img: "/images/travel.png" },
    { category: "Energy", description: "Recycling prevents the waste of useful materials and reduces the consumption of fresh raw materials, thereby reducing: energy usage, air and water pollution.", path: "/challenges/energy-consumption", img: "/images/energy.png" },
    { category: "Recycling", description: "Green energy reduces the negative effects of fossil fuels. Derived from natural resources, it is also often renewable and clean, thus emitting no or few greenhouse gases.", path: "/challenges/recycling", img: "/images/recycle.png" },
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
