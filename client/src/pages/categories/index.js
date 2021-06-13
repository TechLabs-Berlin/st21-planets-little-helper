import React from 'react'
import { Link } from "react-router-dom"
import './categories.css'


const categories = [
    { category: "Food", description: "This respond to basic needs and bring a better quality of life, while minimising the use of natural resources, toxic materials and emissions of waste and pollutants.", path: "/challenges/food", img: "/images/food1.png" },
    { category: "Travel", description: "Green transportation revolves around efficient and effective use of resources, modification of the transport structure and making healthier travel choices.", path: "/challenges/transportation-and-travel", img: "/images/travel1.png" },
    { category: "Energy", description: "Recycling prevents the waste of useful materials and reduces the consumption of fresh raw materials, thereby reducing: energy usage, air and water pollution.", path: "/challenges/energy-consumption", img: "/images/energy1.png" },
    { category: "Recycling", description: "Green energy reduces the negative effects of fossil fuels. Derived from natural resources, it is also often renewable and clean, thus emitting no or few greenhouse gases.", path: "/challenges/recycling", img: "/images/recycle1.png" },
]

function AllCategories() {


    return (
        <div>
            <h1 className='h1-categories'>All categories:</h1>
            <div className='container-div'>

                {categories.map(cat => (
                    <a href={cat.path}>
                        <div className='category-box' key={cat.category}>

                            <img src={process.env.PUBLIC_URL + cat.img} alt={cat.category} />
                            <h4>{cat.category}</h4>

                            <p>{cat.description}</p>


                        </div>
                    </a>
                ))}


            </div>


            <h2 className = "categories_h2">Start with small positive changes for our planet</h2>
            <div className="btn_div">
                <Link to="/form">
                    <button className="button-register" id="register_cattegories_page">Register</button>
                </Link>
            </div>
        </div>
    )
}

export default AllCategories
