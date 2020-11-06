import React from "react";

import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "./SearchRecipeComponent.css"

import {
    findRecipes,
    updateKeyword
} from "../actions/recipeActions"

const SearchRecipeComponent = (
    { keyword, recipes = [],
        findRecipes, updateKeyword }) =>

    <div className="">
        <h2>Search Recipes</h2>
        <div className="">
            <input className="form-control mx-auto search-fld"
                placeholder="keywords"
                value={keyword}
                onChange={(event) => updateKeyword(event.target.value)} />
            <div className="input-group-append mx-auto search-btn">
                <button onClick={() => findRecipes(keyword)}
                    className="btn btn-primary">
                    Search
            </button>
            </div>
        </div>
    </div>

const stateToPropertyMapper = (state) => ({
    recipes: state.recipeReducer.recipes,
    keyword: state.recipeReducer.keyword
})

const propertyToDispatchMapper = (dispatch) => ({
    findRecipes: (recipeName) => findRecipes(dispatch, recipeName),
    updateKeyword: (keyword) => updateKeyword(dispatch, keyword)
})

export default connect
    (stateToPropertyMapper,
        propertyToDispatchMapper)
    (SearchRecipeComponent)

