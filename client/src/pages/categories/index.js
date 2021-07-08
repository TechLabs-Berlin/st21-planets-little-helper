import React from "react";
import { Link } from "react-router-dom";
import "./categories.css";
import categories from "./categoriesArray";
import { connect } from "react-redux";

function AllCategories({ currentUser }) {
  return (
    <div className="content">
      <h1 className="h1-categories">Categories</h1>
      <div className="container-div">
        {categories.map((cat) => (
          <Link to={cat.path} className="category-box" key={cat.category}>
            <div>
              <img src={process.env.PUBLIC_URL + cat.img} alt={cat.category} />
              <h4>{cat.category}</h4>
              <p>{cat.description}</p>
            </div>
          </Link>
        ))}

      </div>

      {currentUser.isAuthenticated && (
        <div>
          <h2 className="categories_h2">
            Start with small positive changes for our planet
          </h2>
          <p className="pLastOnPage">Just choose a category and begin your journey.</p>
        </div>
      )}

      {!currentUser.isAuthenticated && (
        <div>
          <h2 className="categories_h2">
            Start with small positive changes for our planet
          </h2>
          <div className="btn_div">
            <button className="button-register" id="register_cattegories_page">
              <Link to="/signup">
                Register
              </Link>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
  };
}

export default connect(mapStateToProps)(AllCategories);
