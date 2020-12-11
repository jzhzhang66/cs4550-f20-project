import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import '../css/RecipeTable.css';
import '../App.css';

const IngredientTable = (
    { ingredients }) =>

    <div>
        <ul className="recipe-list">
        {
            ingredients.map(ingredient =>
                <li className="list-group-item list-item">
                    <Link to={`/recipes/${ingredient.id}`} className="recipe-title">
                        {ingredient.name}
                    </Link>
                </li>
            )
        }
        </ul>
    </div>



const stateToPropertyMapper = (state) => ({
    ingredients: state.ingredientReducer.ingredients,
})

const propertyToDispatchMapper = (dispatch) => ({
})

export default connect
    (stateToPropertyMapper,
        propertyToDispatchMapper)
    (IngredientTable)
