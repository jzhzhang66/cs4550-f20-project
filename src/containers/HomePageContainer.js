import React from 'react';
import {Link} from "react-router-dom";

class HomePageContainer extends React.Component {
  popularRecipe = []; // the most liked recipe from our database
  favoriteRecipes = []; // the user's liked recipes
  recentRecipes = []; // most recent recipes from our database

  componentDidMount() {
  }

  render() {
    return(
        <div className="container">

          {/*make navbar component*/}
          <nav className="navbar sticky-top">
            <Link to="/" className="navbar-brand">
              Home
            </Link>
            <Link to="/profile" className="nav-link nav-item">
              Profile
            </Link>
            <Link to="/login" className="nav-link nav-item">
              Login
            </Link>
            <form className="form-inline float-right">
              <input className="form-control mr-sm-2 wbdv-field wbdv-new-course"
                     placeholder="Search for a recipe"></input>
              <button
                  className="btn btn-outline-primary my-2 my-sm-0">
                <i className="fas fa-search"></i>
              </button>
            </form>
          </nav>


        </div>
    )
  }

}

export default HomePageContainer
