import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchChallenges,
  deleteChallenge,
  populateUserChallenges,
} from "../../store/actions/challenges";
import { Link } from "react-router-dom";

class UserProfile extends Component {
  componentDidMount() {
    this.props.fetchChallenges();

    if(this.props.user.isAuthenticated){
      this.props.populateUserChallenges(this.props.user.user.id)
    }
  }

  render() {
    const challenges = this.props.challenges;
    const userId = this.props.user.user.id;
    const userChallenges = this.props.user.user.challenges;
    let profile;

    if (userChallenges && userChallenges.length > 0) {
      profile = (
        <div>
          <h2>Your challenges:</h2>
          {challenges
            .filter((c) => userChallenges.includes(c._id))
            .map((c) => (
              <div key={c._id}>
                <h4>{c.title}</h4>
                <p>{c.description}</p>
                <button
                  onClick={() => this.props.deleteChallenge(userId, c._id)}
                >
                  Delete
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
    userChallenges : state.userChallenges
  };
}

export default connect(mapStateToProps, {
  fetchChallenges,
  deleteChallenge,
  populateUserChallenges,
})(UserProfile);
