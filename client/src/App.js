import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Form from "./pages/form/index";
import UserProfile from "./pages/userProfile";
import Category from "./pages/categories/category";
import AllCategories from "./pages/categories";
import LandingPage from "./pages/landingPage";
import Header from "./components/header";
import Footer from "./components/footer";
import { Provider } from "react-redux";
import { configureStore } from "./store";

import "./App.css";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <Router className="App">
        <Header />
        <Switch>
          <Route path="/form" component={Form} />
          <Route path="/user/:userId" component={UserProfile} />
          <Route path="/challenges/:category" component={Category} />
          <Route path="/challenges" component={AllCategories} />
          <Route path="/" component={LandingPage} />
        </Switch>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
