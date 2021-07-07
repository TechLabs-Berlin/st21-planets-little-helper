import { useEffect } from "react";
import styles from "./recommendations.module.css";
import { connect } from "react-redux";
import {
  addChallenge,
  fetchChallenges,
  getUserChallenges,
} from "../../store/actions/challenges";

function Recommendations({
  addChallenge,
  fetchChallenges,
  challenges,
  id,
  userChallenges,
}) {
  useEffect(() => {
    fetchChallenges();
    getUserChallenges(id);
    // eslint-disable-next-line
  }, []);

  const getChallengesIds = () => {
    return userChallenges.map((ch) => ch.id);
  };

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.recommendationsH2}>Our recommendations for you:</h2>
      <div className={styles.wrapper}>
        {shuffleArray(
          challenges.filter(
            (challenge) => !getChallengesIds().includes(challenge._id)
          )
        )
          .slice(0, 3)
          .map((c) => (
            <div
              key={c._id}
              className={styles.recommend}
            >
              <h4>{c.title}</h4>
              <p>{c.challenge}</p>
              <button onClick={() => addChallenge(id, c._id)} className={styles.addchallengeBtn}>
                Add Challenge
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    challenges: state.challenges,
  };
}

export default connect(mapStateToProps, {
  addChallenge,
  fetchChallenges,
  getUserChallenges,
})(Recommendations);
