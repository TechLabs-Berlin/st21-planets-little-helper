import React from "react";
import { Link } from "react-router-dom";
import "./landingPage.css";

function LandingPage({ currentUser }) {
  return (
    <div className="content-box">
      <div className="container">
        {!currentUser.isAuthenticated && (
          <div className="box-text">
            <h1 className="h1LandingPage">Join us on our mission to save the planet</h1>
            <p>
              Register and receive personalized challenges to save the world.
              Choose your own pace and own categories where you want to improve
              your lifestyle.
            </p>

            <Link to="/signup">
              <button className="button-register">Register</button>
            </Link>
          </div>
        )}
        {currentUser.isAuthenticated && (
          <div className="box-text">
            <h1 className="h1LogedIn">Hi <span className="name">{currentUser.user.username}</span>!</h1>
            <p className="pLogedIn">
            Nice to have you on our journey to have sustainable positive impact on our environment.
            </p>
            <p className="pLogedIn" id="pLetsBegin">
            Let’s begin!
            </p>

            <Link to="/challenges">
              <button className="btnChallenges">Challenges</button>
            </Link>
          </div>
        )}
        <div className="box-img">
          <img
            src={process.env.PUBLIC_URL + "/earth.png"}
            alt="planet earth"
            id="planet-img"
          />
        </div>
      </div>
      <div>
        <h2>How does it work?</h2>
        <div className="container2">
          <div className="how-text">
            <p>
              Learn about the current environmental issues and how you can help.
            </p>
          </div>
          <div className="how-text">
            <p>
              Choose from different categories where you want to make an impact.
            </p>
          </div>
          <div className="how-text">
            <p>Receive personalized challenges and monitor the progress.</p>
          </div>
          <div className="how-text">
            <p>
              Discover the immediate impact of your actions on the environment.
            </p>
          </div>
        </div>
      </div>
      <div>
        <h3>Categories</h3>
        <div className="container3">
          <div className="btns-div">
            <div>
              <Link to="/challenges/food">
                <button className="btns">
                  Food
            </button>
              </Link>
            </div>
            <div>
              <Link to="/challenges/recycling">
                <button className="btns">
                  Recycling
            </button>
              </Link>
            </div>
          </div>
          <div className="btns-div">
            <div>
              <Link to="/challenges/energy">
                <button className="btns">
                  Energy
            </button>
              </Link>
            </div>
            <div>
              <Link to="/challenges/travel">
                <button className="btns">
                  Travel
            </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
