import React from "react";

import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "../css/SearchRecipe.css"

import {
    findMealPlansByName,
    updateKeyword
} from "../actions/mealPlanActions"

const SearchMealPlan = ({ keyword, mealPlans = [], findMealPlansByName, updateKeyword }) =>
    <div>
        <h1 className="search-recipes-header">Search Meal Plans</h1>
        <div className="search-bar">
            <input className="form-control mx-auto search-fld"
                placeholder="keywords"
                value={keyword}
                onChange={(event) => updateKeyword(event.target.value)} />
            <div className="input-group-append mx-auto search-btn">
                <button onClick={() => findMealPlansByName(keyword)}
                    className="btn btn-secondary">
                    Search
            </button>
            </div>
        </div>
    </div>


const stateToPropertyMapper = (state) => ({
    mealPlans: state.mealPlanReducer.mealPlans,
    keyword: state.mealPlanReducer.keyword
})

const propertyToDispatchMapper = (dispatch) => ({
    findMealPlansByName: (mealPlanName) => findMealPlansByName(dispatch, mealPlanName),
    updateKeyword: (keyword) => updateKeyword(dispatch, keyword)
})

export default connect
    (stateToPropertyMapper,
        propertyToDispatchMapper)
    (SearchMealPlan)

