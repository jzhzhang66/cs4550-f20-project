import React from 'react';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {findRandomRecipes} from "../actions/homeActions";
import '../css/HomePage.css';

class HomePage extends React.Component {
  popularUser = []; // the most followed user from our database's meal plan - need a function to retrieve the user's meal plan
  userFollowings = []; // the user's followings
  randomMealPlans = []; // random meal plans

  componentDidMount() {
    // this.props.findRandomRecipes(4)
  }

  render() {
    return(
        <div className="container">
          <h3 className="header-styling">Most Popular Meal Plan</h3>
          <div className="card-deck">
            <div className="sm-col-6">
              <div className="card">
                <img src="https://picsum.photos/300/200" className="card-img-top img-styling"></img>
                <div className="card-body">
                  <h5 className="card-title">Meal Plan</h5>
                  <p className="card-text">
                    Meal plan description</p>
                  <a href="#" className="btn btn-outline-secondary">more...</a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="header-styling">Your Recently Favorited Meal Plans (follower)</h3>
            <div id="carouselExampleControls" className="carousel slide"
                 data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img className="d-block w-100" src="https://picsum.photos/300/200" alt="First slide"></img>
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src="https://picsum.photos/300/200" alt="Second slide"></img>
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src="https://picsum.photos/300/200" alt="Third slide"></img>
                </div>
              </div>
              <a className="carousel-control-prev"
                 role="button"
                 data-slide="prev">
                <span className="carousel-control-prev-icon"
                      aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next"
                 href="#carouselExampleControls" role="button"
                 data-slide="next">
                <span className="carousel-control-next-icon"
                      aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="header-styling">Your Recently Created Meal Plans (creator)</h3>
            <div id="carouselExampleControls" className="carousel slide"
                 data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img className="d-block w-100" src="https://picsum.photos/300/200" alt="First slide"></img>
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src="https://picsum.photos/300/200" alt="Second slide"></img>
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src="https://picsum.photos/300/200" alt="Third slide"></img>
                </div>
              </div>
              <a className="carousel-control-prev"
                 role="button"
                 data-slide="prev">
                <span className="carousel-control-prev-icon"
                      aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next"
                 href="#carouselExampleControls" role="button"
                 data-slide="next">
                <span className="carousel-control-next-icon"
                      aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="header-styling">More Meal Plans</h3>
            <div className="card-deck">
              <div className="col-xs-12 col-sm-3">
                <div className="card">
                  <img src="https://picsum.photos/300/200" className="card-img-top img-styling"></img>
                  <div className="card-body">
                    <h5 className="card-title">Recipe</h5>
                    <p className="card-text">
                      Recipe description</p>
                    <a href="#" className="btn btn-outline-secondary">more...</a>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-3">
                <div className="card">
                  <img src="https://picsum.photos/300/200" className="card-img-top img-styling"></img>
                  <div className="card-body">
                    <h5 className="card-title">Recipe</h5>
                    <p className="card-text">
                      Recipe description</p>
                    <a href="#" className="btn btn-outline-secondary">more...</a>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-3">
                <div className="card">
                  <img src="https://picsum.photos/300/200" className="card-img-top img-styling"></img>
                  <div className="card-body">
                    <h5 className="card-title">Recipe</h5>
                    <p className="card-text">
                      Recipe description</p>
                    <a href="#" className="btn btn-outline-secondary">more...</a>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-3">
                <div className="card">
                  <img src="https://picsum.photos/300/200" className="card-img-top img-styling"></img>
                  <div className="card-body">
                    <h5 className="card-title">Recipe</h5>
                    <p className="card-text">
                      Recipe description</p>
                    <a href="#" className="btn btn-outline-secondary">more...</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*{console.log(this.randomRecipes)}*/}
          {/*<ul>*/}
          {/*  {this.randomRecipes.map(recipe => <li>{recipe.title}</li>)}*/}
          {/*</ul>*/}
          {/*<SearchRecipeComponent/>*/}
          {/*<RecipeTableComponent/>*/}
        </div>
    )
  }

}

const stateToPropertyMapper = (state) => ({
  // randomRecipes: state.homeReducer.randomRecipes
});

const propertyToDispatchMapper = (dispatch) => ({
  findRandomRecipes: (numRecipes) => findRandomRecipes(dispatch, numRecipes)
});

export default connect
(stateToPropertyMapper, propertyToDispatchMapper)
(HomePage)
