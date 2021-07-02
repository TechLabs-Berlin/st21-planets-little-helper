import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import {
  deleteChallenge,
  completeChallenge,
  getUserChallenges,
  updateProfilePic,
} from "../../store/actions/challenges";
import { Link } from "react-router-dom";
import styles from "./userProfile.module.css";

function UserProfile({
  currentUser,
  completeChallenge,
  deleteChallenge,
  getUserChallenges,
  updateProfilePic,
}) {
  useEffect(() => {
    getUserChallenges(currentUser.user.id);
    // eslint-disable-next-line
  }, []);

  const fileInput = useRef(null);

  const [img, setImg] = useState();

  const updateProfileImg = (e) => {
    console.log(e.target)
    setImg(e.target.files[0]);
    const formData = new FormData();
    formData.append("imageUrl", img);
    updateProfilePic(currentUser.user.id, formData);
  };

  const userId = currentUser.user.id;
  let profile;

  if (currentUser.user.challenges && currentUser.user.challenges.length > 0) {
    profile = (
      <div className={styles.container}>
        <h2>Your challenges</h2>
        {currentUser.user.challenges.map((c) => (
          <div key={c.id} className={styles.challenge}>
            <div>
              <h4>{c.title}</h4>
              <p>{c.challenge}</p>
            </div>
            <button
              className={c.completed ? styles.completed : styles.default}
              onClick={() => completeChallenge(userId, c.id, !c.completed)}
            >
              {c.completed ? "Completed" : "Mark as complete"}
            </button>
            <button
              onClick={() => deleteChallenge(userId, c.id)}
              className={styles.delete}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    );
  } else {
    profile = (
      <div className={styles.noChallengescontainer}>
        <h2>You have no challenges</h2>
        <div className={styles.noChallenges}>
          <button className={styles.goToChallengesBtn}>
            <Link to="/challenges">Go to challenges</Link>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.pageContent}>
      <div className={styles.profileDiv}>
        <div className={styles.pictureDiv}>
          <img
            src={"http://localhost:8000/" + currentUser.user.imageUrl}
            alt="profile pic"
            id="profilePic"
            onClick={() => fileInput.current.click()}
          />
        </div>
        <input
          type="file"
          ref={fileInput}
          name="imageUrl"
          accept=".jpg"
          style={{ display: "none" }}
          onChange={updateProfileImg}
        />
        <p>
          Username: <span>{currentUser.user.username}</span>
        </p>
        <p>
          E-mail: <span>{currentUser.user.email}</span>
        </p>
      </div>
      {profile}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
  };
}

export default connect(mapStateToProps, {
  deleteChallenge,
  completeChallenge,
  getUserChallenges,
  updateProfilePic,
})(UserProfile);
