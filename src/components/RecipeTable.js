import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import '../css/RecipeTable.css';
import '../App.css';
import {
    addRecipeForMeal
} from '../actions/recipeAndIngredientActions';

const RecipeTable = (
    { recipes = []}) =>

    <div>
        <ul className="recipe-list">
            {
                recipes.map(recipe =>
                    <li className="list-group-item list-item">
                        <Link to={`./recipes/${recipe.id}`} className="recipe-title">
                            {recipe.title}
                        </Link>
                        <img src={recipe.image} alt="" className="recipe-image" />
                    </li>
                )

            }
        </ul>
    </div>


const stateToPropertyMapper = (state) => ({
    recipes: state.recipeReducer.recipes
})

const propertyToDispatchMapper = (dispatch) => ({
    addRecipeForMeal: (mealId, recipe) => addRecipeForMeal(dispatch, mealId, recipe)
})

export default connect
    (stateToPropertyMapper,
        propertyToDispatchMapper)
    (RecipeTable)
