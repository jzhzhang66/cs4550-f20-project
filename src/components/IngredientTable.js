import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import '../css/RecipeTable.css';
import '../App.css';
import './IngredientTable.css';
import {
addIngredientForMeal
} from '../actions/recipeAndIngredientActions';

const IngredientTable = (addIngredientForMeal, ingredients) =>

            <div>
            <ul className="recipe-list">
            {
                ingredients.map(ingredient =>
                    <li className="list-group-item list-item">
                        <Link to={`/ingredients/${ingredient.id}`} className="recipe-title">
                            {ingredient.name}
                        </Link>
                        <button className="btn btn-outline-secondary add-ingredient"
                         onClick={() => addIngredientForMeal(this.props.match.params.mealId, ingredient)}>Add</button>
                    </li>
                )
            }
            </ul>
        </div>
   

const stateToPropertyMapper = (state) => ({
    ingredients: state.ingredientReducer.ingredients
})

const propertyToDispatchMapper = (dispatch) => ({
    addIngredientForMeal: (mealId, ingredient) => addIngredientForMeal(dispatch, mealId, ingredient)
})

export default connect
    (stateToPropertyMapper,
        propertyToDispatchMapper)
    (IngredientTable)
