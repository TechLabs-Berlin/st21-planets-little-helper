import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div>
      <h1>Join us on our mission to save the planet</h1>
      <p>
        Register and receive personalized challenges to save
        the world. Choose your own pace and own categories where
        you want to improve your lifestyle.
      </p>
      <img src={process.env.PUBLIC_URL + "/earth.png"} width='400' alt='planet earth' />
      <div>
        <button>
          <Link to="/form">Get started</Link>
        </button>
        <button>
          <Link to="/challenges">Go to challenges</Link>
        </button>
      </div>
      <div>
        <h2>How does it work?</h2>
        <p>Learn about the current environmental issues and how you can help.</p>
        <p>Choose from different categories where you want to make an impact.</p>
        <p>Receive personalized challenges and monitor the progress.</p>
        <p>Discover the immediate impact of your actions on the environment.</p>
      </div>
      <div>
        <h3>Categories</h3>
        <button><Link to="">Food</Link></button>
        <button><Link to="">Shopping</Link></button>
        <button><Link to="">Home & Work</Link></button>
        <button><Link to="">Energy</Link></button>
        <button><Link to="">Advocacy</Link></button>
        <button><Link to="">Transport & Travel</Link></button>
      </div>
    </div>
  );
}

export default LandingPage;
