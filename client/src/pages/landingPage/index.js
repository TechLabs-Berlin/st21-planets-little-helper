import React from "react";
import { Link } from "react-router-dom";
import "./landingPage.css";

function LandingPage({ currentUser }) {
  return (
    <div className="content-box">
      <div className="container">
        {!currentUser.isAuthenticated && (
          <div className="box-text">
            <h1>Join us on our mission to save the planet</h1>
            <p>
              Register and receive personalized challenges to save the world.
              Choose your own pace and own categories where you want to improve
              your lifestyle.
            </p>

            <Link to="/form">
              <button className="button-register">Register</button>
            </Link>
          </div>
        )}
        {currentUser.isAuthenticated && (
          <div className="box-text">
            <h1>Welcome back, {currentUser.user.username}!</h1>
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
              <button className="btns">
                <Link to="/challenges/food">Food</Link>
              </button>
            </div>
            <div>
              <button className="btns">
                <Link to="/challenges/recycling">Recycling</Link>
              </button>
            </div>
          </div>
          <div className="btns-div">
            <div>
              <button className="btns">
                <Link to="/challenges/energy-consumption">Energy</Link>
              </button>
            </div>
            <div>
              <button className="btns">
                <Link to="/challenges/transportation-and-travel">Transport & Travel</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
