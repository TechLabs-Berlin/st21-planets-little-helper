import React from "react";
import ReactDOM from 'react-dom';
import { NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import "./header.css";
import { logout } from "../../store/actions/auth";

class Header extends React.Component {

  state = { clicked: false };

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
    document.addEventListener('click', this.handleClickOutside, true);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
    document.removeEventListener('click', this.handleClickOutside, true);
  }

  handleResize = () => {
    this.setState({ clicked: false });
    this.forceUpdate();
  };


  logout = (e) => {
    e.preventDefault();
    this.props.logout();
    this.props.history.push("/")
  };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  handleClickOutside = event => {
    const domNode = ReactDOM.findDOMNode(this);
    if (!domNode || !domNode.contains(event.target)) {
      this.setState({ clicked: false });
    }
  }

  render() {

    return (
      <header onClick={this.state.clicked ? this.handleClick : null}>
        <nav className="navbar" >

          <NavLink to="/" className="nav-logo-link">
            <div className="navbar-logo-name">
              <span>Planet's Little Helper</span>
            </div>
          </NavLink>

          <ul
            className={this.state.clicked ? "nav-menu active" : "nav-menu"}
            onClick={this.handleClick}
          >
            <li>
              <NavLink to="/challenges" className="nav-links" activeStyle={{fontWeight: 600}}>
                Challenges
              </NavLink>
            </li>

            {this.props.currentUser.isAuthenticated && (
              <>
                <li>
                  <NavLink
                    to={`/user/${this.props.currentUser.user.id}`}
                    className="nav-links"
                    activeStyle={{fontWeight: 600}}
                  >
                    Profile
                  </NavLink>
                </li>
                <li className="logOutLi">
                  <button className="log-out-btn" onClick={this.logout}>
                    Log out
                  </button>
                </li>
              </>
            )}
            {!this.props.currentUser.isAuthenticated && (
              <>
                <li>
                  <NavLink to="/signin" className="nav-links" activeStyle={{fontWeight: 600}}>
                    Sign in
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/signup" className="nav-links" activeStyle={{fontWeight: 600}}>
                    Sign up
                  </NavLink>
                </li>
              </>
            )}
          </ul>

          <div className="navbar-menu-icon" onClick={this.handleClick}>
            <i
              className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </div>
        </nav>
      </header>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
  };
}

export default withRouter(connect(mapStateToProps, { logout })(Header));
