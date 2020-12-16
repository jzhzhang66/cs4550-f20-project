import React from 'react';
import { Link } from 'react-router-dom';
import '../css/NavBar.css';
import { findRandomRecipes } from "../actions/homeActions";
import { profile } from "../actions/userActions";
import { connect } from "react-redux";

// const NavBar = ({}) =>
//     <nav className="navbar sticky-top bg-light nav-styling">
//         <Link to="/" className="nav-link nav-item navbar-nav text-styling">
//             Home
//         </Link>
//         <Link to="/profile" className="nav-link nav-item navbar-nav text-styling">
//             Profile
//         </Link>
//         <Link to="/login" className="nav-link nav-item text-styling">
//             Login
//         </Link>
//         <Link to="/search" className="nav-link nav-item text-styling">
//             Search
//         </Link>
//     </nav>
//
// export default NavBar

class NavBar extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.profile()
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.user.id === undefined || this.props.user.id === "") {
      if(this.props.user.id !== this.prevProps.user.id){
        this.props.profile()
      }
    }
  }

  render() {
    return (
      <nav className="navbar sticky-top bg-light nav-styling">
        <Link to="/" className="nav-link nav-item navbar-nav text-styling">
          Home
          </Link>
        <Link to="/profile"
          className="nav-link nav-item navbar-nav text-styling">
          Profile
          </Link>
        <Link to="/login" className="nav-link nav-item text-styling">
          Login
          </Link>
        <Link to="/search" className="nav-link nav-item text-styling">
          Search
          </Link>
        <div className="nav-item text-styling">{this.props.user.username}</div>
      </nav>
    )
  }
}

const stateToPropertyMapper = (state) => ({
  user: state.userReducer.user,
});

const propertyToDispatchMapper = (dispatch) => ({
  profile: () => profile(dispatch)
});

export default connect
  (stateToPropertyMapper, propertyToDispatchMapper)
  (NavBar)

