import React from "react";
import { connect } from "react-redux";
import { BrowserRouter, Link, Route } from "react-router-dom";
import {
  deleteTopic,
  createTopic,
  updateTopic
} from "../actions/topicActions"

import "./RecipesAndIngredients.css";


const RecipesAndIngredients = (
  { mealPlan, dailyPlanId, lessonId, topics = [],
    deleteTopic, createTopic, updateTopic, recipes, ingredients }) =>
    <div className="row recipes-ingredients">
      <div className="col-5">
      <h3>Recipes</h3>
      <ul>
      {
        recipes.map(recipe => <li key={recipe.id}>{recipe.title}
        <button className="btn btn-outline-danger delete">
        <i className="fas fa-minus"></i>
        </button>
        </li>)
      }
      </ul>
      <Link to="./search/recipes">
      <button className="btn btn-outline-secondary">
        Search Recipes
        </button>
        </Link>
      </div>
      <div className="col-4">
      <h3>Ingredients</h3>
      <ul>
      {
        ingredients.map(ingredient => <li key={ingredient.id}>{ingredient.title}
                <button className="btn btn-outline-danger delete">
        <i className="fas fa-minus"></i>
        </button>
        </li>)
      }
      </ul>
      <Link to="/search/ingredients">
      <button className="btn btn-outline-secondary">
        Search Ingredients
        </button>
      </Link>
      </div>
    </div>

const stateToPropertyMapper = (state) => ({
  topics: state.recipesAndIngredientsReducer.topics,
  lessonId: state.recipesAndIngredientsReducer.lessonId,
  dailyPlanId: state.mealReducer.dailyPlanId,
  mealPlan: state.mealPlanReducer.mealPlan, 
  recipes: state.recipesAndIngredientsReducer.recipes,
  ingredients: state.recipesAndIngredientsReducer.ingredients
})

const propertyToDispatchMapper = (dispatch) => ({
  deleteTopic: (topic) => deleteTopic(dispatch, topic),
  createTopic: (lessonId, topic) => createTopic(dispatch, lessonId, topic),
  updateTopic: (topic) => updateTopic(dispatch, topic)
})

export default connect
  (stateToPropertyMapper,
    propertyToDispatchMapper)
  (RecipesAndIngredients)