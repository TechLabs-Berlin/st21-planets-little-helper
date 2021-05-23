import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Form from "./pages/form/index"
import UserProfile from "./pages/userProfile"
import Challenges from "./pages/challenges"
import Dashboard from "./pages/dashboard"
import LandingPage from "./pages/landingPage"
import Header from "./components/header"
import Footer from "./components/footer"

import './App.css';

function App() {
  return (
    <Router className="App">
      <Header/>
      <Switch>
        <Route path="/form" component={Form}/>
        <Route path="/user/:userId" component={UserProfile}/>
        <Route path="/challenges/:category" component={Challenges}/>
        <Route path="/challenges" component={Dashboard}/>
        <Route path="/" component={LandingPage}/>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
