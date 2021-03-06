import React, { useEffect, useRef, useState } from "react";
import Recommendations from "../../components/recommendations/recommendations";
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

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser.user));
  }, [currentUser]);

  const fileInput = useRef(null);

  const [img, setImg] = useState(null);
  const [newImgName, setNewImgName] = useState(null);

  const updateProfileImg = (e) => {
    setImg(e.target.files[0]);
    setNewImgName(e.target.files[0].name);
  };

  const submitProfilePic = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("avatar", img);
    updateProfilePic(currentUser.user.id, formData);
    setImg(null);
    setNewImgName(null);
  };

  const abortSubmit = () => {
    setImg(null);
    setNewImgName(null);
    fileInput.current.value = null
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
              {c.completed ? "Completed" : "Mark as completed"}
            </button>
            <button
              onClick={() => deleteChallenge(userId, c.id)}
              className={styles.delete}
            >
              Remove
            </button>
          </div>
        ))}
        <Recommendations id={currentUser.user.id} userChallenges={currentUser.user.challenges} />
      </div>
    );
  } else {
    profile = (
      <div className={styles.noChallengescontainer}>
        <h2>Your challenges</h2>
        <div className={styles.noChallenges}>
          <p>Currently you do not have any challenges.</p>
          <button className={styles.goToChallengesBtn}>
            <Link to="/challenges">Go to <span>challenges</span></Link>
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
            src={"/" + currentUser.user.imageUrl}
            alt="profile pic"
            id="profilePic"
            onClick={() => fileInput.current.click()}
          />
        </div>
        <form encType="multipart/form-data">
          <input
            type="file"
            ref={fileInput}
            name="avatar"
            accept=".jpg"
            style={{ display: "none" }}
            onChange={updateProfileImg}
          />
          {img && (
            <div>
              <div className={styles.buttonsGroup}>
                <button onClick={submitProfilePic} className={styles.updatePic}>
                  Change profile picture
                </button>
                <button
                  onClick={abortSubmit}
                  className={styles.updatePic}
                  style={{
                    backgroundColor: "#c3c7c4",
                    marginLeft: 5,
                    border: "1px solid white",
                  }}
                >
                  Cancel
                </button>
              </div>
              <p style={{ textAlign: "center" }}>
                Set profile picture to: {newImgName}
              </p>
            </div>
          )}
        </form>
        <div className={styles.userInfoDiv}>
          <p>
            Username: <span>{currentUser.user.username}</span>
          </p>
          <p>
            E-mail: <span>{currentUser.user.email}</span>
          </p>
        </div>
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
