import React from "react";

import { Link } from "react-router-dom";
import { connect } from "react-redux";


import {
    findRecipeInfoById
} from "../actions/recipeActions"

const IngredientsComponent = (
    {recipe = {}, recipeIngredients = []}) =>

    <div className="">
        <h2>Ingredients</h2>
        {
            console.log(recipe)
        }

            {
                recipeIngredients.map(ingredient =>
                    <li className="list-group-item">
                        {ingredient.name}
                        Amount: {ingredient.measures.metric.amount} {ingredient.measures.metric.unitLong}
                    </li>
                )
            }
    </div>

const stateToPropertyMapper = (state) => ({
    recipe: state.recipeReducer.recipe,
    recipeIngredients: state.recipeReducer.recipe.extendedIngredients
})

const propertyToDispatchMapper = (dispatch) => ({
    findRecipeInfoById: (recipeId) => findRecipeInfoById(dispatch, recipeId)
})

export default connect
    (stateToPropertyMapper, propertyToDispatchMapper)
    (IngredientsComponent)
