import React, { Component } from "react";
import { connect } from "react-redux";
import {
  deleteChallenge,
  populateUserChallenges,
  completeChallenge
} from "../../store/actions/challenges";
import { Link } from "react-router-dom";
import styles from "./userProfile.module.css";

class UserProfile extends Component {
  componentDidMount() {
    if (this.props.user.isAuthenticated) {
      this.props.populateUserChallenges(this.props.user.user.id);
    }
  }

  render() {
    const userId = this.props.user.user.id;

    const userChallenges = this.props.userChallenges;
    let profile;

    if (userChallenges && userChallenges.length > 0) {
      profile = (
        <div className={styles.container}>
          <h2>Your challenges:</h2>
          {userChallenges.map((c) => (
            <div key={c.id} className={styles.challenge}>
              <div>
                <h4>{c.title}</h4>
                <p>{c.description}</p>
              </div>
              <button className={c.completed ? styles.completed : styles.default} onClick={() => this.props.completeChallenge(userId, c.id, !c.completed)}>{c.completed ? 'Completed' : 'Mark as completed'}</button>
              <button
                onClick={() => this.props.deleteChallenge(userId, c.id)}
                className={styles.delete}
              >
                Remove challenge
              </button>
            </div>
          ))}
        </div>
      );
    } else {
      profile = (
        <div>
          <h2>You have no challenges</h2>
          <Link to="/challenges">Go to challenges</Link>
        </div>
      );
    }

    return <div>{this.props.challenges && profile}</div>;
  }
}

function mapStateToProps(state) {
  return {
    challenges: state.challenges,
    user: state.currentUser,
    userChallenges: state.userChallenges,
  };
}

export default connect(mapStateToProps, {
  deleteChallenge,
  populateUserChallenges,
  completeChallenge
  
})(UserProfile);
