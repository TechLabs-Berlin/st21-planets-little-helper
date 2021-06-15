import React from 'react'
import { Link } from "react-router-dom"
import './categories.css'
import categories from "./categoriesArray"

function AllCategories() {


    return (
        <div>
            <h1 className='h1-categories'>Categories</h1>
            <div className='container-div'>

                {categories.map(cat => (
                    <Link to={cat.path}>
                        <div className='category-box' key={cat.category}>

                            <img src={process.env.PUBLIC_URL + cat.img} alt={cat.category} />
                            <h4>{cat.category}</h4>

                            <p>{cat.description}</p>

                        </div>
                    </Link>
                ))}


            </div>


            <h2 className = "categories_h2">Start with small positive changes for our planet</h2>
            <div className="btn_div">
                <Link to="/signup">
                    <button className="button-register" id="register_cattegories_page">Register</button>
                </Link>
            </div>
        </div>
    )
}

export default AllCategories
