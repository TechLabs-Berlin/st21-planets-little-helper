import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { formatUrlParams } from "../../../utils/utils";
import { connect } from "react-redux";
import categories from "../categoriesArray";
import "./category.css";
import {
  addChallenge,
  fetchChallenges,
} from "../../../store/actions/challenges";

function Category({ currentUser, challenges, fetchChallenges, addChallenge }) {
  const userId = currentUser.user.id;
  let { category } = useParams();
  category = formatUrlParams(category);

  useEffect(() => {
    fetchChallenges();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="container-category-page">
      <div className="toggle-btns-div">
        {challenges &&
          categories.map((btn) => (
            <button key={btn.category} className="toggle-btns" id={btn.category === category ? "clicked" : null}>
              <Link to={btn.path} key={btn.path}>
                {btn.category}
              </Link>
            </button>
          ))}
      </div>

      {challenges &&
        challenges
          .filter((challenge) => challenge.category === category)
          .map((cat) => (
            <div key={cat._id} className="callengeBox">
              <h2>{cat.title}</h2>
              <div className="p-div">
                <p>{cat.description}</p>

                <h4>Your challenge</h4>

                <p>{cat.challenge}</p>
              </div>
              {currentUser.isAuthenticated && (
                <button
                  className="add-challenge-btn"
                  onClick={() => addChallenge(userId, cat._id)}
                  disabled={currentUser.user.challenges
                    .map((c) => c.id)
                    .includes(cat._id)}>
                  Add challenge
                </button>
              )}
            </div>
          ))}

      {!currentUser.isAuthenticated && (
        <div className="bottom-div">
          <h2 className="categories_h2">
            Start with small positive changes for our planet
          </h2>
          <div className="btn_div">
            <Link to="/signup">
              <button
                className="button-register"
                id="register_cattegories_page"
              >
                Register
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
    challenges: state.challenges,
  };
}

export default connect(mapStateToProps, { addChallenge, fetchChallenges })(
  Category
);
