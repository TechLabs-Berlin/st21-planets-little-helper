import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthForm from "./pages/authForm/AuthForm";
import UserProfile from "./pages/userProfile/userProfile";
import Category from "./pages/categories/category";
import AllCategories from "./pages/categories";
import LandingPage from "./pages/landingPage";
import Header from "./components/header";
import Footer from "./components/footer";
import About from "./pages/about/About";
import { connect } from "react-redux";
import { authUser } from "./store/actions/auth";
import { removeError } from "./store/actions/error";

import "./App.css";

function App({ authUser, error, removeError, currentUser }) {
  return (
    <Router className="App">
      <Header currentUser={currentUser} />
      <Switch>
        <Route
          exact
          path="/signin"
          render={(props) => (
            <AuthForm
              {...props}
              buttonText="Log in"
              heading="Welcome back"
              onAuth={authUser}
              error={error}
              removeError={removeError}
            />
          )}
        />
        <Route
          exact
          path="/signup"
          render={(props) => (
            <AuthForm
              {...props}
              buttonText="Sign me up!"
              heading="Welcome to Planet's little helper"
              signup
              onAuth={authUser}
              error={error}
              removeError={removeError}
            />
          )}
        />
        {currentUser.isAuthenticated ? (
          <Route path="/user/:userId" component={UserProfile} />
        ) : (
          <Route
            exact
            path="/"
            render={(props) => <LandingPage currentUser={currentUser} />}
          />
        )}
        <Route path="/challenges/:category" component={Category} />
        <Route path="/challenges" component={AllCategories} />
        <Route
          exact
          path="/"
          render={(props) => <LandingPage currentUser={currentUser} />}
        />
        <Route path="/about" component={About} />
      </Switch>
      <Footer />
    </Router>
  );
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
    error: state.error,
  };
}

export default connect(mapStateToProps, {
  authUser,
  removeError,
})(App);
