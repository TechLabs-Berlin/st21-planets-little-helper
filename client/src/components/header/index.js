import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import "./header.css";
import { logout } from "../../store/actions/auth";

class Header extends React.Component {
  state = { clicked: false };

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    this.setState({clicked: false});
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

  render() {

    return (
      <header>
        <nav className="navbar">
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
              <NavLink to="/challenges" className="nav-links">
              Challenges
              </NavLink>
            </li>

            {this.props.currentUser.isAuthenticated && (
              <>
                <li>
                  <NavLink
                    to={`/user/${this.props.currentUser.user.id}`}
                    className="nav-links"
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
                  <NavLink to="/signin" className="nav-links">
                    Sign in
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/signup" className="nav-links">
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
