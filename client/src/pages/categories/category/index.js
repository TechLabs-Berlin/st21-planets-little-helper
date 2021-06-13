import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom"
import { formatUrlParams } from "../../../utils/utils"
import { apiCall } from "../../../services/api"
import axios from "axios";

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
        <div>
            <h1>{category}</h1>
            {challenges &&
                challenges.map((cat) => (
                    cat.category === category &&
                    <div key={cat._id} className="callengeBox">
                        <h2>
                            {cat.title}
                        </h2>
                        <p><strong>Action: </strong>{cat.challenge}</p>
                        <p><strong>The problem: </strong>{cat.description}</p>
                        <button>Add challenge</button>
                    </div>
                ))}
            <Link to="/challenges">&#8592; Back to all categories</Link>
        </div>
    );

}

export default Category
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
