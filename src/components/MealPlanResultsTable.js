import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import '../css/RecipeTable.css';
import '../App.css';
import '../css/IngredientTable.css';

const MealPlanResultsTable = ({ mealPlans = [] }) =>

    <div>
        <ul className="recipe-list">
            {
                mealPlans.map(mealPlan =>
                    <li className="list-group-item list-item">
                        <Link to={`./mealPlan/${mealPlan.id}`} className="recipe-title">
                            {mealPlan.name}
                        </Link>
                    </li>
                )
            }
        </ul>
    </div>

const stateToPropertyMapper = (state) => {
    console.log(state)
    return ({
        mealPlans: state.mealPlanReducer.mealPlans
    })
}

const propertyToDispatchMapper = (dispatch) => ({
})

export default connect
    (stateToPropertyMapper,
        propertyToDispatchMapper)
    (MealPlanResultsTable)
