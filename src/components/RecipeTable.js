import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import '../css/RecipeTable.css';
import '../App.css';
import {
    addRecipeForMeal
} from '../actions/recipeActions';

const RecipeTable = (
    { recipes = []}) =>

    <div>
        <ul className="recipe-list">
        {
            recipes.map(recipe =>
                <li className="list-group-item list-item">
                    <Link to={`/recipes/${recipe.id}`} className="recipe-title">
                        {recipe.title}
                    </Link>
                    <img src={recipe.image} alt="" className="recipe-image"/>
                    {/* <button className="btn btn-outline-secondary add-ingredient"
                            onClick={() => addRecipeForMeal(mealId, recipe)}>Add</button>}
                    <input
                        className="form-control"
                        placeholder="serving size"
                        onChange={(event) =>
                            console.log(event)} /> */}
                </li>
                
            )

        }
        </ul>
    </div>


const stateToPropertyMapper = (state) => ({ 
    recipes: state.recipeReducer.recipes,
})

const propertyToDispatchMapper = (dispatch) => ({

})

export default connect
    (stateToPropertyMapper,
        propertyToDispatchMapper)
    (RecipeTable)
