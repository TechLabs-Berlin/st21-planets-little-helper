import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom"
import { formatUrlParams } from "../../../utils/utils"
// import { apiCall } from "../../../services/api"
import axios from "axios";
import categories from "../categoriesArray"
import './category.css'


function Category() {

    let { category } = useParams();
    category = formatUrlParams(category);
    const [challenges, setChallenges] = useState();

    useEffect(() => {
        axios("http://localhost:8000/api/challenges")
            .then((response) => setChallenges(response.data))
            .catch((e) => {
                console.log(e);
            });
    }, [challenges]);

    return (
        <div className="container-category-page">
            <div className="toggle-btns-div">
                {challenges &&
                    categories.map((btn) => (
                        <Link to={btn.path}>
                            <button className="toggle-btns"
                                id={btn.category === category ? "clicked" :
                                    btn.category === "Travel" && category === "Transportation and travel" ? "clicked" :
                                        btn.category === "Energy" && category === "Energy consumption" ? "clicked" : null
                                }>
                                {btn.category}
                            </button>
                        </Link>
                    ))}
            </div>

            {challenges &&
                challenges.map((cat) => (
                    cat.category === category &&
                    <div key={cat._id} className="callengeBox">
                        <h2>
                            {cat.title}
                        </h2>
                        <div className="p-div">
                            <p><strong>Action: </strong>{cat.challenge}</p>
                            <p><strong>The problem: </strong>{cat.description}</p>
                        </div>
                        <button className="add-challenge-btn">Add challenge</button>
                    </div>
                ))}

            {challenges &&
                challenges.map((cat) => (
                    cat.category === "Diet" && category === "Food" &&
                    <div key={cat._id} className="callengeBox">
                        <h2>
                            {cat.title}
                        </h2>
                        <div className="p-div">
                            <p><strong>Action: </strong>{cat.challenge}</p>
                            <p><strong>The problem: </strong>{cat.description}</p>
                        </div>
                        <button className="add-challenge-btn">Add challenge</button>
                    </div>
                ))}

            {challenges &&
                challenges.map((cat) => (
                    cat.category === "Travel and Transportation" && category === "Transportation and travel" &&
                    <div key={cat._id} className="callengeBox">
                        <h2>
                            {cat.title}
                        </h2>
                        <div className="p-div">
                            <p><strong>Action: </strong>{cat.challenge}</p>
                            <p><strong>The problem: </strong>{cat.description}</p>
                        </div>
                        <button className="add-challenge-btn">Add challenge</button>
                    </div>
                ))}
            <div className="bottom-div">
                <h2 className="categories_h2">Start with small positive changes for our planet</h2>
                <div className="btn_div">
                    <Link to="/signup">
                        <button className="button-register" id="register_cattegories_page">Register</button>
                    </Link>
                </div>
            </div>
        </div>
    );

}

export default Category


            // <div className="back-to-categories-div">
            // <Link to="/challenges" className="back-to-categories-btn">&#8592; Back to all categories</Link>
            // </div>
// --------------------------------
// const [isActive, setActive] = useState(false);
// const isClicked = () => {
//     setActive(!isActive);
//     console.log("clicked");
// }

// ---------------------------------------

            // {challenges &&
            //     challenges.map((cat) => (
            //         cat.category === "Diet" &&
            //         <div key={cat._id} className="callengeBox">
            //             <h2>
            //                 {cat.title}
            //             </h2>
            //             <p><strong>Action: </strong>{cat.challenge}</p>
            //             <p><strong>The problem: </strong>{cat.description}</p>
            //             <button>Add challenge</button>
            //         </div>
            //     ))}

            // ---------------------

            // function UserProfile() {
                //     const [challenges, setChallenges] = useState();

//     useEffect(() => {
//       axios("http://localhost:8000/api/challenges")
//         .then((response) => setChallenges(response.data))
//         .catch((e) => {
//           console.log(e);
//         });
//     }, [challenges]);

//     return (
//       <div>
//         <h1>User Profile</h1>
//         {challenges &&
//           challenges.map((cat) => (
//             <div key={cat._id}>
//               <h1>
//                 {cat.title} - {cat.category}
//               </h1>
//               <p>{cat.description}</p>
//             </div>
//           ))}
//       </div>
//     );
//   }

//   export default UserProfile;
