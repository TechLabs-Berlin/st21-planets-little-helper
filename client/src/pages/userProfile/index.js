import React, { useState, useEffect } from "react";
import axios from "axios";

function UserProfile() {
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
      <h1>User Profile</h1>
      
    </div>
  );
}

export default UserProfile;
