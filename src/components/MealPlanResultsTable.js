import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import '../css/RecipeTable.css';
import '../App.css';
import '../css/IngredientTable.css';
import { addFavorite } from '../actions/favoriteActions';

const MealPlanResultsTable = ({ mealPlans = [], user, addFavorite}) =>

    <div>
        <ul className="recipe-list">
            {
                mealPlans.map(mealPlan =>
                    <li className="list-group-item list-item">
                        <Link to={`./mealPlan/${mealPlan.id}`} className="recipe-title">
                            {mealPlan.name}
                        </Link>
                        <button className="btn btn-outline-secondary" 
                        onClick={() => addFavorite({followerId: user.id, mealPlanId: mealPlan.id, time: new Date(), mealPlanName: mealPlan.name})}>Add to favorites</button>
                    </li>
                )
            }
        </ul>
    </div>

const stateToPropertyMapper = (state) => {
    console.log(state)
    return ({
        mealPlans: state.mealPlanReducer.mealPlans,
        user: state.userReducer.user
    })
}

const propertyToDispatchMapper = (dispatch) => ({
    addFavorite: (favorite) => addFavorite(dispatch, favorite)
})

export default connect
    (stateToPropertyMapper,
        propertyToDispatchMapper)
    (MealPlanResultsTable)
