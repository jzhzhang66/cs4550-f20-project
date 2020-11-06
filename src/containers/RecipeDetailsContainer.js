import React from 'react';
import { connect } from "react-redux";
import { BrowserRouter as Router, Route } from 'react-router-dom';

import IngredientsComponent from "../components/IngredientsComponent";

import {
    findRecipeInfoById
} from "../actions/recipeActions"

// put the router in here
class RecipeDetailsContainer extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
      const recipeId = this.props.match.params.recipeId
      this.props.findRecipeInfoById(recipeId)
  }


  render() {
    return (
        <div className="container">
          <h1>{this.props.recipe.title}</h1>
          <h3>Serving Size: {this.props.recipe.servings}</h3>
          <img src={this.props.recipe.image} alt="" />
          <h3>Estimated Time: {this.props.recipe.readyInMinutes} minutes</h3>
          <h3>Heath Score: {this.props.recipe.heathScore} </h3>
          <div className="col-3">
            <IngredientsComponent/>
          </div>
        </div>
    )
  }
}

const stateToPropertyMapper = (state) => ({
    recipe: state.recipeReducer.recipe
})

const propertyToDispatchMapper = (dispatch) => ({
    findRecipeInfoById: (recipeId) => findRecipeInfoById(dispatch, recipeId)
})

export default connect
    (stateToPropertyMapper, propertyToDispatchMapper)
    (RecipeDetailsContainer)