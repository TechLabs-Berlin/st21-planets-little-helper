import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthForm from "./pages/authForm/index";
import UserProfile from "./pages/userProfile";
import Category from "./pages/categories/category";
import AllCategories from "./pages/categories";
import LandingPage from "./pages/landingPage";
import Header from "./components/header";
import Footer from "./components/footer";
import { connect } from "react-redux";
import { authUser } from "./store/actions/auth";

import "./App.css";

function App({authUser}) {
  return (
    <Router className="App">
      <Header />
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
            />
          )}
        />
        <Route path="/user/:userId" component={UserProfile} />
        <Route path="/challenges/:category" component={Category} />
        <Route path="/challenges" component={AllCategories} />
        <Route exact path="/" component={LandingPage} />
      </Switch>
      <Footer />
    </Router>
  );
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
  };
}

export default connect(mapStateToProps, {authUser})(App);
