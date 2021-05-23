import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div>
      <h1>Welcome to Planet's Little Helper</h1>
      <p>
        Challenge yourself to change your habits and become more environmentally
        conscious.
      </p>
      <div>
        <button>
          <Link to="/form">Get started</Link>
        </button>
        <button>
          <Link to="/challenges">Go to challenges</Link>
        </button>
      </div>
    </div>
  );
}

export default LandingPage;
