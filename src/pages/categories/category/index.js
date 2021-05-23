import React from 'react'
import {Link, useParams} from "react-router-dom"
import {formatUrlParams} from "../../../utils/utils"

function Category() {

    let {category} = useParams();
    category = formatUrlParams(category);

    return (
        <div>
            <h1>{category}</h1>
            <h3>All challenges here</h3>
            <Link to="/challenges">&#8592; Back to all categories</Link>
        </div>
    )
}

export default Category
