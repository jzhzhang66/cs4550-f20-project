import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import '../css/RecipeTable.css';
import '../App.css';
import '../css/IngredientTable.css';
import {
    addIngredientForMeal
} from '../actions/recipeAndIngredientActions';

import {
    findIngredientInfoById
} from '../actions/ingredientActions';

const IngredientTable = ({ addIngredientForMeal, ingredients = [], mealId = undefined, findIngredientInfoById, currIngredient }) =>

    <div>
        <ul className="recipe-list">
            {
                ingredients.map(ingredient =>
                    <li className="list-group-item list-item">
                        <Link to={`/ingredients/${ingredient.id}`} className="recipe-title">
                            {ingredient.name}
                        </Link>
                        {mealId &&
                            <button className="btn btn-outline-secondary add-ingredient"
                                onClick={() => addIngredientForMeal(mealId, ingredient)}>Add</button>}
                        <input
                            className="form-control"
                            placeholder="serving size"
                            onChange={(event) =>
                                console.log(event)} />
                        <select>
                            {  
                            //    findIngredientInfoById(ingredient.id)
                            }
                            {
                                currIngredient.possibleUnits.map(unit => <option value={unit}>{unit}</option>)
                            }
                        </select>
                    </li>
                )
            }
        </ul>
    </div>





const stateToPropertyMapper = (state) => {
    console.log(state)
    return ({
        ingredients: state.ingredientReducer.ingredients,
        currIngredient: state.ingredientReducer.ingredient
    })
}

const propertyToDispatchMapper = (dispatch) => ({
    addIngredientForMeal: (mealId, ingredient) => addIngredientForMeal(dispatch, mealId, ingredient),
    findIngredientInfoById: (ingredientId) => findIngredientInfoById(dispatch, ingredientId)
})

export default connect
    (stateToPropertyMapper,
        propertyToDispatchMapper)
    (IngredientTable)
