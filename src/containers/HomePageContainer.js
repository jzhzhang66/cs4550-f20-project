import React from 'react';
import {Link} from "react-router-dom";
import SearchRecipeComponent from "../components/SearchRecipeComponent";
import RecipeTableComponent from "../components/RecipeTableComponent";
import {connect} from "react-redux";
import {findRandomRecipes} from "../actions/homeActions";

class HomePageContainer extends React.Component {
  popularRecipe = []; // the most liked recipe from our database
  favoriteRecipes = []; // the user's liked recipes
  recentRecipes = []; // most recent recipes from our database
  randomRecipes = []; // rando

  componentDidMount() {
    this.props.findRandomRecipes(4)
  }

  render() {
    return(
        <div className="container">
          {/*make navbar component*/}
          <nav className="navbar sticky-top bg-light">
            <Link to="/" className="navbar-brand">
              Home
            </Link>
            <Link to="/profile" className="nav-link nav-item navbar-nav">
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

          <h3>Most Popular Recipe</h3>
          <div className="card-deck">
            <div className="sm-col-6">
              <div className="card">
                <img src="https://picsum.photos/300/200" className="card-img-top"></img>
                <div className="card-body">
                  <h5 className="card-title">Recipe</h5>
                  <p className="card-text">
                    Recipe description</p>
                  <a href="#" className="btn btn-primary">more...</a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3>Recent Favorites</h3>
            <div className="card-deck">
              <div className="col-xs-12 col-sm-3">
                <div className="card">
                  <img src="https://picsum.photos/300/200" className="card-img-top"></img>
                  <div className="card-body">
                    <h5 className="card-title">Recipe</h5>
                    <p className="card-text">
                      Recipe description</p>
                    <a href="#" className="btn btn-primary">more...</a>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-3">
                <div className="card">
                  <img src="https://picsum.photos/300/200" className="card-img-top"></img>
                  <div className="card-body">
                    <h5 className="card-title">Recipe</h5>
                    <p className="card-text">
                      Recipe description</p>
                    <a href="#" className="btn btn-primary">more...</a>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-3">
                <div className="card">
                  <img src="https://picsum.photos/300/200" className="card-img-top"></img>
                  <div className="card-body">
                    <h5 className="card-title">Recipe</h5>
                    <p className="card-text">
                      Recipe description</p>
                    <a href="#" className="btn btn-primary">more...</a>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-3">
                <div className="card">
                  <img src="https://picsum.photos/300/200" className="card-img-top"></img>
                  <div className="card-body">
                    <h5 className="card-title">Recipe</h5>
                    <p className="card-text">
                      Recipe description</p>
                    <a href="#" className="btn btn-primary">more...</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3>More recipes</h3>
            <div className="card-deck">
              <div className="col-xs-12 col-sm-3">
                <div className="card">
                  <img src="https://picsum.photos/300/200" className="card-img-top"></img>
                  <div className="card-body">
                    <h5 className="card-title">Recipe</h5>
                    <p className="card-text">
                      Recipe description</p>
                    <a href="#" className="btn btn-primary">more...</a>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-3">
                <div className="card">
                  <img src="https://picsum.photos/300/200" className="card-img-top"></img>
                  <div className="card-body">
                    <h5 className="card-title">Recipe</h5>
                    <p className="card-text">
                      Recipe description</p>
                    <a href="#" className="btn btn-primary">more...</a>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-3">
                <div className="card">
                  <img src="https://picsum.photos/300/200" className="card-img-top"></img>
                  <div className="card-body">
                    <h5 className="card-title">Recipe</h5>
                    <p className="card-text">
                      Recipe description</p>
                    <a href="#" className="btn btn-primary">more...</a>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-3">
                <div className="card">
                  <img src="https://picsum.photos/300/200" className="card-img-top"></img>
                  <div className="card-body">
                    <h5 className="card-title">Recipe</h5>
                    <p className="card-text">
                      Recipe description</p>
                    <a href="#" className="btn btn-primary">more...</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {console.log(this.randomRecipes)}
          <ul>
            {this.randomRecipes.map(recipe => <li>{recipe.title}</li>)}
          </ul>
          {/*<SearchRecipeComponent/>*/}
          {/*<RecipeTableComponent/>*/}
        </div>
    )
  }

}

const stateToPropertyMapper = (state) => ({
  randomRecipes: state.homeReducer.randomRecipes
});

const propertyToDispatchMapper = (dispatch) => ({
  findRandomRecipes: (numRecipes) => findRandomRecipes(dispatch, numRecipes)
});

export default connect
(stateToPropertyMapper, propertyToDispatchMapper)
(HomePageContainer)
