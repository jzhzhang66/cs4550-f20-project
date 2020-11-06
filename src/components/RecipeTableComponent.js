import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import '../App.css';

const RecipeTableComponent = (
    { recipes }) =>

    <div>
        {
            recipes.map(recipe =>
                <li className="list-group-item">
                    <Link to={`/recipes/${recipe.id}`}>
                        {recipe.title}
                    </Link>
                    <img src={recipe.image} alt="" />
                </li>
            )

        }
    </div>



const stateToPropertyMapper = (state) => ({
    recipes: state.recipeReducer.recipes,
})

const propertyToDispatchMapper = (dispatch) => ({
})

export default connect
    (stateToPropertyMapper,
        propertyToDispatchMapper)
    (RecipeTableComponent)
