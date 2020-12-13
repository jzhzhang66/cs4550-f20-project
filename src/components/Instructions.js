import React from 'react';
import { connect } from "react-redux";
import { BrowserRouter as Router, Route } from 'react-router-dom';


import {
    findRecipeInstructionsById
} from "../actions/recipeActions"

// put the router in here
const Instructions = (
    { recipe = {}, recipeInstructions = {steps: []} }) => {
        console.log(recipeInstructions)
    return <div className="">
        {/* <h2>Instructions</h2> */}

        {/* {
            recipeInstructions.steps.map(step =>
                <li className="list-group-item">
                    {step.number + ": " + step.step}
                    <br/>
                    Ingredients: {step.ingredients.map(ingredient =>
                        <li>
                            {ingredient.name}
                        </li>)}
                    Equipment: {step.equipment.map(equip =>
                        <li>
                            {equip.name}
                        </li>
                    )}
                </li>
            )
        } */}
    </div>
    }

const stateToPropertyMapper = (state) => ({
    recipe: state.recipeReducer.recipe,
    recipeInstructions: state.recipeReducer.instructions
})

const propertyToDispatchMapper = (dispatch) => ({
    findRecipeInstructionsById: (recipeId) => findRecipeInstructionsById(dispatch, recipeId)
})

export default connect
    (stateToPropertyMapper, propertyToDispatchMapper)
    (Instructions)
