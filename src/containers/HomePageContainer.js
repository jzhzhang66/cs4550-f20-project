import React from 'react';
import {Link} from "react-router-dom";
import SearchRecipeComponent from "../components/SearchRecipeComponent";
import RecipeTableComponent from "../components/RecipeTableComponent";
import {connect} from "react-redux";
import {findRandomRecipes} from "../actions/homeActions";
import NavBarComponent from '../components/NavBarComponent';

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
